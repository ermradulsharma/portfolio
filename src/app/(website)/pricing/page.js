"use client";

import Link from "next/link";
import { useState } from "react";
import { LuCheck, LuSparkles, LuCircleHelp } from "react-icons/lu";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            name: "Starter Suite",
            price: billingCycle === "monthly" ? "$29" : "$290",
            period: billingCycle === "monthly" ? "/month" : "/year",
            desc: "Ideal for individual developers & standalone project dashboards.",
            features: [
                "Single Admin Console Access",
                "Up to 50 Project Records",
                "Basic Mongoose Schema Models",
                "Standard Responsive Layout",
                "Community Support"
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Professional Plan",
            price: billingCycle === "monthly" ? "$79" : "$790",
            period: billingCycle === "monthly" ? "/month" : "/year",
            desc: "Designed for growing teams needing advanced metrics & dynamic APIs.",
            features: [
                "Multi-User Role Management",
                "Unlimited Project & Blog Records",
                "Advanced SEO Engine Optimization",
                "Custom Dynamic API Gateway",
                "Recharts Analytical Visualizer",
                "Priority 24/7 Technical Support"
            ],
            cta: "Launch Pro Suite",
            popular: true,
        },
        {
            name: "Enterprise Architecture",
            price: "Custom",
            period: "",
            desc: "Dedicated infrastructure setup, custom schemas, and SLA guarantees.",
            features: [
                "Custom Database Cluster Setup",
                "Dedicated Redis & Mongo Instances",
                "Tailored Seeder Scripts & Migrations",
                "White-Label Interface Customization",
                "Dedicated Solutions Engineer",
                "99.99% Uptime Guarantee"
            ],
            cta: "Contact Architecture Team",
            popular: false,
        }
    ];

    const faqs = [
        {
            q: "How does the Next.js 16 Proxy Middleware work?",
            a: "The platform utilizes Next.js 16 proxy request routing to intercept requests, inspect JWT cookies, and enforce route guards before rendering."
        },
        {
            q: "Can I customize the MongoDB database URI?",
            a: "Yes! Simply supply your database string inside your .env configuration file under MONGODB_URI."
        },
        {
            q: "Is light mode neumorphism soft UI supported?",
            a: "Absolutely. All website UI components are styled using Tailwind CSS v4 with light extruded 3D surfaces, inset depth, and vibrant accent highlights."
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#e0e5ec] text-slate-800 overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            {/* Background Ambient Lights */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-16">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-cyan-700 text-xs font-mono font-bold uppercase tracking-widest border border-white/60">
                        <LuSparkles size={14} /> FLEXIBLE SERVICES & TIERS
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
                        Transparent Pricing for <br />
                        <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            Every Scaling Need
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Choose the platform plan that fits your application deployment requirements.
                    </p>

                    {/* Light Neumorphic Sunken Toggle */}
                    <div className="inline-flex items-center gap-3 p-2 rounded-full neu-inset border border-white/60 mt-4">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                                billingCycle === "monthly"
                                    ? "neu-button text-cyan-600 font-extrabold border border-white/80"
                                    : "text-slate-500 hover:text-slate-900"
                            }`}
                        >
                            Monthly Billing
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                                billingCycle === "yearly"
                                    ? "neu-button text-cyan-600 font-extrabold border border-white/80"
                                    : "text-slate-500 hover:text-slate-900"
                            }`}
                        >
                            Annual Billing (Save 20%)
                        </button>
                    </div>
                </div>

                {/* Light Neumorphic Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-3xl neu-raised neu-raised-hover relative flex flex-col justify-between border ${
                                plan.popular ? "border-cyan-500/50 neu-glow-cyan" : "border-white/80"
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full neu-button text-cyan-600 text-[10px] font-mono uppercase tracking-widest font-extrabold border border-white/80">
                                    ★ MOST POPULAR CHOICE
                                </span>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">{plan.desc}</p>
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 text-xs font-mono">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 pt-4 border-t border-slate-300/60 text-sm text-slate-700">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2.5 font-medium">
                                            <LuCheck className="text-cyan-600 shrink-0" size={16} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8">
                                <Link href="/login">
                                    <button className={`w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider neu-button border transition-all ${
                                        plan.popular
                                            ? "border-white/80 text-cyan-600 neu-glow-cyan"
                                            : "border-white/80 text-slate-800 hover:text-slate-900"
                                    }`}>
                                        {plan.cta}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto space-y-8 pt-8">
                    <h2 className="text-2xl font-bold text-slate-900 text-center flex items-center justify-center gap-2">
                        <LuCircleHelp className="text-cyan-600" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 rounded-3xl neu-raised border border-white/80 space-y-2">
                                <h4 className="text-base font-bold text-slate-900">{faq.q}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
