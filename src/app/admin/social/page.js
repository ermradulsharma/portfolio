"use client";

import { useState, useEffect } from "react";
import { LuSearch, LuPencil, LuExternalLink, LuGlobe, LuCircleCheck } from "react-icons/lu";
import { Button, Input, DataTable, ActionModal, Switch } from "@/components/backend/ui";

// Brand Icons from React-Icons
import {
    BsFacebook, BsInstagram, BsTwitterX, BsLinkedin, BsGithub,
    BsGitlab, BsStackOverflow, BsMedium, BsYoutube, BsTelegram
} from "react-icons/bs";
import {
    FaTiktok, FaSnapchat, FaPinterest, FaBitbucket, FaStackExchange,
    FaDev, FaCodepen, FaHackerrank, FaWordpress, FaBlogger,
    FaTwitch, FaVimeo, FaWhatsapp, FaDiscord, FaSlack,
    FaReddit, FaQuora, FaBehance, FaDribbble, FaDeviantart
} from "react-icons/fa";
import {
    SiThreads, SiLeetcode, SiCodesignal, SiGeeksforgeeks,
    SiSubstack, SiDailymotion, SiCanva
} from "react-icons/si";

// Fully Mapped Global React Brand Icon Repository
const IconMap = {
    BsFacebook, BsInstagram, BsTwitterX, BsLinkedin, BsGithub,
    BsGitlab, BsStackOverflow, BsMedium, BsYoutube, BsTelegram,
    FaTiktok, FaSnapchat, FaPinterest, FaBitbucket, FaStackExchange,
    FaDev, FaCodepen, FaHackerrank, FaWordpress, FaBlogger,
    FaTwitch, FaVimeo, FaWhatsapp, FaDiscord, FaSlack,
    FaReddit, FaQuora, FaBehance, FaDribbble, FaDeviantart,
    SiThreads, SiLeetcode, SiCodesignal, SiGeeksforgeeks,
    SiSubstack, SiDailymotion, SiCanva
};

// Elegant custom color pallet mappings to give realistic brands flair!
const brandColors = {
    BsFacebook: "text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/20",
    BsInstagram: "text-[#E4405F] bg-[#E4405F]/10 border-[#E4405F]/20",
    BsTwitterX: "text-white bg-white/10 border-white/20",
    BsLinkedin: "text-[#0A66C2] bg-[#0A66C2]/10 border-[#0A66C2]/20",
    BsGithub: "text-white bg-white/10 border-white/20",
    BsGitlab: "text-[#FC6D26] bg-[#FC6D26]/10 border-[#FC6D26]/20",
    BsStackOverflow: "text-[#F58025] bg-[#F58025]/10 border-[#F58025]/20",
    BsMedium: "text-white bg-white/10 border-white/20",
    BsYoutube: "text-[#FF0000] bg-[#FF0000]/10 border-[#FF0000]/20",
    BsTelegram: "text-[#24A1DE] bg-[#24A1DE]/10 border-[#24A1DE]/20",
    FaTiktok: "text-white bg-white/10 border-white/20",
    FaSnapchat: "text-[#FFFC00] bg-[#FFFC00]/10 border-[#FFFC00]/20",
    FaPinterest: "text-[#BD081C] bg-[#BD081C]/10 border-[#BD081C]/20",
    FaDev: "text-white bg-white/10 border-white/20",
    FaCodepen: "text-white bg-white/10 border-white/20",
    FaWordpress: "text-[#21759B] bg-[#21759B]/10 border-[#21759B]/20",
    FaTwitch: "text-[#9146FF] bg-[#9146FF]/10 border-[#9146FF]/20",
    FaWhatsapp: "text-[#25D366] bg-[#25D366]/10 border-[#25D366]/20",
    FaDiscord: "text-[#5865F2] bg-[#5865F2]/10 border-[#5865F2]/20",
    FaSlack: "text-[#4A154B] bg-[#4A154B]/10 border-[#4A154B]/20",
    FaReddit: "text-[#FF4500] bg-[#FF4500]/10 border-[#FF4500]/20",
    FaDribbble: "text-[#EA4C89] bg-[#EA4C89]/10 border-[#EA4C89]/20",
    SiCanva: "text-[#00C4CC] bg-[#00C4CC]/10 border-[#00C4CC]/20",
    SiLeetcode: "text-[#FFA116] bg-[#FFA116]/10 border-[#FFA116]/20",
    SiGeeksforgeeks: "text-[#2F8D46] bg-[#2F8D46]/10 border-[#2F8D46]/20"
};

