"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    LuRocket, LuSparkles, LuArrowRight, LuShieldCheck,
    LuCpu, LuZap, LuLayers, LuDatabase, LuCode, LuExternalLink,
    LuGithub, LuActivity, LuUsers, LuDollarSign, LuChevronRight
} from "react-icons/lu";

export default function LandingPage() {
    const [projects, setProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [activeTechTab, setActiveTechTab] = useState("all");

    useEffect(() => {
        const fetchPublicProjects = async () => {
            try {
                const res = await fetch("/api/admin/projects", { cache: "no-store" });
                const result = await res.json();
                if (result.success && Array.isArray(result.data)) {
                    setProjects(result.data.slice(0, 6));
                }
            } catch (err) {
                console.error("Failed to load showcase projects:", err);
            } finally {
                setLoadingProjects(false);
            }
        };
        fetchPublicProjects();
    }, []);

    const techStack = [
        { name: "Next.js 16", category: "frontend", desc: "Server Components & App Router" },
        { name: "React 19", category: "frontend", desc: "Concurrent UI Engine" },
        { name: "Tailwind CSS 4", category: "frontend", desc: "Neumorphic Utility System" },
        { name: "Node.js", category: "backend", desc: "High throughput JS Runtime" },
        { name: "MongoDB", category: "database", desc: "NoSQL Document Aggregation" },
        { name: "Mongoose", category: "database", desc: "Schema Modeling & Validation" },
        { name: "JWT Auth", category: "backend", desc: "Stateless Security Token Vault" },
        { name: "Recharts", category: "frontend", desc: "SVG Interactive Data Visualizer" },
    ];

    const filteredTechs = activeTechTab === "all"
        ? techStack
        : techStack.filter(t => t.category === activeTechTab);

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden">
            
            {/* HERO SECTION */}
            <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
                {/* Soft Ambient Radial Lights */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[160px] pointer-events-none -z-0" />
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-[130px] pointer-events-none -z-0" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    
                    {/* Sunken Neumorphic Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-inset border border-white/60 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping shadow-[0_0_8px_#06b6d4]" />
                        <span className="text-xs font-mono font-bold text-cyan-700 tracking-wider uppercase">
                            NEXT.JS 16 • LIGHT NEUMORPHIC SOFT UI SUITE
                        </span>
                        <LuSparkles size={14} className="text-cyan-600" />
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8 max-w-4xl mx-auto">
                        Architecting Soft 3D <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_10px_20px_rgba(6,182,212,0.15)]">
                            Neumorphic Dashboards
                        </span> & Web Apps
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                        Extruded tactile surfaces, sunken data telemetry, and seamless full-stack architecture engineered with light precision.
                    </p>

                    {/* Light Neumorphic Hero Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                        <Link href="/login" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 neu-button neu-glow-cyan text-slate-900 rounded-full font-extrabold text-base border border-white/80 flex items-center justify-center gap-2.5 group">
                                <LuRocket size={18} className="text-cyan-600 group-hover:rotate-12 transition-transform" />
                                Launch Admin Console
                                <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <a href="#projects" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 neu-button text-slate-800 rounded-full font-bold text-base border border-white/80 flex items-center justify-center gap-2">
                                Explore Showcase
                            </button>
                        </a>
                    </div>

                    {/* LIGHT NEUMORPHIC MOCK DASHBOARD DISPLAY DECK */}
                    <div className="relative max-w-5xl mx-auto rounded-3xl p-4 neu-raised border border-white/80 shadow-2xl">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full neu-inset text-cyan-700 text-[10px] font-mono uppercase tracking-widest font-bold flex items-center gap-2 border border-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_6px_#06b6d4]" />
                            Live System Tactile Telemetry
                        </div>
                        
                        <div className="rounded-2xl neu-inset p-6 overflow-hidden">
                            {/* Window Top Bar */}
                            <div className="flex items-center justify-between pb-6 border-b border-slate-300/60 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_6px_#f43f5e]" />
                                    <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_#f59e0b]" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_#10b981]" />
                                    <span className="text-xs text-slate-500 font-mono ml-2">dashboard.mradul.dev</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full text-[10px] font-mono neu-button text-emerald-600 font-bold border border-white/80">
                                        STATUS: ONLINE
                                    </span>
                                </div>
                            </div>

                            {/* Simulated Vitals (Sunken Inset Cards) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                                <div className="p-5 rounded-2xl neu-raised border border-white/80">
                                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
                                        <span>Total Revenue</span>
                                        <div className="p-1.5 rounded-lg neu-inset text-cyan-600">
                                            <LuDollarSign size={14} />
                                        </div>
                                    </div>
                                    <p className="text-2xl font-extrabold text-slate-900">$42,394</p>
                                    <p className="text-[10px] text-emerald-600 mt-1 font-mono font-bold">+12.5% vs last week</p>
                                </div>

                                <div className="p-5 rounded-2xl neu-raised border border-white/80">
                                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
                                        <span>Active Sessions</span>
                                        <div className="p-1.5 rounded-lg neu-inset text-purple-600">
                                            <LuUsers size={14} />
                                        </div>
                                    </div>
                                    <p className="text-2xl font-extrabold text-slate-900">8,234</p>
                                    <p className="text-[10px] text-purple-600 mt-1 font-mono font-bold">+4.2% real-time growth</p>
                                </div>

                                <div className="p-5 rounded-2xl neu-raised border border-white/80">
                                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
                                        <span>System Health</span>
                                        <div className="p-1.5 rounded-lg neu-inset text-pink-600">
                                            <LuActivity size={14} />
                                        </div>
                                    </div>
                                    <p className="text-2xl font-extrabold text-emerald-600">99.98%</p>
                                    <p className="text-[10px] text-emerald-600 mt-1 font-mono font-bold">0ms packet loss</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* LIGHT NEUMORPHIC METRICS BANNER */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
                <div className="neu-flat p-8 sm:p-12 rounded-3xl border border-white/80">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">100%</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold">Type Safety & Standards</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">&lt; 50ms</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold">Response Latency</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">24/7</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold">Automated Monitoring</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Next.js 16</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold">App Architecture</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS SHOWCASE */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono text-pink-600 uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/60 font-bold">
                        PORTFOLIO SHOWCASE
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-4 mb-4">
                        Featured Systems & Engineering Projects
                    </h2>
                    <p className="text-slate-600 text-base">
                        Explore hand-crafted software projects built with high precision and light 3D tactile aesthetics.
                    </p>
                </div>

                {loadingProjects ? (
                    <div className="h-64 flex items-center justify-center text-slate-500 font-mono text-sm">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-600 mr-3" />
                        Loading Project Registry...
                    </div>
                ) : projects.length === 0 ? (
                    <div className="p-12 text-center neu-inset rounded-3xl text-slate-500 italic border border-white/60">
                        No projects loaded yet. Open the Admin Console to catalog your first project!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((proj) => (
                            <div
                                key={proj._id}
                                className="group relative rounded-3xl neu-raised neu-raised-hover p-7 flex flex-col justify-between border border-white/80"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase neu-inset text-cyan-700 font-bold border border-white/60">
                                            {proj.category?.name || "Software"}
                                        </span>
                                        {proj.isFeatured && (
                                            <span className="flex items-center gap-1 text-[10px] font-mono text-pink-600 neu-inset px-2.5 py-0.5 rounded-full border border-pink-500/20 font-bold">
                                                <LuSparkles size={10} /> Featured
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
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

                                    <Link href="/login" className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                                        Details <LuChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* LIGHT NEUMORPHIC TECH MATRIX SECTION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="neu-flat p-8 sm:p-12 rounded-3xl border border-white/80">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-mono text-purple-600 uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/60 font-bold">
                            ECOSYSTEM STACK
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-4 mb-4">
                            Powered by Cutting-Edge Tools
                        </h2>
                        <p className="text-slate-600 text-base">
                            Built upon industry standard frameworks ensuring ultra fast response times.
                        </p>
                    </div>

                    {/* Light Neumorphic Tech Tabs (Sunken Track) */}
                    <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 neu-inset p-2 rounded-full border border-white/60 max-w-md mx-auto">
                        {["all", "frontend", "backend", "database"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTechTab(tab)}
                                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                                    activeTechTab === tab
                                        ? "neu-button text-cyan-600 font-extrabold border border-white/80"
                                        : "text-slate-500 hover:text-slate-900"
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
                                <div className="h-11 w-11 rounded-2xl neu-inset flex items-center justify-center text-purple-600 group-hover:text-cyan-600 transition-colors">
                                    <LuCode size={20} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900">{tech.name}</h4>
                                <p className="text-slate-600 text-xs leading-relaxed">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION SECTION */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 text-center">
                <div className="relative rounded-3xl p-10 sm:p-16 neu-raised border border-white/80 overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 relative z-10">
                        Ready to Experience Light Neumorphism?
                    </h2>
                    <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8 relative z-10">
                        Access your administrative dashboard console securely to manage projects, blogs, credentials, and real-time vitals.
                    </p>
                    
                    <Link href="/login" className="inline-block relative z-10">
                        <button className="px-8 py-4 neu-button neu-glow-cyan text-slate-900 rounded-full font-extrabold text-base border border-white/80 flex items-center gap-2.5 mx-auto">
                            <LuShieldCheck size={20} className="text-cyan-600" />
                            Launch Console Now
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
