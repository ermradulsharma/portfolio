"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    LuRocket, LuSparkles, LuArrowRight, LuShieldCheck,
    LuCpu, LuZap, LuLayers, LuDatabase, LuCode, LuExternalLink,
    LuGithub, LuActivity, LuUsers, LuDollarSign, LuChevronRight, LuCircleCheck, LuTrendingUp
} from "react-icons/lu";

export default function LandingPage() {
    const [projects, setProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [activeTechTab, setActiveTechTab] = useState("all");

    // Default high-impact fallback showcase projects if none fetched yet
    const fallbackProjects = [
        {
            _id: "demo-1",
            title: "Soft UI Analytics Engine",
            description: "High throughput real-time data telemetry platform built with Next.js Server Components, Recharts, and Mongoose aggregation.",
            category: { name: "Full-Stack SaaS" },
            isFeatured: true,
            link: { live: "#", github: "#" }
        },
        {
            _id: "demo-2",
            title: "AI Content Intelligence Hub",
            description: "Automated content moderation & publishing workflow engine using React 19, custom proxy routing, and stateless JWT authentication.",
            category: { name: "AI & Automation" },
            isFeatured: true,
            link: { live: "#", github: "#" }
        },
        {
            _id: "demo-3",
            title: "Enterprise Soft UI Dashboard",
            description: "Tactile 3D soft material admin suite with user access control, dynamic seed scripts, and real-time database health monitors.",
            category: { name: "Admin Console" },
            isFeatured: true,
            link: { live: "#", github: "#" }
        }
    ];

    useEffect(() => {
        const fetchPublicProjects = async () => {
            try {
                const res = await fetch("/api/admin/projects", { cache: "no-store" });
                const result = await res.json();
                if (result.success && Array.isArray(result.data) && result.data.length > 0) {
                    setProjects(result.data.slice(0, 6));
                } else {
                    setProjects(fallbackProjects);
                }
            } catch (err) {
                console.error("Failed to load showcase projects:", err);
                setProjects(fallbackProjects);
            } finally {
                setLoadingProjects(false);
            }
        };
        fetchPublicProjects();
    }, []);

    const techStack = [
        { name: "Next.js 16", category: "frontend", desc: "Server Components & App Router Pipeline" },
        { name: "React 19", category: "frontend", desc: "Concurrent UI & High-Speed State Engine" },
        { name: "Tailwind CSS v4", category: "frontend", desc: "Light Neumorphic Soft Surface Utilities" },
        { name: "Node.js", category: "backend", desc: "High-Throughput JavaScript Event Loop" },
        { name: "MongoDB", category: "database", desc: "NoSQL Schema Aggregation & Text Indexing" },
        { name: "Mongoose ODM", category: "database", desc: "Structured Model Schemas & Validation Hooks" },
        { name: "JWT Token Security", category: "security", desc: "Stateless Signature Security Token Vault" },
        { name: "Recharts Engine", category: "frontend", desc: "SVG Interactive Data Visualization" },
    ];

    const filteredTechs = activeTechTab === "all"
        ? techStack
        : techStack.filter(t => t.category === activeTechTab);

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden">
            
            {/* HERO SECTION */}
            <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
                {/* Soft Ambient Radial Lighting */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-400/20 rounded-full blur-[160px] pointer-events-none -z-0" />
                <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-400/20 rounded-full blur-[140px] pointer-events-none -z-0" />
                <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-emerald-400/15 rounded-full blur-[140px] pointer-events-none -z-0" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    
                    {/* Neumorphic Sunken Status Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full neu-inset border border-white/70 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700 shadow-inner">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping shadow-[0_0_10px_#06b6d4]" />
                        <span className="text-xs font-mono font-extrabold text-cyan-800 tracking-wider uppercase">
                            NEXT.JS 16 • REACT 19 • LIGHT SOFT UI MATRIX
                        </span>
                        <LuSparkles size={15} className="text-cyan-600" />
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8 max-w-4xl mx-auto">
                        Architecting Soft 3D <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_10px_20px_rgba(6,182,212,0.15)]">
                            Neumorphic Dashboards
                        </span> & Systems
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                        Extruded tactile surfaces, sunken data telemetry, and seamless full-stack web applications engineered with mathematical precision.
                    </p>

                    {/* Hero CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                        <Link href="/login" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 neu-button neu-glow-cyan text-slate-900 rounded-full font-extrabold text-sm border border-white/80 flex items-center justify-center gap-3 group tracking-wider uppercase">
                                <LuRocket size={18} className="text-cyan-600 group-hover:rotate-12 transition-transform" />
                                Launch Admin Console
                                <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <a href="#projects" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 neu-button text-slate-800 rounded-full font-extrabold text-sm border border-white/80 flex items-center justify-center gap-2 hover:text-cyan-600 transition-colors uppercase tracking-wider">
                                Explore Showcase
                            </button>
                        </a>
                    </div>

                    {/* LIVE NEUMORPHIC MOCK TELEMETRY DECK */}
                    <div className="relative max-w-5xl mx-auto rounded-3xl p-4 neu-raised border border-white/80 shadow-2xl">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full neu-inset text-cyan-800 text-[10px] font-mono uppercase tracking-widest font-extrabold flex items-center gap-2 border border-white/70 shadow-inner">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#06b6d4]" />
                            Real-Time System Tactile Telemetry
                        </div>
                        
                        <div className="rounded-2xl neu-inset p-6 sm:p-8 overflow-hidden">
                            {/* Window Header */}
                            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-300/60 mb-6 gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" />
                                    <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                                    <span className="text-xs text-slate-600 font-mono ml-3 font-semibold">https://dashboard.mradul.dev</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3.5 py-1 rounded-full text-[10px] font-mono neu-button text-emerald-700 font-extrabold border border-white/80">
                                        SYSTEM STATUS: ONLINE
                                    </span>
                                </div>
                            </div>

                            {/* Simulated Telemetry Vitals Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-6">
                                <div className="p-5 rounded-2xl neu-raised border border-white/80 space-y-2">
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-bold">
                                        <span>Total Platform Revenue</span>
                                        <div className="p-2 rounded-xl neu-inset text-cyan-600">
                                            <LuDollarSign size={16} />
                                        </div>
                                    </div>
                                    <p className="text-3xl font-extrabold text-slate-900">$48,290</p>
                                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-mono font-bold">
                                        <LuTrendingUp size={14} /> +14.2% vs last cycle
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl neu-raised border border-white/80 space-y-2">
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-bold">
                                        <span>Active User Sessions</span>
                                        <div className="p-2 rounded-xl neu-inset text-purple-600">
                                            <LuUsers size={16} />
                                        </div>
                                    </div>
                                    <p className="text-3xl font-extrabold text-slate-900">12,450</p>
                                    <div className="flex items-center gap-1.5 text-xs text-purple-600 font-mono font-bold">
                                        <LuActivity size={14} /> +8.7% real-time growth
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl neu-raised border border-white/80 space-y-2">
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-bold">
                                        <span>System Health & SLA</span>
                                        <div className="p-2 rounded-xl neu-inset text-emerald-600">
                                            <LuCircleCheck size={16} />
                                        </div>
                                    </div>
                                    <p className="text-3xl font-extrabold text-emerald-600">99.99%</p>
                                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 14ms Latency
                                    </div>
                                </div>
                            </div>

                            {/* Simulated SVG Graph & Logs */}
                            <div className="p-4 rounded-2xl neu-flat border border-white/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
                                <div className="flex items-center gap-3">
                                    <span className="px-2.5 py-1 rounded-lg neu-inset text-cyan-700 font-bold">GATEWAY</span>
                                    <span>Proxy routes operating cleanly at peak efficiency</span>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    MongoDB Replica Sync Active
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* LIGHT METRICS BANNER */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-4">
                <div className="neu-flat p-8 sm:p-10 rounded-3xl border border-white/80">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900">100%</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold">Type Safety & Integrity</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-cyan-600">&lt; 20ms</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold">Global Route Latency</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-purple-600">24/7</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold">Continuous Monitoring</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-emerald-600">v16.3</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold">Next.js Framework</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS SHOWCASE */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono text-pink-700 uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/60 font-extrabold">
                        PORTFOLIO SHOWCASE
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4 mb-4">
                        Featured Software Projects
                    </h2>
                    <p className="text-slate-600 text-base leading-relaxed">
                        Hand-crafted full-stack web applications built with modern tools and light 3D tactile aesthetics.
                    </p>
                </div>

                {loadingProjects ? (
                    <div className="h-64 flex items-center justify-center text-slate-500 font-mono text-sm">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-600 mr-3" />
                        Loading Project Registry...
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((proj) => (
                            <div
                                key={proj._id}
                                className="group relative rounded-3xl neu-raised neu-raised-hover p-8 flex flex-col justify-between border border-white/80"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="px-3.5 py-1 rounded-full text-[10px] font-mono uppercase neu-inset text-cyan-800 font-extrabold border border-white/70">
                                            {proj.category?.name || "Software Architecture"}
                                        </span>
                                        {proj.isFeatured && (
                                            <span className="flex items-center gap-1 text-[10px] font-mono text-pink-600 neu-inset px-3 py-1 rounded-full border border-pink-500/30 font-extrabold">
                                                <LuSparkles size={12} /> Featured
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                                        {proj.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed font-normal">
                                        {proj.description}
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-slate-300/60 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {proj.link?.live && (
                                            <a
                                                href={proj.link.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2.5 rounded-xl neu-button text-slate-700 hover:text-cyan-600 border border-white/80 transition-all"
                                                title="Live View"
                                            >
                                                <LuExternalLink size={16} />
                                            </a>
                                        )}
                                        {proj.link?.github && (
                                            <a
                                                href={proj.link.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2.5 rounded-xl neu-button text-slate-700 hover:text-purple-600 border border-white/80 transition-all"
                                                title="Repository"
                                            >
                                                <LuGithub size={16} />
                                            </a>
                                        )}
                                    </div>

                                    <Link href="/login" className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                                        Explore System <LuChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* LIGHT TECH MATRIX SECTION */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="neu-flat p-8 sm:p-12 rounded-3xl border border-white/80">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-mono text-purple-700 uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/60 font-extrabold">
                            ECOSYSTEM STACK
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4 mb-4">
                            Powered by Cutting-Edge Tools
                        </h2>
                        <p className="text-slate-600 text-base">
                            Engineered on production-ready frameworks for speed, security, and developer ergonomics.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 neu-inset p-2 rounded-full border border-white/60 max-w-lg mx-auto">
                        {["all", "frontend", "backend", "database", "security"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTechTab(tab)}
                                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                                    activeTechTab === tab
                                        ? "neu-button text-cyan-700 font-extrabold border border-white/80 shadow-md"
                                        : "text-slate-600 hover:text-slate-900"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tech Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredTechs.map((tech, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl neu-raised neu-raised-hover border border-white/80 space-y-3 group"
                            >
                                <div className="h-12 w-12 rounded-2xl neu-inset flex items-center justify-center text-purple-600 group-hover:text-cyan-600 transition-colors border border-white/60">
                                    <LuCode size={22} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900">{tech.name}</h4>
                                <p className="text-slate-600 text-xs leading-relaxed font-normal">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION SECTION */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 text-center">
                <div className="relative rounded-3xl p-10 sm:p-16 neu-raised border border-white/80 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] pointer-events-none" />
                    
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 relative z-10">
                        Ready to Experience Neumorphic Soft UI?
                    </h2>
                    <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8 relative z-10 leading-relaxed font-normal">
                        Access your administrative dashboard console securely to manage projects, platform blogs, credentials, and real-time vitals.
                    </p>
                    
                    <Link href="/login" className="inline-block relative z-10">
                        <button className="px-8 py-4 neu-button neu-glow-cyan text-slate-900 rounded-full font-extrabold text-sm uppercase tracking-wider border border-white/80 flex items-center gap-3 mx-auto">
                            <LuShieldCheck size={20} className="text-cyan-600" />
                            Launch Console Now
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
}

