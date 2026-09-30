"use client";

import Link from "next/link";
import {
    LuCpu, LuShieldCheck, LuZap, LuLayers, LuDatabase,
    LuCode, LuActivity, LuGlobe, LuSparkles, LuCheck
} from "react-icons/lu";

export default function FeaturesPage() {
    const featuresList = [
        {
            icon: LuZap,
            color: "text-amber-600 neu-inset border border-white/60",
            title: "Next.js 16 App Router & Server Components",
            desc: "Built on the latest Next.js 16 release using React Server Components for near-instant initial page loads and optimized server-side rendering."
        },
        {
            icon: LuShieldCheck,
            color: "text-cyan-600 neu-inset border border-white/60",
            title: "JWT Token Security & Cookie Vault",
            desc: "Secure stateless session handling using HTTP-only cookies and cryptographic JWT signature verifications across custom proxy middleware."
        },
        {
            icon: LuDatabase,
            color: "text-purple-600 neu-inset border border-white/60",
            title: "Mongoose ODM & Automated Seeders",
            desc: "Robust schema modeling with index optimizations, text search vectors, relational population hooks, and automated seed scripts."
        },
        {
            icon: LuLayers,
            color: "text-pink-600 neu-inset border border-white/60",
            title: "Light Neumorphic Soft UI System",
            desc: "Custom styled Tailwind CSS v4 components with light extruded 3D surfaces, sunken inset depth, convex tactile buttons, and dynamic hover states."
        },
        {
            icon: LuActivity,
            color: "text-emerald-600 neu-inset border border-white/60",
            title: "Interactive Analytics & Charts",
            desc: "Dynamic visualization components powered by Recharts with client-side dynamic lazy loading and zero SSR hydration mismatch."
        },
        {
            icon: LuGlobe,
            color: "text-rose-600 neu-inset border border-white/60",
            title: "Catch-All RESTful API Gateway",
            desc: "Unified dynamic API dispatcher handling parameter extraction, route grouping, middleware pipelines, and error handling."
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            {/* Ambient Background Lights */}
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-16">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-purple-700 text-xs font-mono font-bold uppercase tracking-widest border border-white/60">
                        <LuSparkles size={14} /> PLATFORM CAPABILITIES
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                        Built for Tactile 3D <br />
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-transparent bg-clip-text">
                            Security & Speed
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Discover the underlying framework modules and light neumorphic design tokens powering this full-stack application.
                    </p>
                </div>

                {/* Features Grid (Light Neumorphic Raised Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl neu-raised neu-raised-hover border border-white/80 space-y-4 group"
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feat.color}`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                                    {feat.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                                    {feat.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Technical Specification Summary */}
                <div className="p-8 sm:p-12 rounded-3xl neu-flat border border-white/80">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Architectural Checklist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-mono text-slate-700">
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset border border-white/60 font-semibold">
                            <LuCheck className="text-emerald-600 shrink-0" size={18} />
                            <span>Server-Side & Client Routing</span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset border border-white/60 font-semibold">
                            <LuCheck className="text-emerald-600 shrink-0" size={18} />
                            <span>Dynamic Metadata SEO Tags</span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset border border-white/60 font-semibold">
                            <LuCheck className="text-emerald-600 shrink-0" size={18} />
                            <span>Sanitized Dynamic Slugs</span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset border border-white/60 font-semibold">
                            <LuCheck className="text-emerald-600 shrink-0" size={18} />
                            <span>Light Neumorphism Soft UI</span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset border border-white/60 font-semibold">
                            <LuCheck className="text-emerald-600 shrink-0" size={18} />
                            <span>Mongoose Schema Indexing</span>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset border border-white/60 font-semibold">
                            <LuCheck className="text-emerald-600 shrink-0" size={18} />
                            <span>Automated Seeder Workflows</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/login">
                        <button className="px-8 py-4 neu-button neu-glow-purple text-slate-900 rounded-full font-bold text-xs uppercase tracking-wider border border-white/80">
                            Test Features in Admin Console
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
