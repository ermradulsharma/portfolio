"use client";
import React, { useState, useEffect } from "react";
import { LuRocket, LuSave, LuArrowLeft, LuImage as LuImageIcon, LuSettings2, LuGlobe, LuLink, LuGithub, LuCalendar, LuCheck, LuLayers, LuBoxes, LuPlus, LuX } from "react-icons/lu";
import { Button, Input, Switch, Image, Select } from "@/components/backend/ui";
import { ImageGallery, SeoEngine, RichTextEditor, BasicDetails, PageHeader, TechSelector } from "@/components/backend/dashboard";
import Link from "next/link";

export default function AddProjectPage() {
    const [loading, setLoading] = useState(false);
    const [fetchingData, setFetchingData] = useState(true);
    const [allCategories, setAllCategories] = useState([]);
    const [availableTechs, setAvailableTechs] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [formData, setFormData] = useState({
        user: "",
        category: "",
        technologies: [],
        title: "",
        slug: "",
        description: "",
        link: {
            live: "",
            github: ""
        },
        startDate: new Date().toISOString().substring(0, 10),
        endDate: new Date().toISOString().substring(0, 10),
        caseStudy: "",
        published: true,
        isFeatured: false,
        publishAt: new Date().toISOString().substring(0, 10),
        seo: {
            title: "",
            description: "",
            keywords: []
        }
    });

    const [message, setMessage] = useState({ type: "", text: "" });

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
            } catch (err) {
                console.error("Initialization database fetch error", err);
            } finally {
                setFetchingData(false);
            }
        };
        loadBaseData();
    }, []);

    const handleTitleChange = (value) => {
        const slug = value.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
        setFormData(prev => ({ ...prev, title: value, slug }));
    };

    useEffect(() => {
        const loadRelationalTech = async () => {
            if (!formData.category) {
                setAvailableTechs([]);
                return;
            }
            try {
                const techRes = await fetch(`/api/admin/technologies`, { cache: 'no-store' });
                const techData = await techRes.json();
                if (techData.success) {
                    const filtered = techData.data.filter(tech => tech.category === formData.category);
                    setAvailableTechs(filtered);
                }
            } catch (err) {
                console.error("Failed relation linkage", err);
            }
        };
        loadRelationalTech();
    }, [formData.category]);

    const handleImageUpload = (files) => {
        if (!files.length) return;

        const newPreviews = files.map(file => URL.createObjectURL(file));
        setImageFiles(prev => [...prev, ...files]);
        setImagePreviews(prev => [...prev, ...newPreviews]);
    };

    const removeImage = (index) => {
        URL.revokeObjectURL(imagePreviews[index]);
        setImageFiles(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const toggleTechSelection = (techId) => {
        setFormData(prev => {
            const exists = prev.technologies.includes(techId);
            return {
                ...prev,
                technologies: exists
                    ? prev.technologies.filter(id => id !== techId)
                    : [...prev.technologies, techId]
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });
        if (!formData.user || !formData.category || !formData.title || !formData.description) {
            setMessage({ type: "error", text: "Please assign User, Category, Title and Description." });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/admin/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    image: []
                })
            });

            const result = await response.json();

            if (result.success) {
                setMessage({ type: "success", text: "Database push successful! Project stored." });
                // Clear critical inputs & images
                setImageFiles([]);
                setImagePreviews([]);
                setFormData(prev => ({
                    ...prev,
                    title: "",
                    slug: "",
                    description: "",
                    caseStudy: "",
                    technologies: [],
                    link: { live: "", github: "" },
                    seo: { title: "", description: "", keywords: [] }
                }));
            } else {
                setMessage({ type: "error", text: result.message || "Failed push." });
            }
        } catch (error) {
            console.error(error);
            setMessage({ type: "error", text: "System offline error." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen animate-in fade-in duration-500 p-1">
            <PageHeader title="Add Project" icon={<LuRocket />} breadcrumbs={[{ label: "Project Registry", href: "/admin/project" }]} activeBreadcrumb="Create New" discardHref="/admin/project" onSave={handleSubmit} loading={loading} saveText="Save Project" loadingText="Storing..." />
            {message.text && (
                <div className={`mb-6 p-4 rounded-xl border font-mono text-xs tracking-tight ${message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>{message.type === 'success' ? '[SUCCESS]' : '[ALERT]'} {message.text}</div>
            )}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                <div className="xl:col-span-8 space-y-6">
                    <BasicDetails title={formData.title} description={formData.description} onTitleChange={handleTitleChange} onDescriptionChange={(val) => setFormData(prev => ({ ...prev, description: val }))} showSlug={false} />
                    <RichTextEditor value={formData.caseStudy} onChange={(val) => setFormData({ ...formData, caseStudy: val })} title="Case Study" placeholder="Enter full case study content..." />
                    <ImageGallery files={imageFiles} previews={imagePreviews} onUpload={handleImageUpload} onRemove={removeImage} />
                    <SeoEngine data={formData.seo} onChange={(seoData) => setFormData(prev => ({ ...prev, seo: seoData }))} />
                </div>
                <div className="xl:col-span-4 space-y-6">
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></div> PROJECT ARCHITECT</h3>
                        <div className="space-y-4 divide-y divide-white/5">

                            {/* USER ASSIGNMENT */}
                            <div className="py-2 space-y-1.5">
                                <label className="text-[10px] text-white/40 uppercase font-mono flex items-center gap-1">Author</label>
                                <Select value={formData.user} onChange={(e) => setFormData({ ...formData, user: e.target.value })} className="w-full bg-white/5 border-white/10 h-8 text-xs text-white py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30">
                                    <option value="" className="bg-zinc-900 text-white/50">Select Author...</option>
                                    {authors.map(u => <option key={u._id} value={u._id} className="bg-zinc-900">{u.name}</option>)}
                                </Select>
                            </div>

                            {/* CATEGORY LINK */}
                            <div className="pt-4 space-y-1.5">
                                <label className="text-[10px] text-white/40 uppercase font-mono flex items-center gap-1">Category</label>
                                <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value, technologies: [] })} className="w-full bg-white/5 border-white/10 h-8 text-xs text-white py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30">
                                    <option value="" className="bg-zinc-900 text-white/50">Select Category...</option>
                                    {allCategories.map(c => <option key={c._id} value={c._id} className="bg-zinc-900">{c.name}</option>)}
                                </Select>
                            </div>

                            {/* PROJECT LINKS */}
                            <div className="pt-4 space-y-3">
                                <label className="text-[10px] text-white/40 uppercase font-mono flex items-center gap-1"><LuLink size={10} /> Links</label>
                                <div className="space-y-2">
                                    <Input value={formData.link.live} onChange={(e) => setFormData({ ...formData, link: { ...formData.link, live: e.target.value } })} placeholder="Live URL" className="w-full bg-white/5 border border-white/10 h-8 text-xs text-white py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30" />
                                    <Input value={formData.link.github} onChange={(e) => setFormData({ ...formData, link: { ...formData.link, github: e.target.value } })} placeholder="GitHub URL" className="w-full bg-white/5 border border-white/10 h-8 text-xs text-white py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30" />
                                </div>
                            </div>

                            {/* PROJECT DURATION */}
                            <div className="pt-4 space-y-3">
                                <label className="text-[10px] text-white/40 uppercase font-mono flex items-center gap-1"><LuCalendar size={10} /> Duration</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="space-y-1">
                                        <span className="text-[8px] text-white/20 uppercase block">Start</span>
                                        <Input type="date" value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} className="w-full bg-white/5 border-white/10 rounded-lg h-8 text-[10px] text-white px-2 py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30 [color-scheme:dark]" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[8px] text-white/20 uppercase block">End</span>
                                        <Input type="date" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} className="w-full bg-white/5 border-white/10 rounded-lg h-8 text-[10px] text-white px-2 py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30 [color-scheme:dark]" />
                                    </div>
                                </div>
                            </div>

                            {/* RELEASE SCHEDULING */}
                            <div className="pt-4 space-y-1.5">
                                <label className="text-[10px] text-white/40 uppercase font-mono">Publish Date</label>
                                <Input type="date" value={formData.publishAt} onChange={(e) => setFormData({ ...formData, publishAt: e.target.value })} className="w-full bg-white/5 border-white/10 h-8 text-xs text-white px-2 py-0 block focus-visible:ring-pink-500/20 focus-visible:border-pink-500/30 [color-scheme:dark]" />
                            </div>

                            {/* VISIBILITY SPEC */}
                            <div className="flex items-center justify-between pt-4">
                                <div className="space-y-0.5">
                                    <p className="text-xs text-white font-medium">Published</p>
                                    <p className="text-[9px] text-white/20">Make visible to users</p>
                                </div>
                                <Switch checked={formData.published} onChange={(val) => setFormData({ ...formData, published: val })} />
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className="space-y-0.5">
                                    <p className="text-xs text-white font-medium">Featured</p>
                                    <p className="text-[9px] text-white/20">Showcase on home page</p>
                                </div>
                                <Switch checked={formData.isFeatured} onChange={(val) => setFormData({ ...formData, isFeatured: val })} />
                            </div>
                        </div>
                    </div>
                    <TechSelector selectedCategory={formData.category} availableTechs={availableTechs} selectedTechs={formData.technologies} onToggle={toggleTechSelection} />
                </div>
            </div>
        </div>
    );
}
