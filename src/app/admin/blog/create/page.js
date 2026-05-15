"use client";
import React, { useState, useEffect } from "react";
import {
    LuFeather, LuSave, LuArrowLeft, LuEye, LuImage as LuImageIcon,
    LuSettings2, LuGlobe, LuSparkles, LuHash, LuPlus, LuX, LuCheck, LuLayers, LuBoxes
} from "react-icons/lu";
import { Button, Input, Switch, Image } from "@/components/backend/ui";
import NextImage from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill-new");
        const { default: BlotFormatter } = await import("quill-blot-formatter");
        RQ.Quill.register('modules/blotFormatter', BlotFormatter);
        return RQ;
    },
    {
        ssr: false,
        loading: () => <div className="p-6 text-white/20 animate-pulse font-mono text-xs tracking-widest">Loading Interactive Canvas Engine...</div>
    }
);

const quillModules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'code-block'],
        ['clean']
    ],
    // ACTIVATE IMAGE & MEDIA RESIZING ENGINE
    blotFormatter: {}
};

export default function AddBlogPage() {
    const [loading, setLoading] = useState(false);
    const [fetchingData, setFetchingData] = useState(true);

    const [allCategories, setAllCategories] = useState([]);
    const [availableTechs, setAvailableTechs] = useState([]);
    const [authors, setAuthors] = useState([]);

    const [currentKeyword, setCurrentKeyword] = useState("");

    // Image Preview & File Storage Pipeline
    const [imageFiles, setImageFiles] = useState([]); // Holds real File objects for upload
    const [imagePreviews, setImagePreviews] = useState([]); // Holds local preview URLs

    const [formData, setFormData] = useState({
        user: "",
        title: "",
        slug: "",
        description: "",
        content: "",
        categories: [],
        technologies: [],
        isFeatured: false,
        published: true,
        publishAt: new Date().toISOString().substring(0, 10),
        seo: { title: "", description: "", keywords: [] }
    });

    useEffect(() => {
        const loadBaseData = async () => {
            try {
                const [catRes, userRes] = await Promise.all([
                    fetch('/api/admin/categories', { cache: 'no-store' }),
                    fetch('/api/admin/users', { cache: 'no-store' })
                ]);
                const [catData, userData] = await Promise.all([catRes.json(), userRes.json()]);

                if (catData.success) setAllCategories(catData.data);
                if (userData.success) setAuthors(userData.data);
            } catch (err) { console.error("Initialization error", err); }
            finally { setFetchingData(false); }
        };
        loadBaseData();
    }, []);

    useEffect(() => {
        const loadRelationalTech = async () => {
            if (formData.categories.length === 0) {
                setAvailableTechs([]);
                return;
            }
            try {
                const techRes = await fetch(`/api/admin/technologies`, { cache: 'no-store' });
                const techData = await techRes.json();
                if (techData.success) {
                    const filtered = techData.data.filter(tech => formData.categories.includes(tech.category));
                    setAvailableTechs(filtered);
                }
            } catch (err) { console.error(err); }
        };
        loadRelationalTech();
    }, [formData.categories]);

    const toggleSelection = (field, id) => {
        setFormData(prev => {
            const list = prev[field];
            const exists = list.includes(id);
            return { ...prev, [field]: exists ? list.filter(i => i !== id) : [...list, id] };
        });
    };

    // SEO Keyword handlers
    const addKeyword = (e) => {
        if (e.key === 'Enter' && currentKeyword.trim()) {
            e.preventDefault();
            if (!formData.seo.keywords.includes(currentKeyword.trim())) {
                setFormData(prev => ({
                    ...prev,
                    seo: { ...prev.seo, keywords: [...prev.seo.keywords, currentKeyword.trim()] }
                }));
            }
            setCurrentKeyword("");
        }
    };
    const removeKeyword = (kw) => {
        setFormData(prev => ({
            ...prev,
            seo: { ...prev.seo, keywords: prev.seo.keywords.filter(k => k !== kw) }
        }));
    };

    // Image Pipeline Handlers
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        const newPreviews = files.map(file => URL.createObjectURL(file));
        setImageFiles(prev => [...prev, ...files]);
        setImagePreviews(prev => [...prev, ...newPreviews]);
    };

    const removeImage = (index) => {
        // Clean up revoked memory reference
        URL.revokeObjectURL(imagePreviews[index]);

        setImageFiles(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Creating payload suitable for direct server shipment
        const payload = {
            ...formData,
            totalFilesCount: imageFiles.length
        };
        console.log("Ready Payload for Server Logic:", payload, imageFiles);

        setTimeout(() => {
            setLoading(false);
            alert(`Upload protocol complete! Analyzed ${imageFiles.length} binary image files.`);
        }, 1500);
    };

    return (
        <div className="relative min-h-screen animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6">
                <div>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest mb-1">
                        <Link href="/admin/blog" className="hover:text-white transition-colors flex items-center gap-1">
                            <LuArrowLeft size={12} /> Registry
                        </Link>
                        <span>/</span>
                        <span className="text-rose-400">Deployment Config</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                        <LuFeather size={24} className="text-rose-400" /> Add Schema Record
                    </h1>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <Link href="/admin/blog"><Button variant="ghost" size="sm">Discard</Button></Link>
                    <Button size="sm" className="bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg transition-all" onClick={handleSubmit} disabled={loading}>
                        <LuSave size={16} className="mr-2" /> {loading ? "Committing..." : "Push to Database"}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                <div className="xl:col-span-8 space-y-6">
                    {/* METADATA SUMMARY HEADER */}
                    <div className="group bg-white/[0.02] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-xl p-5 backdrop-blur-xl shadow-2xl transition-all duration-500 space-y-4">
                        <div className="space-y-1">
                            <label className="text-[9px] text-white/20 font-mono uppercase tracking-wider font-medium">Target Namespace</label>
                            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Enter Catchy Headline..." className="w-full bg-transparent text-lg font-semibold text-white placeholder:text-white/10 focus:outline-none transition-all" />
                        </div>
                        <div className="h-[1px] bg-gradient-to-r from-white/5 via-white/[0.02] to-transparent"></div>
                        <div className="space-y-1">
                            <label className="text-[9px] text-white/20 font-mono uppercase tracking-wider font-medium">Brief Descriptor</label>
                            <textarea placeholder="Narrative snapshot summary..." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-transparent text-white/50 placeholder:text-white/10 focus:outline-none resize-none min-h-[40px] text-sm leading-relaxed scrollbar-none" />
                        </div>
                    </div>

                    {/* ISOLATED DEEP STREAM CANVAS */}
                    <div className="relative bg-white/[0.02] border border-white/5 hover:border-rose-500/10 rounded-xl overflow-hidden flex flex-col shadow-2xl min-h-[520px] transition-all duration-500 group">
                        <div className="px-5 py-3 bg-white/[0.02] border-b border-white/5 flex items-center justify-between backdrop-blur-md">
                            <h3 className="text-[10px] text-white/40 font-bold uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div> Live Stream Canvas</h3>
                            <div className="flex items-center gap-3 font-mono text-[9px] text-white/30">
                                <span>Chars: {formData.content ? formData.content.replace(/<[^>]*>/g, '').length : 0}</span>
                                <div className="h-3 w-[1px] bg-white/10"></div>
                                <span className="uppercase tracking-widest">Markdown Support</span>
                            </div>
                        </div>
                        {/* ENHANCED RICH TEXT ENGINE WITH DARK THEME OVERRIDES */}
                        <div className="flex-1 flex flex-col quill-editor-modern [&_.ql-toolbar]:bg-white/[0.02] [&_.ql-toolbar]:!border-none [&_.ql-container]:!border-none [&_.ql-container]:flex-1 [&_.ql-editor]:text-white/80 [&_.ql-editor]:text-base [&_.ql-editor.ql-blank::before]:text-white/10 [&_.ql-stroke]:stroke-white/40 [&_.ql-fill]:fill-white/40 [&_.ql-picker]:text-white/40 [&_.ql-picker-options]:bg-zinc-900 [&_.ql-picker-options]:border-white/10">
                            <ReactQuill theme="snow" value={formData.content} onChange={(val) => setFormData({ ...formData, content: val })} modules={quillModules} placeholder="Write your structured story here..." className="h-full flex-1 flex flex-col min-h-[460px]" />
                        </div>
                    </div>

                    {/* VISUAL MEDIA STREAM PIPELINE */}
                    <div className="bg-white/[0.02] hover:bg-white/[0.03] border border-white/5 rounded-xl p-5 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                                <LuImageIcon size={12} className="text-rose-400" /> Payload Assets
                            </h3>
                            <span className="text-[9px] text-white/20 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{imageFiles.length} Files Registered</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-3">
                            {/* Upload Trigger Card */}
                            <label className="aspect-square bg-white/[0.01] hover:bg-white/[0.04] border border-dashed border-white/10 hover:border-rose-500/30 rounded-xl flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all group">
                                <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-rose-400 transition-all border border-white/5 group-hover:border-rose-500/20"><LuPlus size={16} /></div>
                                <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/50">Upload</span>
                            </label>

                            {/* Dynamic Render Grid */}
                            {imagePreviews.map((preview, idx) => (
                                <div key={idx} className="aspect-square rounded-xl border border-white/5 overflow-hidden relative group shadow-lg hover:border-rose-500/30 transition-all">
                                    <NextImage src={preview} fill unoptimized alt="Preview" className="object-cover transition-all duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-[8px] text-white/50 font-mono truncate leading-none">{imageFiles[idx]?.name}</p>
                                    </div>
                                    <button onClick={() => removeImage(idx)} className="absolute top-1.5 right-1.5 h-5 w-5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all shadow-md">
                                        <LuX size={10} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SEO & KEYWORDS ENGINE */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 transition-all">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                            <LuGlobe size={12} className="text-cyan-400" /> Algorithmic Discovery
                        </h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] text-white/30 font-mono uppercase tracking-wider">Meta Vector Title</label>
                                    <Input value={formData.seo.title} onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, title: e.target.value } })} placeholder="SEO specific label..." className="bg-white/[0.01] border-white/5 h-8 text-xs focus:border-cyan-500/30" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] text-white/30 font-mono uppercase tracking-wider">Meta Synopsis</label>
                                    <textarea rows={1} value={formData.seo.description} onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, description: e.target.value } })} placeholder="Crawler excerpt..." className="w-full bg-white/[0.01] border border-white/5 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/30 h-8 resize-none overflow-hidden" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-1.5 min-h-[32px] p-1.5 bg-white/[0.01] border border-white/5 rounded-lg">
                                    {formData.seo.keywords.map(kw => (
                                        <span key={kw} className="flex items-center gap-1 px-2 py-0.5 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-medium rounded flex-shrink-0">{kw}<button onClick={() => removeKeyword(kw)} className="hover:text-white transition-colors"><LuX size={8} /></button></span>
                                    ))}
                                    <input
                                        value={currentKeyword}
                                        onChange={(e) => setCurrentKeyword(e.target.value)}
                                        onKeyDown={addKeyword}
                                        placeholder={formData.seo.keywords.length === 0 ? "Push keyword + Enter..." : "Add next..."}
                                        className="flex-1 bg-transparent border-none outline-none text-xs text-white placeholder:text-white/20 px-1 min-w-[100px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 space-y-6">
                    {/* CONFIG CONTROLS */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2"><LuSettings2 size={16} className="text-purple-400" /> Deployment Spec</h3>
                        <div className="space-y-4 divide-y divide-white/5">

                            <div className="py-2 space-y-1.5">
                                <label className="text-[10px] text-white/40 uppercase font-mono flex items-center gap-1">Assigned Author</label>
                                <select value={formData.user} onChange={(e) => setFormData({ ...formData, user: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none">
                                    <option value="" className="bg-zinc-900">Select Valid Identity</option>
                                    {authors.map(u => <option key={u._id} value={u._id} className="bg-zinc-900">{u.name} ({u.role})</option>)}
                                </select>
                            </div>

                            <div className="pt-4 space-y-1.5">
                                <label className="text-[10px] text-white/40 uppercase font-mono">Schedule Release</label>
                                <input type="date" value={formData.publishAt} onChange={(e) => setFormData({ ...formData, publishAt: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white fill-current focus:outline-none" />
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <div className="space-y-0.5"><p className="text-sm text-white font-medium">Active Status</p><p className="text-[10px] text-white/30">Published state state</p></div>
                                <Switch checked={formData.published} onChange={(val) => setFormData({ ...formData, published: val })} />
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className="space-y-0.5"><p className="text-sm text-white font-medium">Prime Showcase</p><p className="text-[10px] text-white/30">Feature element lock</p></div>
                                <Switch checked={formData.isFeatured} onChange={(val) => setFormData({ ...formData, isFeatured: val })} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-4 bg-white/[0.02] border-b border-white/5 flex items-center gap-2"><LuLayers size={16} className="text-emerald-400" /><h3 className="text-xs font-bold uppercase tracking-widest text-white">Categories</h3></div>
                        <div className="p-3 max-h-[200px] overflow-y-auto space-y-1.5">
                            {fetchingData ? <div className="text-xs animate-pulse py-2 text-white/20">Loading...</div> : allCategories.map(cat => {
                                const sel = formData.categories.includes(cat._id);
                                return <button key={cat._id} onClick={() => toggleSelection('categories', cat._id)} className={`w-full flex items-center justify-between p-2 rounded-lg border text-xs transition-all ${sel ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-white/[0.01] border-white/5 text-white/60 hover:bg-white/5'}`}><span>{cat.name}</span>{sel && <LuCheck size={14} />}</button>
                            })}
                        </div>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-4 bg-white/[0.02] border-b border-white/5 flex items-center gap-2"><LuBoxes size={16} className="text-cyan-400" /><h3 className="text-xs font-bold uppercase tracking-widest text-white">Matching Tech</h3></div>
                        <div className="p-4">
                            {formData.categories.length === 0 ? <p className="text-[10px] italic text-white/30 text-center">Unlock by choosing Category</p> : <div className="flex flex-wrap gap-2">
                                {availableTechs.map(tech => {
                                    const sel = formData.technologies.includes(tech._id);
                                    return <button key={tech._id} onClick={() => toggleSelection('technologies', tech._id)} className={`flex items-center gap-2 px-2 py-1.5 rounded-md border text-[11px] transition-all ${sel ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-white/[0.01] border-white/5 text-white/50 hover:border-cyan-500/20'}`}>
                                        <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon?.toLowerCase()}/${tech.icon?.toLowerCase()}-original.svg`} fallbackSrc={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon?.toLowerCase()}/${tech.icon?.toLowerCase()}-plain.svg`} alt={tech.name} containerClassName="h-4 w-4 p-0 bg-transparent border-0 shadow-none" />
                                        <span>{tech.name}</span>
                                    </button>
                                })}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
