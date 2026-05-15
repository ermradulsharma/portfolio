"use client";
import React, { useState, useEffect } from "react";
import { LuFeather, LuPlus, LuSearch, LuPencil, LuTrash2, LuSparkles, LuEye } from "react-icons/lu";
import { Button, Input, DataTable } from "@/components/backend/ui";
import Link from "next/link";

export default function BlogListPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blogs', { cache: 'no-store' });
                const result = await res.json();
                if (result.success) setData(result.data);
            } catch (error) {
                console.error("Feed load failure:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredData = data.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        {
            title: "Title", dataIndex: "title", className: "font-medium text-white", render: (val, record) => (
                <div className="flex flex-col">
                    <span className="font-medium text-sm flex items-center gap-1.5">
                        {val} {record.isFeatured && <LuSparkles size={12} className="text-amber-400" />}
                    </span>
                    <span className="text-xs text-white/40 font-mono mt-0.5 truncate max-w-[200px]">/{record.slug}</span>
                </div>
            )
        },
        {
            title: "Categories", render: (_, record) => (
                <div className="flex flex-wrap gap-1">
                    {record.categories?.slice(0, 2).map((c, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-white/5 text-[10px] rounded text-white/60 border border-white/5">Topic</span>
                    ))}
                </div>
            )
        },
        {
            title: "Stats", render: (_, record) => (
                <div className="flex items-center gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1"><LuEye size={12} /> {record.views || 0}</span>
                </div>
            )
        },
        {
            title: "Status", dataIndex: "published", render: (val) => (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${val ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {val ? 'Active' : 'Draft'}
                </span>
            )
        },
        {
            title: "Date", dataIndex: "createdAt", render: (val) => (
                <span className="text-white/40 text-xs">{val ? new Date(val).toLocaleDateString() : '-'}</span>
            )
        },
        {
            title: "Actions", render: () => (
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 text-white/40 hover:text-emerald-400"><LuPencil size={14} /></Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 text-white/40 hover:text-red-400"><LuTrash2 size={14} /></Button>
                </div>
            )
        }
    ];

    return (
        <div className="relative animate-in fade-in duration-500">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-3">
                        <LuFeather size={24} className="text-white/60" /> Manuscript Registry
                    </h1>
                    <p className="text-white/40 text-sm mt-1">Control global publishing narrative flow ({filteredData.length})</p>
                </div>

                <Link href="/admin/blog/create">
                    <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-90 shadow-lg shadow-rose-500/20 text-white">
                        <LuPlus size={16} className="mr-2" /> Draft New Entry
                    </Button>
                </Link>
            </div>

            {/* Toolbelt */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-4 backdrop-blur-xl">
                <div className="relative w-full md:w-96">
                    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <Input placeholder="Search manuscripts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-white/5 border-white/10 focus:border-rose-500/50 transition-all" />
                </div>
            </div>

            {/* Table Surface */}
            <DataTable
                columns={columns}
                data={filteredData}
                loading={loading}
                key={searchTerm}
                emptyMessage="No published scripts in this channel yet."
            />
        </div>
    );
}
