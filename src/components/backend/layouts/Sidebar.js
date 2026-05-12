import { LayoutDashboard, BarChart3, Briefcase, Settings, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex lg:col-start-1 lg:col-end-2 lg:row-span-full bg-black/80 backdrop-blur-xl border-r border-white/10 flex-col sticky top-0 h-screen">
            {/* Sidebar Logo/Header aligned with Global Header */}
            <div className="h-[70px] flex items-center justify-center px-0 border-b border-white/10 overflow-hidden">
                <Image src="/image/logo.gif" alt="Mradul Sharma" width={260} height={70} className="object-contain object-top" priority unoptimized />
            </div>

            <nav className="flex flex-col gap-2 p-4">
                <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-transparent border-l-2 border-purple-600 text-white group transition-colors">
                    <LayoutDashboard size={18} className="text-purple-500" /> Overview
                </Link>
                <Link href="/admin/categories" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all group">
                    <Layers size={18} className="group-hover:text-emerald-400 transition-colors" /> Categories
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all group">
                    <BarChart3 size={18} className="group-hover:text-cyan-400 transition-colors" /> Analytics
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all group">
                    <Briefcase size={18} className="group-hover:text-pink-400 transition-colors" /> Projects
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all group">
                    <Settings size={18} className="group-hover:text-amber-400 transition-colors" /> Settings
                </Link>
            </nav>
        </aside>
    );
}

