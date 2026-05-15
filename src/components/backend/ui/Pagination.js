import React from "react";
import { LuChevronLeft, LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Button } from "./Button";

const Pagination = ({ currentPage, totalPages, onPageChange, className = "" }) => {
    if (totalPages <= 1) return null;

    const pages = [];
    const generatePages = () => {
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) pages.push(i);
            }
            if (currentPage < totalPages - 2) pages.push('...');
            if (!pages.includes(totalPages)) pages.push(totalPages);
        }
    };
    generatePages();

    return (
        <div className={`flex items-center justify-between px-2 py-4 ${className}`}>
            <div className="text-sm text-white/40 font-medium">Showing Page <span className="text-white">{currentPage}</span> of <span className="text-white">{totalPages}</span></div>
            <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="h-8 w-8 p-0 border border-white/10 bg-white/[0.02] hover:bg-white/10 disabled:opacity-30"><LuChevronLeft size={16} /></Button>
                <div className="flex items-center gap-1 mx-1">
                    {pages.map((page, idx) => (
                        page === '...' ? (
                            <span key={`ellipsis-${idx}`} className="flex h-8 w-8 items-center justify-center text-white/30"><LuEllipsis size={14} /></span>
                        ) : (
                            <button key={page} onClick={() => onPageChange(page)} className={`h-8 w-8 rounded-lg text-xs font-medium transition-all border ${currentPage === page ? "bg-white/10 border-white/20 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" : "bg-transparent border-transparent text-white/50 hover:bg-white/5 hover:text-white"}`}>{page}</button>
                        )
                    ))}
                </div>
                <Button variant="ghost" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="h-8 w-8 p-0 border border-white/10 bg-white/[0.02] hover:bg-white/10 disabled:opacity-30"><LuChevronRight size={16} /></Button>
            </div>
        </div>
    );
};

export { Pagination };
