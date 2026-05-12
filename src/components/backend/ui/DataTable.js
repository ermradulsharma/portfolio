import React, { useState, useMemo, useEffect } from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./Table";
import { Checkbox } from "./Checkbox";
import { Pagination } from "./Pagination";

export function DataTable({
    columns = [],
    data = [],
    selectable = false,
    paginated = false,
    itemsPerPage = 10,
    onSelectionChange,
    emptyMessage = "No records found system wide.",
    keyField = "_id",
    className = ""
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);

    // Recompute slice for current page display
    const paginatedData = useMemo(() => {
        if (!paginated) return data;
        const start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage, paginated]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Notify parent of changes when internal selection fluctuates
    useEffect(() => {
        onSelectionChange?.(selectedRows);
    }, [selectedRows, onSelectionChange]);

    const toggleAll = (checked) => {
        const visibleIds = paginatedData.map(r => r[keyField]);
        if (checked) {
            setSelectedRows(prev => Array.from(new Set([...prev, ...visibleIds])));
        } else {
            setSelectedRows(prev => prev.filter(id => !visibleIds.includes(id)));
        }
    };

    const toggleOne = (id) => {
        setSelectedRows(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const isAllSelected = paginatedData.length > 0 && paginatedData.every(r => selectedRows.includes(r[keyField]));

    return (
        <div className={`space-y-2 ${className}`}>
            <Table>
                <TableHeader>
                    <TableRow>
                        {selectable && (
                            <TableHead className="w-12"><Checkbox checked={isAllSelected} onChange={toggleAll} /></TableHead>
                        )}
                        {columns.map((col, idx) => (
                            <TableHead key={idx} className={col.headerClassName}>{col.title}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedData.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={columns.length + (selectable ? 1 : 0)} className="h-32 text-center text-white/30 font-medium italic">
                                {emptyMessage}
                            </TableCell>
                        </TableRow>
                    ) : (
                        paginatedData.map((record, rIndex) => {
                            const isSelected = selectedRows.includes(record[keyField]);
                            const globalIndex = paginated ? ((currentPage - 1) * itemsPerPage) + rIndex + 1 : rIndex + 1;
                            
                            return (
                                <TableRow key={record[keyField] || rIndex} className={isSelected ? "bg-cyan-500/[0.03]" : ""}>
                                    {selectable && (
                                        <TableCell><Checkbox checked={isSelected} onChange={() => toggleOne(record[keyField])} /></TableCell>
                                    )}
                                    {columns.map((col, cIndex) => {
                                        const cellValue = record[col.dataIndex];
                                        return (
                                            <TableCell key={cIndex} className={col.className}>
                                                {col.render ? col.render(cellValue, record, globalIndex) : cellValue}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            )
                        })
                    )}
                </TableBody>
            </Table>

            {paginated && totalPages > 1 && (
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}
