"use client";

import Link from "next/link";
import {
    LuCpu, LuShieldCheck, LuZap, LuLayers, LuDatabase,
    LuCode, LuActivity, LuGlobe, LuSparkles, LuCircleCheck, LuRocket
} from "react-icons/lu";

export default function FeaturesPage() {
    const featuresList = [
        {
            icon: LuZap,
            color: "text-amber-600 neu-inset border border-white/70 shadow-inner",
            title: "Next.js 16 App Router & Server Components",
            desc: "Built on Next.js 16 using React Server Components for near-instant initial page loads, optimal SEO, and zero client-side bundle overhead."
        },
        {
            icon: LuShieldCheck,
            color: "text-cyan-600 neu-inset border border-white/70 shadow-inner",
            title: "JWT Token Security & Cookie Vault",
            desc: "Cryptographic stateless session handling using HTTP-only cookies and JWT signature verification across proxy middleware pipelines."
        },
        {
            icon: LuDatabase,
            color: "text-purple-600 neu-inset border border-white/70 shadow-inner",
            title: "Mongoose ODM & Automated Seeders",
            desc: "Structured schema modeling with index optimizations, text search vectors, relational population hooks, and instant DB seed scripts."
        },
        {
            icon: LuLayers,
            color: "text-pink-600 neu-inset border border-white/70 shadow-inner",
            title: "Light Neumorphic Soft UI Material",
            desc: "Tailwind CSS v4 components with extruded 3D surfaces, sunken inset depth, convex tactile buttons, and high contrast slate typography."
        },
        {
            icon: LuActivity,
            color: "text-emerald-600 neu-inset border border-white/70 shadow-inner",
            title: "Interactive Telemetry & Analytics",
            desc: "Dynamic telemetry visualization components powered by Recharts with client-side dynamic loading and zero SSR hydration mismatch."
        },
        {
            icon: LuGlobe,
            color: "text-indigo-600 neu-inset border border-white/70 shadow-inner",
            title: "Unified RESTful API Gateway",
            desc: "Unified dynamic API dispatcher handling parameter extraction, route grouping, auth guards, and structured JSON responses."
        }
    ];

    const checklist = [
        "Server-Side & React Concurrent UI",
        "Dynamic OpenGraph & Twitter Metadata",
        "Sanitized Dynamic Slug Pipelines",
        "Neumorphic Soft Material Token System",
        "Mongoose Schema Indexing & Validations",
        "Automated Seeders & Cleanup Scripts",
        "Protected Admin Console & Middleware Guards",
        "High Contrast Accessible Typography",
        "Responsive Mobile Drawer & Smooth Touch States"
    ];

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            {/* Ambient Background Radial Lights */}
            <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-16">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full neu-inset text-purple-800 text-xs font-mono font-extrabold uppercase tracking-widest border border-white/70 shadow-inner">
                        <LuSparkles size={15} className="text-purple-600" /> PLATFORM CAPABILITIES
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Built for Tactile 3D <br />
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-transparent bg-clip-text">
                            Security, Speed & Precision
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                        Explore the full spectrum of modern framework modules and soft UI design tokens powering this enterprise full-stack platform.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4 group flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center ${feat.color}`}>
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                                        {feat.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Technical Specification Summary */}
                <div className="p-8 sm:p-12 rounded-3xl neu-flat border border-white/80 space-y-8">
                    <div className="text-center max-w-xl mx-auto space-y-2">
                        <span className="text-xs font-mono text-cyan-800 font-extrabold uppercase tracking-widest px-4 py-1 rounded-full neu-inset border border-white/70">
                            SPECIFICATIONS
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900">Architectural Checklist</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono text-slate-700">
                        {checklist.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl neu-inset border border-white/70 font-extrabold shadow-inner">
                                <LuCircleCheck className="text-emerald-600 shrink-0" size={18} />
                                <span className="text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/login">
                        <button className="px-8 py-4 neu-button neu-glow-purple text-slate-900 rounded-full font-extrabold text-xs uppercase tracking-wider border border-white/80 inline-flex items-center gap-3 hover:text-purple-600 transition-colors">
                            <LuRocket size={16} className="text-purple-600" /> Test Features in Admin Console
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

