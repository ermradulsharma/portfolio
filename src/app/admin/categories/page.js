"use client";

import { useState, useEffect } from "react";
import {
    Layers, Search, Plus, Pencil, Boxes, Trash2,
    Layout, Server, Globe, Smartphone, Tablet, Gamepad2,
    Palette, Database, Cloud, Terminal, GitBranch, Box,
    Code2, Webhook, CheckCircle2, ShieldAlert, BrainCircuit,
    Link as LinkIcon, Cpu, CreditCard, Wrench, HardDrive, Monitor, Star
} from "lucide-react";
import { Button, Input, Checkbox, DataTable, ActionModal, Switch } from "@/components/backend/ui";

const IconMap = {
    Layout, Server, Globe, Smartphone, Tablet, Gamepad2,
    Palette, Database, Cloud, Terminal, GitBranch, Box,
    Code2, Webhook, CheckCircle2, ShieldAlert, BrainCircuit,
    Link: LinkIcon, Cpu, CreditCard, Wrench, HardDrive, Monitor, Star
};

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    // Modal & Form States
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [formData, setFormData] = useState({ name: "", description: "", icon: "Layout", is_active: true });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('/api/categories', { cache: 'no-store' });
                const result = await res.json();
                if (result.success) setCategories(result.data);
            } catch (error) {
                console.error("Failed to fetch:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const filteredData = categories.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Dispatcher for modal activation
    const openEditModal = (category) => {
        setEditingCategory(category);
        setFormData({
            name: category.name,
            description: category.description || "",
            icon: category.icon || "Layout",
            is_active: category.is_active ?? true
        });
        setIsEditModalOpen(true);
    };

    // Handlers
    const handleUpdateSave = async () => {
        // API calling goes here in next step
        setIsEditModalOpen(false);
    };

    // High level Column Configuration Definition
    const columns = [
        {
            title: "System ID",
            className: "font-mono text-white/30",
            render: (val, record, globalIdx) => `#${globalIdx}`
        },
        {
            title: "Icon",
            render: (_, record) => {
                const IconComponent = IconMap[record.icon] || Layers;
                return (
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all shadow-sm">
                            <IconComponent size={16} />
                        </div>
                    </div>
                );
            }
        },
        {
            title: "Domain Name",
            dataIndex: "name",
            className: "font-medium text-white/90"
        },
        {
            title: "Identifier (Slug)",
            dataIndex: "slug",
            render: (slug) => (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/5">
                    {slug}
                </span>
            )
        },
        {
            title: "Status",
            headerClassName: "text-center",
            className: "text-center",
            render: () => (
                <div className="flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                    <span className="text-sm text-emerald-400/90 font-medium">Active</span>
                </div>
            )
        },
        {
            title: "Actions",
            headerClassName: "text-center",
            className: "text-center",
            render: (_, record) => (
                <div className="flex items-center justify-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all" title="View Technology"><Boxes size={16} /></Button>
                    <Button onClick={() => openEditModal(record)} variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all" title="Edit Domain"><Pencil size={16} /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all" title="Delete Permanent"><Trash2 size={16} /></Button>
                </div>
            )
        }
    ];

    return (
        <div className="relative animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-3">
                        <Layers size={32} className="text-white/60" /> Categories Console
                    </h1>
                    <p className="text-white/40 text-sm mt-1">Manage system taxonomy and global domains ({filteredData.length})</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                        <Input placeholder="Search domains..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 w-64" />
                    </div>
                    <Button variant="premium" className="gap-2"><Plus size={16} /> Add Domain</Button>
                </div>
            </div>

            {loading ? (
                <div className="h-[400px] w-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
                </div>
            ) : (
                <DataTable key={searchTerm} columns={columns} data={filteredData} selectable={true} paginated={true} itemsPerPage={10} keyField="_id" onSelectionChange={(ids) => console.log("Selected:", ids)} />
            )}

            {/* Abstract Encapsulated Action Modal */}
            <ActionModal open={isEditModalOpen} onOpenChange={setIsEditModalOpen} title="Edit Taxonomy Domain" description="Modify specific metadata configuration for the selected track." icon={Pencil} iconColor="text-emerald-400" saveText="Save" cancelText="Cancel" onSave={handleUpdateSave}>
                <div className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/60 uppercase tracking-wide px-1">Domain Name</label>
                        <Input value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder="e.g. Artificial Intelligence" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/60 uppercase tracking-wide px-1">Identity Icon</label>
                        <div className="grid grid-cols-7 gap-2 bg-white/[0.02] p-2 rounded-xl border border-white/5">
                            {Object.keys(IconMap).map((key) => {
                                const Comp = IconMap[key];
                                const isActive = formData.icon === key;
                                return (
                                    <button key={key} type="button" onClick={() => setFormData(prev => ({ ...prev, icon: key }))} className={`h-9 w-9 flex items-center justify-center rounded-lg transition-all border ${isActive ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.3)]' : 'bg-transparent border-transparent text-white/30 hover:text-white hover:bg-white/5'}`} title={key}><Comp size={16} /></button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/60 uppercase tracking-wide px-1">Description</label>
                        <textarea value={formData.description} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} className="flex w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 transition-all min-h-[100px] resize-none" placeholder="Detailed technological specialization roadmap details..." />
                    </div>
                    <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                        <label className="text-sm font-medium text-white">Status</label>
                        <Switch checked={formData.is_active} onChange={(val) => setFormData(prev => ({ ...prev, is_active: val }))} />
                    </div>
                </div>
            </ActionModal>
        </div>
    );
}
