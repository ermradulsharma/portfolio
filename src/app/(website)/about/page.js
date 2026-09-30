"use client";

import Link from "next/link";
import {
    LuCode, LuCpu, LuShieldCheck,
    LuSparkles, LuRocket, LuTerminal
} from "react-icons/lu";

export default function AboutPage() {
    const skills = [
        { name: "Full-Stack Web Architecture", level: "98%" },
        { name: "Next.js & React Ecosystem", level: "95%" },
        { name: "Node.js & API Microservices", level: "92%" },
        { name: "MongoDB & Database Design", level: "90%" },
        { name: "Light Neumorphic UI Design", level: "96%" },
        { name: "System Optimization & Security", level: "94%" },
    ];

    const timeline = [
        {
            num: "01",
            title: "Architecture & Discovery",
            desc: "Thorough domain mapping, schema design, and technical requirement gathering."
        },
        {
            num: "02",
            title: "Light Soft UI System",
            desc: "Crafting light 3D raised surfaces, inset depth elements, and high contrast slate typography."
        },
        {
            num: "03",
            title: "API & Backend Integration",
            desc: "Implementing secure stateless auth, RESTful routes, and database population engines."
        },
        {
            num: "04",
            title: "Performance & Deployment",
            desc: "Rigorous testing, bundle optimization, SEO optimization, and live server deployment."
        },
    ];

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            {/* Background Radial Lights */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-20">
                
                {/* HERO HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-cyan-700 text-xs font-mono font-bold uppercase tracking-widest border border-white/60">
                        <LuSparkles size={14} /> ABOUT PLATFORM ARCHITECTURE
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                        Redefining Modern <br />
                        <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Light Soft UI Software
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Dedicated to creating tactile 3D neumorphic platforms with clean code standards and scalable backend architecture.
                    </p>
                </div>

                {/* CORE VALUES / PHILOSOPHY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4">
                        <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-cyan-600 border border-white/60">
                            <LuCpu size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Maximum Performance</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Zero bloat design with server-rendered components, efficient lazy loading, and minimal bundle sizes.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4">
                        <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-purple-600 border border-white/60">
                            <LuShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Bank-Grade Security</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Stateless JWT token verification, strict parameter validation, and secure password encryption algorithms.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4">
                        <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-pink-600 border border-white/60">
                            <LuCode size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Modular Architecture</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Decoupled service providers, standardized database seeders, and reusable UI design tokens.
                        </p>
                    </div>
                </div>

                {/* SKILLS & PROFICIENCY */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center neu-flat border border-white/80 rounded-3xl p-8 sm:p-12">
                    <div className="space-y-6">
                        <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/60">
                            TECHNICAL SPECTRUM
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Engineered for Scale & Dependability
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Every component and database query is crafted to deliver instant feedback, fluid animations, and absolute reliability under load.
                        </p>

                        <div className="pt-4 space-y-4">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    <div className="flex justify-between text-xs font-bold">
                                        <span className="text-slate-800">{skill.name}</span>
                                        <span className="text-cyan-600 font-mono">{skill.level}</span>
                                    </div>
                                    <div className="w-full h-3 neu-inset rounded-full overflow-hidden p-0.5 border border-white/60">
                                        <div
                                            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                                            style={{ width: skill.level }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 p-8 rounded-3xl neu-raised border border-white/80">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <LuTerminal className="text-cyan-600" /> System Architecture Matrix
                        </h3>
                        <div className="space-y-4 text-xs font-mono text-slate-700">
                            <div className="p-3.5 rounded-2xl neu-inset border border-white/60">
                                <span className="text-cyan-600 font-bold">[Framework]</span> Next.js 16 (App Router & Proxy)
                            </div>
                            <div className="p-3.5 rounded-2xl neu-inset border border-white/60">
                                <span className="text-purple-600 font-bold">[Language]</span> Modern ESNext / Node.js Runtime
                            </div>
                            <div className="p-3.5 rounded-2xl neu-inset border border-white/60">
                                <span className="text-pink-600 font-bold">[Database]</span> MongoDB Enterprise with Mongoose ODM
                            </div>
                            <div className="p-3.5 rounded-2xl neu-inset border border-white/60">
                                <span className="text-emerald-600 font-bold">[Styling]</span> Tailwind v4 Light Neumorphism
                            </div>
                        </div>
                    </div>
                </div>

                {/* WORK PROCESS TIMELINE */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-widest px-4 py-1.5 neu-inset rounded-full border border-white/60">
                            WORKFLOW METHODOLOGY
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900">How We Build Systems</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {timeline.map((step, idx) => (
                            <div key={idx} className="p-6 rounded-3xl neu-raised neu-raised-hover border border-white/80 relative group">
                                <span className="text-4xl font-extrabold font-mono text-slate-400/40 group-hover:text-cyan-600/50 transition-colors block mb-4">
                                    {step.num}
                                </span>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8">
                    <Link href="/login">
                        <button className="px-8 py-4 neu-button neu-glow-cyan text-slate-900 rounded-full font-bold text-xs uppercase tracking-wider border border-white/80 inline-flex items-center gap-2.5">
                            <LuRocket size={16} className="text-cyan-600" /> Access Admin Console
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
