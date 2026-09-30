"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuRocket, LuMenu, LuX, LuSparkles, LuChevronRight } from "react-icons/lu";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-[#e0e5ec]/90 backdrop-blur-xl border-b border-white/60 neu-raised-sm py-3"
                    : "bg-[#e0e5ec]/70 backdrop-blur-md py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* Brand Logo with Light Neumorphic Raised Frame */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center gap-3 p-2 rounded-2xl neu-raised neu-raised-hover border border-white/80">
                            <Image
                                src="/image/logo.png"
                                alt="Mradul Sharma Logo"
                                width={38}
                                height={38}
                                className="w-9 h-9 object-contain rounded-xl shadow-md"
                                priority
                            />
                            <div className="flex flex-col pr-2">
                                <span className="text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                                    MRADUL<span className="text-cyan-600 font-light ml-1">SHARMA</span>
                                </span>
                                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase -mt-0.5">
                                    Soft UI Suite
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links (Light Sunken Neumorphic Track) */}
                    <nav className="hidden md:flex items-center gap-1.5 neu-inset p-1.5 rounded-full border border-white/60">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 relative ${
                                        isActive
                                            ? "neu-button text-cyan-600 border border-white/80 font-extrabold"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold neu-inset border border-emerald-500/30 text-emerald-600">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                            System Active
                        </div>

                        <Link href="/login">
                            <button className="neu-button neu-glow-cyan px-5 py-2.5 rounded-full text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 group border border-white/80">
                                <LuRocket size={15} className="text-cyan-600 group-hover:rotate-12 transition-transform" />
                                <span>Console Access</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-2xl neu-button text-slate-700 hover:text-slate-900 focus:outline-none border border-white/80"
                    >
                        {mobileMenuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#e0e5ec] neu-raised px-4 pt-4 pb-6 mt-3 space-y-3 border-t border-white/60 animate-in fade-in slide-in-from-top-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                                pathname === item.href
                                    ? "neu-inset text-cyan-600 font-bold border border-cyan-500/30"
                                    : "text-slate-700 hover:text-slate-900 neu-button"
                            }`}
                        >
                            <span>{item.name}</span>
                            <LuChevronRight size={16} className="text-slate-400" />
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                            <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl neu-button text-slate-900 font-bold text-sm border border-white/80">
                                <LuRocket size={16} className="text-cyan-600" />
                                Launch Admin Console
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}