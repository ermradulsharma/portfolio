"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsTwitterX, BsGlobe } from "react-icons/bs";
import { LuArrowRight, LuCheck, LuHeart } from "react-icons/lu";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 4000);
            setEmail("");
        }
    };

    return (
        <footer className="w-full bg-[#e0e5ec] border-t border-white/60 text-slate-800 relative overflow-hidden pt-16 pb-12">
            {/* Soft Ambient Light Effects */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-300/60">
                    
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="flex items-center gap-3 p-2.5 rounded-2xl neu-raised neu-raised-hover border border-white/80">
                                <Image
                                    src="/image/logo.png"
                                    alt="Mradul Sharma"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 object-contain rounded-xl shadow-md"
                                />
                                <div className="flex flex-col pr-2">
                                    <span className="text-base font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                                        MRADUL<span className="text-cyan-600 font-light ml-1">SHARMA</span>
                                    </span>
                                    <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase -mt-0.5">
                                        Full-Stack Architecture
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-slate-600 text-sm max-w-sm leading-relaxed font-normal">
                            Ultra-premium management suite, analytical platform, and enterprise web applications engineered with light neumorphic soft UI material.
                        </p>
                        
                        {/* Social Buttons with Light Neumorphism */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-2xl neu-button flex items-center justify-center text-slate-700 hover:text-cyan-600 border border-white/80 transition-all"
                            >
                                <BsGithub size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-2xl neu-button flex items-center justify-center text-slate-700 hover:text-blue-600 border border-white/80 transition-all"
                            >
                                <BsLinkedin size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-2xl neu-button flex items-center justify-center text-slate-700 hover:text-pink-600 border border-white/80 transition-all"
                            >
                                <BsTwitterX size={18} />
                            </a>
                            <a
                                href="/admin"
                                className="w-10 h-10 rounded-2xl neu-button flex items-center justify-center text-slate-700 hover:text-purple-600 border border-white/80 transition-all"
                                title="Admin Portal"
                            >
                                <BsGlobe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium">
                            <li>
                                <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home Landing</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About Engineering</Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-slate-600 hover:text-slate-900 transition-colors">System Features</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Services & Tiers</Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-cyan-600 hover:text-cyan-700 font-bold transition-colors">Admin Console</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Stack Tools */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            Stack Tools
                        </h4>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                            <span className="px-3 py-1.5 neu-inset rounded-xl text-slate-700 border border-white/80">Next.js 16</span>
                            <span className="px-3 py-1.5 neu-inset rounded-xl text-slate-700 border border-white/80">React 19</span>
                            <span className="px-3 py-1.5 neu-inset rounded-xl text-slate-700 border border-white/80">MongoDB</span>
                            <span className="px-3 py-1.5 neu-inset rounded-xl text-slate-700 border border-white/80">Tailwind v4</span>
                            <span className="px-3 py-1.5 neu-inset rounded-xl text-slate-700 border border-white/80">JWT Auth</span>
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
                            Stay Updated
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed">
                            Subscribe for major platform updates and architecture announcements.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full neu-inset rounded-2xl px-4 py-3 text-xs text-slate-900 outline-none border border-white/80 focus:border-cyan-500/50 transition-all placeholder:text-slate-400"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 neu-button text-cyan-600 rounded-xl hover:text-slate-900 transition-colors flex items-center justify-center border border-white/80"
                                >
                                    {subscribed ? <LuCheck size={14} className="text-emerald-600" /> : <LuArrowRight size={14} />}
                                </button>
                            </div>
                            {subscribed && (
                                <p className="text-[10px] text-emerald-600 font-mono">✓ Successfully subscribed!</p>
                            )}
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
                    <p className="flex items-center gap-1.5">
                        © {new Date().getFullYear()} Mradul Sharma. Crafted with <LuHeart size={14} className="text-rose-500 fill-rose-500" /> & Light Neumorphism.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Security Audit</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}