export default function SocialLinksPage() {
    const [socials, setSocials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    // Action States
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({ name: "", link: "", username: "", icon: "", status: false });
    const [saving, setSaving] = useState(false);

    // Initial Fetch
    const fetchSocials = async () => {
        try {
            const res = await fetch('/api/admin/socials', { cache: 'no-store' });
            const result = await res.json();
            if (result.success) {
                const initialSorted = [...result.data].sort((a, b) => {
                    const getTier = (x) => {
                        if (x.status) return 1;
                        if ((x.username || "").trim()) return 2;
                        return 3;
                    };
                    const tierA = getTier(a);
                    const tierB = getTier(b);
                    if (tierA !== tierB) {
                        return tierA - tierB;
                    }
                    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
                });
                setSocials(initialSorted);
            }
        } catch (error) {
            console.error("Fetch Failed:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSocials();
    }, []);

    // Handle Toggle Status
    const handleToggleStatus = async (item, newStatus) => {
        // Interception: If turning ONLINE without username, force modal input flow!
        if (newStatus && !(item.username || "").trim()) {
            setEditingItem(item);
            setFormData({
                name: item.name,
                link: item.link || "",
                username: "",
                icon: item.icon || "LuGlobe",
                status: true // Pre-toggled to TRUE in the modal for them!
            });
            setIsEditModalOpen(true);
            return; // Block direct backend push
        }

        // Optimistic UI Update
        const previousState = [...socials];
        setSocials(prev => prev.map(s => s._id === item._id ? { ...s, status: newStatus } : s));

        try {
            const res = await fetch('/api/admin/socials', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: item._id, status: newStatus })
            });
            const result = await res.json();
            if (!result.success) {
                setSocials(previousState);
            }
        } catch (error) {
            console.error("Update Failed:", error);
            setSocials(previousState);
        }
    };

    // Open Modification Modal
    const openEditModal = (item) => {
        setEditingItem(item);
        setFormData({
            name: item.name,
            link: item.link || "",
            username: item.username || "",
            icon: item.icon || "LuGlobe",
            status: item.status ?? false
        });
        setIsEditModalOpen(true);
    };

    // Handle Save Updates
    const handleSave = async () => {
        if (!editingItem) return;
        setSaving(true);
        try {
            const res = await fetch('/api/admin/socials', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingItem._id,
                    link: formData.link,
                    username: formData.username,
                    icon: formData.icon,
                    status: formData.status
                })
            });
            const result = await res.json();
            if (result.success) {
                setSocials(prev => prev.map(s => s._id === editingItem._id ? result.data : s));
                setIsEditModalOpen(false);
            }
        } catch (error) {
            console.error("Save Failed:", error);
        } finally {
            setSaving(false);
        }
    };

    // Use fixed base from Database, and simple handle tracking
    const derivedBase = formData.link;

    const handleUsernameChange = (newVal) => {
        setFormData(prev => ({ ...prev, username: newVal }));
    };

    // Helper to construct full profile URL from base link & handle
    const getFullLink = (record) => {
        if (!record.link) return "";
        if (!record.username) return record.link;
        const baseEndsWithSlash = record.link.endsWith('/');
        const handleStartsWithSlash = record.username.startsWith('/');
        if (baseEndsWithSlash || handleStartsWithSlash) {
            return `${record.link}${record.username}`;
        }
        return `${record.link}/${record.username}`;
    };

    // Filtering items by search
    const filteredData = socials.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Table Columns Setup
    const columns = [
        { title: "Index", render: (_, __, idx) => `#${String(idx).padStart(2, '0')}` },
        {
            title: "Logo",
            render: (_, record) => {
                const IconComponent = IconMap[record.icon] || LuGlobe;
                const profileUrl = getFullLink(record);
                const statusColorClass = record.status ? (brandColors[record.icon] || "text-purple-400 bg-purple-500/10 border-purple-500/20") : "bg-white/5 text-white/30 border-white/5";
                const iconContent = (<div className={`h-9 w-9 rounded-xl flex items-center justify-center border shadow-sm transition-all duration-300 ${statusColorClass} ${profileUrl ? 'hover:scale-110 cursor-pointer' : ''}`}><IconComponent size={18} /></div>);
                return profileUrl ? (<a href={profileUrl} target="_blank" rel="noopener noreferrer" title={`Visit ${record.name} Profile`} className="inline-block">{iconContent}</a>) : iconContent;
            }
        },
        {
            title: "Identity",
            render: (_, record) => (<span className={`font-medium tracking-tight transition-colors duration-300 ${record.status ? 'text-white font-semibold' : 'text-white/50'}`}>{record.name}</span>)
        },
        {
            title: "Full Link",
            render: (_, record) => {
                const profileUrl = getFullLink(record);
                return (<div className="flex items-center justify-center gap-2 group max-w-[220px] truncate">{profileUrl ? (<a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-cyan-300 font-mono underline underline-offset-2 break-all transition-colors flex items-center gap-1.5 truncate">{profileUrl.replace('https://', '').replace('www.', '')}<LuExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-cyan-400" /></a>) : (<span className="text-xs italic text-white/10">— No Link —</span>)}</div>);
            }
        },
        {
            title: "Status",
            render: (_, record) => (
                <div className="flex items-center gap-2">
                    <Switch checked={record.status} onChange={(val) => handleToggleStatus(record, val)} />
                    <span className={`text-xs font-medium tracking-wide transition-colors ${record.status ? 'text-emerald-400' : 'text-white/20'}`}>{record.status ? 'ONLINE' : 'OFFLINE'}</span>
                </div>
            )
        },
        { title: "Action", render: (_, record) => (<Button onClick={() => openEditModal(record)} variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all" title="Modify Config"><LuPencil size={15} /></Button>) }
    ];

    return (
        <div className="relative animate-in fade-in duration-500">
            {/* Header Title Structure */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-3">
                        <LuGlobe size={24} className="text-cyan-500 animate-pulse" /> Social Credentials
                    </h1>
                    <p className="text-white/40 text-sm mt-1.5 font-medium tracking-wide">Manage official social presence metrics across user-facing channels ({socials.filter(s => s.status).length}/{socials.length} online)</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <LuSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                        <Input placeholder="Find profiles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 w-64 border-white/10 focus:border-cyan-500/50 text-sm" />
                    </div>
                </div>
            </div>

            {/* Main Table Configuration */}
            {loading ? (
                <div className="h-[400px] w-full flex flex-col items-center justify-center gap-3 bg-white/[0.01] border border-white/5 rounded-2xl">
                    <div className="animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                    <p className="text-xs text-white/40 font-semibold animate-pulse tracking-widest uppercase mt-2">Syncing Brand Handlers...</p>
                </div>
            ) : (
                <DataTable key={searchTerm} columns={columns} data={filteredData} selectable={false} paginated={true} itemsPerPage={13} keyField="_id" />
            )}

            {/* Configuration Modification Window */}
            <ActionModal open={isEditModalOpen} onOpenChange={setIsEditModalOpen} title={`Configure ${editingItem?.name || ''}`} description="Update explicit hyperlink references and runtime presence toggle state." icon={LuPencil} iconColor="text-cyan-400" saveText={saving ? "Applying Updates..." : "Save Settings"} cancelText="Close" onSave={handleSave}>
                <div className="space-y-5 mt-1">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white/50 uppercase tracking-wider px-0.5">Configure Profile Handle</label>
                        <div className="flex rounded-xl border border-white/10 bg-black/40 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all overflow-hidden h-10 items-center backdrop-blur-sm">
                            <div className="flex items-center gap-2 px-3.5 h-full bg-white/[0.03] border-r border-white/5 text-xs text-white/40 font-mono select-none shrink-0">
                                {(() => {
                                    const Comp = IconMap[formData.icon] || LuGlobe;
                                    return <Comp size={14} className={brandColors[formData.icon]?.split(' ')[0] || "text-white/40"} />;
                                })()}
                                <span>{derivedBase || "https://"}</span>
                            </div>
                            <input value={formData.username} onChange={(e) => handleUsernameChange(e.target.value)} placeholder="username" className="flex-1 bg-transparent border-none px-3.5 h-full text-sm text-cyan-400 font-mono focus:outline-none placeholder:text-white/10" title="Modify Username Handle" />
                        </div>
                        <p className="text-[10px] text-white/30 px-0.5 font-medium">Lockbound: Platform domain is fixed. Provide handle to auto-compute full route.</p>
                    </div>

                    <div className="flex items-center justify-between bg-white/[0.01] border border-white/5 p-3.5 rounded-xl transition-all hover:bg-white/[0.03] hover:border-white/10">
                        <div>
                            <label className="text-sm font-semibold text-white flex items-center gap-2">Enable Runtime Presence {formData.status && <LuCircleCheck size={14} className="text-emerald-400 animate-bounce" />}</label>
                            <p className="text-[10px] text-white/30 font-medium mt-0.5">Propagates status across customer portfolios upon checking.</p>
                        </div>
                        <Switch checked={formData.status} onChange={(val) => setFormData(prev => ({ ...prev, status: val }))} />
                    </div>
                </div>
            </ActionModal>
        </div>
    );
}
