"use client";

import { LuBoxes, LuRocket, LuFeather, LuSlidersHorizontal, LuLayoutDashboard, LuGlobe } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Overview", href: "/admin", icon: LuLayoutDashboard, color: "text-purple-400" },
        { name: "Social Media", href: "/admin/social", icon: LuGlobe, color: "text-cyan-400" },
        { name: "Category", href: "/admin/categories", icon: LuBoxes, color: "text-emerald-400" },
        { name: "Project", href: "/admin/project", icon: LuRocket, color: "text-pink-400" },
        { name: "Blog", href: "/admin/blog", icon: LuFeather, color: "text-rose-400" },
        { name: "Setting", href: "/admin/settings", icon: LuSlidersHorizontal, color: "text-amber-400" },
    ];

    return (
        <aside className="hidden lg:flex lg:col-start-1 lg:col-end-2 lg:row-span-full bg-[#0f1015] border-r border-white/5 flex-col sticky top-0 h-screen z-20">
            {/* Header Brand */}
            <div className="h-[70px] flex items-center justify-start px-5 border-b border-white/5">
                <Link href="/admin" className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-2xl neu-raised neu-raised-hover">
                        <Image src="/image/logo.png" alt="Mradul Sharma" width={38} height={38} className="w-9 h-9 object-contain rounded-xl shadow-[0_0_12px_rgba(6,182,212,0.4)]" priority />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            MRADUL<span className="text-cyan-400 font-light ml-1">SHARMA</span>
                        </span>
                        <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase -mt-0.5 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" /> ADMIN CONSOLE
                        </span>
                    </div>
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col gap-3 p-4 flex-1">
                {navLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                                isActive
                                    ? "neu-button text-white border border-cyan-500/30 neu-glow-cyan"
                                    : "text-white/60 neu-raised-sm neu-raised-hover hover:text-white"
                            }`}
                        >
                            <div className={`p-1.5 rounded-xl ${isActive ? "neu-inset text-cyan-400" : "bg-white/5 " + item.color}`}>
                                <Icon size={16} />
                            </div>
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
