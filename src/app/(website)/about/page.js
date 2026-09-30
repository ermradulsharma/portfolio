"use client";

import Link from "next/link";
import {
    LuCode, LuCpu, LuShieldCheck,
    LuSparkles, LuRocket, LuTerminal, LuCircleCheck
} from "react-icons/lu";

export default function AboutPage() {
    const skills = [
        { name: "Full-Stack Web Architecture", level: "98%" },
        { name: "Next.js 16 & React 19 Ecosystem", level: "96%" },
        { name: "Node.js & Rest API Gateway", level: "94%" },
        { name: "MongoDB & Mongoose Data Modeling", level: "92%" },
        { name: "Light Soft UI Neumorphic Design", level: "98%" },
        { name: "System Performance & Security", level: "95%" },
    ];

    const timeline = [
        {
            num: "01",
            title: "Architecture & Discovery",
            desc: "Thorough domain mapping, schema design, and technical requirement gathering."
        },
        {
            num: "02",
            title: "Tactile Soft UI Design",
            desc: "Crafting light 3D raised surfaces, inset depth elements, and high contrast slate typography."
        },
        {
            num: "03",
            title: "API & Data Engine Integration",
            desc: "Implementing secure stateless auth, RESTful routes, and database population engines."
        },
        {
            num: "04",
            title: "Performance Optimization",
            desc: "Rigorous testing, bundle optimization, SEO setup, and live server deployment."
        },
    ];

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            {/* Background Ambient Radial Lights */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-purple-400/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-20">
                
                {/* HERO HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full neu-inset text-cyan-800 text-xs font-mono font-extrabold uppercase tracking-widest border border-white/70 shadow-inner">
                        <LuSparkles size={15} className="text-cyan-600" /> ABOUT PLATFORM ARCHITECTURE
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Redefining Modern <br />
                        <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                            Light Soft UI Engineering
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                        Dedicated to crafting tactile 3D neumorphic web platforms with clean code standards, instant feedback, and enterprise security.
                    </p>
                </div>

                {/* CORE VALUES / PHILOSOPHY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4">
                        <div className="w-13 h-13 rounded-2xl neu-inset flex items-center justify-center text-cyan-600 border border-white/70 shadow-inner">
                            <LuCpu size={26} />
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">Maximum Performance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Zero bloat design powered by React Server Components, lazy visual rendering, and optimized asset delivery.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4">
                        <div className="w-13 h-13 rounded-2xl neu-inset flex items-center justify-center text-purple-600 border border-white/70 shadow-inner">
                            <LuShieldCheck size={26} />
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">Enterprise Security</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Stateless JWT token signature verification, HTTP-only session cookies, and strict parameter validation middleware.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4">
                        <div className="w-13 h-13 rounded-2xl neu-inset flex items-center justify-center text-pink-600 border border-white/70 shadow-inner">
                            <LuCode size={26} />
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">Modular Architecture</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Decoupled service layers, standardized Mongoose schema models, reusable UI design tokens, and clear route handlers.
                        </p>
                    </div>
                </div>

                {/* SKILLS & TECHNICAL MATRIX */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center neu-flat border border-white/80 rounded-3xl p-8 sm:p-12">
                    <div className="space-y-6">
                        <span className="text-xs font-mono text-purple-700 font-extrabold uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/70 shadow-inner">
                            TECHNICAL SPECTRUM
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Engineered for Scale & Absolute Dependability
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Every database query, proxy route, and UI component is built to deliver fluid interactions, zero hydration mismatch, and reliable uptime.
                        </p>

                        <div className="pt-4 space-y-4">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between text-xs font-extrabold">
                                        <span className="text-slate-800">{skill.name}</span>
                                        <span className="text-cyan-700 font-mono">{skill.level}</span>
                                    </div>
                                    <div className="w-full h-3.5 neu-inset rounded-full overflow-hidden p-0.5 border border-white/70 shadow-inner">
                                        <div
                                            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                                            style={{ width: skill.level }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 p-8 rounded-3xl neu-raised border border-white/80">
                        <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                            <LuTerminal className="text-cyan-600" /> System Architecture Matrix
                        </h3>
                        <div className="space-y-3.5 text-xs font-mono text-slate-700 font-medium">
                            <div className="p-4 rounded-2xl neu-inset border border-white/70 shadow-inner flex items-center gap-2">
                                <span className="text-cyan-700 font-bold">[Framework]</span> Next.js 16 (App Router & Custom Proxy)
                            </div>
                            <div className="p-4 rounded-2xl neu-inset border border-white/70 shadow-inner flex items-center gap-2">
                                <span className="text-purple-700 font-bold">[Runtime]</span> Node.js High-Speed Asynchronous Loop
                            </div>
                            <div className="p-4 rounded-2xl neu-inset border border-white/70 shadow-inner flex items-center gap-2">
                                <span className="text-pink-700 font-bold">[Database]</span> MongoDB Cloud Cluster with Mongoose ODM
                            </div>
                            <div className="p-4 rounded-2xl neu-inset border border-white/70 shadow-inner flex items-center gap-2">
                                <span className="text-emerald-700 font-bold">[Styling]</span> Tailwind CSS v4 Soft Neumorphic Design
                            </div>
                        </div>
                    </div>
                </div>

                {/* WORK PROCESS TIMELINE */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <span className="text-xs font-mono text-cyan-800 font-extrabold uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/70 shadow-inner">
                            WORKFLOW METHODOLOGY
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How We Build Systems</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {timeline.map((step, idx) => (
                            <div key={idx} className="p-7 rounded-3xl neu-raised neu-raised-hover border border-white/80 relative group">
                                <span className="text-4xl font-extrabold font-mono text-slate-400/50 group-hover:text-cyan-600/60 transition-colors block mb-4">
                                    {step.num}
                                </span>
                                <h4 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-slate-600 text-xs leading-relaxed font-normal">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA BUTTON */}
                <div className="text-center pt-6">
                    <Link href="/login">
                        <button className="px-8 py-4 neu-button neu-glow-cyan text-slate-900 rounded-full font-extrabold text-xs uppercase tracking-wider border border-white/80 inline-flex items-center gap-3 hover:text-cyan-600 transition-colors">
                            <LuRocket size={16} className="text-cyan-600" /> Access Admin Console
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

