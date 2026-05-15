"use client";
import { LuBoxes, LuRocket, LuFeather, LuSlidersHorizontal, LuLayoutDashboard, LuGlobe } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Overview", href: "/admin", icon: LuLayoutDashboard, color: "text-purple-500", activeBorder: "border-purple-600", activeBg: "from-purple-600/10" },
        { name: "Social Media", href: "/admin/social", icon: LuGlobe, color: "text-purple-500", activeBorder: "border-purple-600", activeBg: "from-purple-600/10" },
        { name: "Category", href: "/admin/categories", icon: LuBoxes, color: "text-emerald-400", activeBorder: "border-emerald-600", activeBg: "from-emerald-600/10" },
        { name: "Project", href: "/admin/project", icon: LuRocket, color: "text-pink-400", activeBorder: "border-pink-600", activeBg: "from-pink-600/10" },
        { name: "Blog", href: "/admin/blog", icon: LuFeather, color: "text-rose-400", activeBorder: "border-rose-600", activeBg: "from-rose-600/10" },
        { name: "Setting", href: "/admin/settings", icon: LuSlidersHorizontal, color: "text-amber-400", activeBorder: "border-amber-600", activeBg: "from-amber-600/10" },
    ];

    return (
        <aside className="hidden lg:flex lg:col-start-1 lg:col-end-2 lg:row-span-full bg-black/80 backdrop-blur-xl border-r border-white/10 flex-col sticky top-0 h-screen">
            <div className="h-[70px] flex items-center justify-center px-0 border-b border-white/10 overflow-hidden">
                <Image src="/image/logo.gif" alt="Mradul Sharma" width={260} height={70} className="object-contain object-top" priority unoptimized />
            </div>

            <nav className="flex flex-col gap-2 p-4">
                {navLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive ? `bg-gradient-to-r ${item.activeBg || 'from-white/5'} to-transparent border-l-2 ${item.activeBorder || 'border-white/50'} text-white` : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
                            <Icon size={18} className={`${isActive ? item.color : "group-hover:" + item.color} transition-colors`} /> {item.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

