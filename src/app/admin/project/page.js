"use client";
import React, { useState, useEffect } from "react";
import { LuRocket, LuPlus, LuSearch, LuPencil, LuTrash2, LuSparkles, LuLink, LuGithub } from "react-icons/lu";
import { Button, Input, DataTable } from "@/components/backend/ui";
import Link from "next/link";

export default function ProjectListPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchProjects = async () => {
        try {
            const res = await fetch('/api/projects', { cache: 'no-store' });
            const result = await res.json();
            if (result.success) setData(result.data);
        } catch (error) {
            console.error("Project feed load failure:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Are you absolutely certain about deletion? This node cannot be recovered.")) return;
        try {
            // Delete logic (if DELETE handler were added to route) - just mock update state for now
            // Or if they don't have a delete route yet, we alert.
            // Let's write delete endpoint too, but first we'll let the list page delete locally and report.
            const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
            const result = await res.json();
            if (result.success) {
                setData(prev => prev.filter(p => p._id !== id));
            } else {
                alert("Failed to delete project.");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const filteredData = data.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        {
            title: "Title", dataIndex: "title", className: "font-medium text-white", render: (val, record) => (
                <div className="flex flex-col">
                    <span className="font-medium text-sm flex items-center gap-1.5">
                        {val} {record.isFeatured && <LuSparkles size={12} className="text-pink-400 animate-pulse" />}
                    </span>
                    <span className="text-[10px] text-white/40 font-mono mt-0.5 truncate max-w-[220px] block">
                        /{record.slug}
                    </span>
                </div>
            )
        },
        {
            title: "Category", dataIndex: "category", render: (val) => (
                <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] font-medium text-purple-400">
                    {val?.name || 'Unassigned'}
                </span>
            )
        },
        {
            title: "Technologies", dataIndex: "technologies", render: (techs) => (
                <div className="flex flex-wrap gap-1 max-w-[200px]">
                    {(!techs || techs.length === 0) ? (
                        <span className="text-[9px] text-white/20 italic">No Stack</span>
                    ) : (
                        techs.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 bg-white/5 text-[9px] rounded text-white/50 border border-white/5">
                                {tech.name || 'Tech'}
                            </span>
                        ))
                    )}
                    {techs && techs.length > 3 && (
                        <span className="text-[9px] text-white/30 flex items-center px-0.5">+{techs.length - 3}</span>
                    )}
                </div>
            )
        },
        {
            title: "Links", render: (_, record) => (
                <div className="flex items-center gap-2">
                    {record.link?.live ? (
                        <a href={record.link.live} target="_blank" rel="noreferrer" className="p-1 hover:text-pink-400 text-white/40 transition-colors" title="Live URL">
                            <LuLink size={12} />
                        </a>
                    ) : (
                        <span className="p-1 text-white/10 cursor-not-allowed"><LuLink size={12} /></span>
                    )}
                    {record.link?.github ? (
                        <a href={record.link.github} target="_blank" rel="noreferrer" className="p-1 hover:text-cyan-400 text-white/40 transition-colors" title="GitHub Repo">
                            <LuGithub size={12} />
                        </a>
                    ) : (
                        <span className="p-1 text-white/10 cursor-not-allowed"><LuGithub size={12} /></span>
                    )}
                </div>
            )
        },
        {
            title: "Status", dataIndex: "published", render: (val) => (
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border ${
                    val ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/5 border-amber-500/20 text-amber-400'
                }`}>
                    {val ? 'Active' : 'Draft'}
                </span>
            )
        },
        {
            title: "Date", dataIndex: "publishAt", render: (val) => (
                <span className="text-white/30 text-xs font-mono">{val ? new Date(val).toLocaleDateString() : '-'}</span>
            )
        },
        {
            title: "Actions", render: (_, record) => (
                <div className="flex items-center gap-1">
                    <Link href={`/admin/project/edit/${record._id}`}>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-white/30 hover:text-teal-400 flex items-center justify-center">
                            <LuPencil size={12} />
                        </Button>
                    </Link>
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-7 w-7 p-0 text-white/30 hover:text-rose-500 flex items-center justify-center"
                        onClick={() => handleDelete(record._id)}
                    >
                        <LuTrash2 size={12} />
                    </Button>
                </div>
            )
        }
    ];

    return (
        <div className="relative animate-in fade-in duration-500">
            {/* Dashboard Header Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-3">
                        <LuRocket size={24} className="text-pink-500" /> Projects
                    </h1>
                    <p className="text-white/40 text-xs mt-1 font-mono uppercase tracking-wider">Total Projects: {filteredData.length}</p>
                </div>

                <Link href="/admin/project/create">
                    <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:opacity-90 shadow-lg shadow-pink-500/15 text-white border-none h-9 text-xs font-bold px-4">
                        <LuPlus size={14} className="mr-2" /> Add Project
                    </Button>
                </Link>
            </div>

            {/* Search Deck */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 bg-white/[0.01] border border-white/5 rounded-xl p-3 backdrop-blur-lg">
                <div className="relative w-full md:w-80">
                    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                    <Input 
                        placeholder="Search projects..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="pl-9 bg-white/[0.01] border-white/5 h-9 text-xs focus:border-pink-500/40 transition-all" 
                    />
                </div>
            </div>

            {/* Database Projection Deck */}
            <div className="rounded-xl border border-white/5 overflow-hidden bg-white/[0.01]">
                <DataTable
                    columns={columns}
                    data={filteredData}
                    loading={loading}
                    key={searchTerm}
                    emptyMessage="No projects found."
                />
            </div>
        </div>
    );
}
