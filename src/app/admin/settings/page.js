"use client";

import { useState } from "react";
import { LuSave, LuUser, LuSettings, LuShield, LuGlobe, LuTriangleAlert } from "react-icons/lu";
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
    Input, Button, Switch, Select
} from "@/components/backend/ui";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });

    // Form States
    const [profile, setProfile] = useState({
        name: "Mradul Sharma",
        email: "admin@mradul.dev",
        bio: "Full-Stack Developer building intelligent software.",
    });

    const [site, setSite] = useState({
        siteName: "Mradul Sharma | Portfolio",
        maintenance: false,
        language: "en",
        indexing: true,
    });

    const [security, setSecurity] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        // Simulate API delay
        setTimeout(() => {
            setIsSubmitting(false);
            setStatus({
                type: "success",
                message: "Settings saved successfully!"
            });
            // Clear status alert after 3 seconds
            setTimeout(() => setStatus({ type: null, message: "" }), 3000);
        }, 1200);
    };

    const tabs = [
        { id: "profile", label: "Profile", icon: LuUser },
        { id: "site", label: "Site Configuration", icon: LuGlobe },
        { id: "security", label: "Security & Password", icon: LuShield },
    ];

    return (
        <div className="relative max-w-6xl mx-auto pb-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Settings
                    </h1>
                    <p className="text-white/40 text-sm mt-1">Configure platform experience, user credentials, and SEO parameters.</p>
                </div>
            </div>

            {/* Custom inline status banner */}
            {status.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 backdrop-blur-md border ${status.type === "success" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                    <div className="w-2 h-2 rounded-full bg-current animate-ping" />
                    <span className="text-sm font-medium">{status.message}</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                {/* Tab Navigation */}
                <div className="flex flex-col gap-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${isActive
                                    ? "bg-white/[0.06] text-white border-l-2 border-cyan-500"
                                    : "text-white/60 hover:bg-white/[0.03] hover:text-white"
                                    }`}
                            >
                                <Icon size={18} className={isActive ? "text-cyan-400" : "text-white/40"} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div>
                    <form onSubmit={handleSave}>
                        {activeTab === "profile" && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Admin Profile</CardTitle>
                                    <CardDescription>Customize public developer profile information displayed across portals.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Full Name</label>
                                            <Input
                                                value={profile.name}
                                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                                placeholder="e.g. Mradul Sharma"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Email Address</label>
                                            <Input
                                                type="email"
                                                value={profile.email}
                                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                                placeholder="e.g. contact@portfolio.dev"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Bio / Headline</label>
                                        <Input
                                            value={profile.bio}
                                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                            placeholder="Brief descriptive bio statement"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="border-t border-white/5 pt-6 flex justify-end gap-4">
                                    <Button type="submit" variant="premium" className="gap-2" disabled={isSubmitting}>
                                        <LuSave size={16} />
                                        {isSubmitting ? "Saving Changes..." : "Save Profile"}
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}

                        {activeTab === "site" && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Site Global Settings</CardTitle>
                                    <CardDescription>Configure technical aspects and SEO behaviors of your active portfolio space.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Base Meta Title</label>
                                        <Input
                                            value={site.siteName}
                                            onChange={(e) => setSite({ ...site, siteName: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Default Locale Language</label>
                                            <Select
                                                value={site.language}
                                                onChange={(e) => setSite({ ...site, language: e.target.value })}
                                            >
                                                <option className="bg-[#0a0a0f] text-white" value="en">English (US)</option>
                                                <option className="bg-[#0a0a0f] text-white" value="hi">Hindi (India)</option>
                                                <option className="bg-[#0a0a0f] text-white" value="de">Deutsch</option>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-4 border-t border-white/5 pt-6">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="space-y-0.5">
                                                <p className="text-sm font-medium text-white">Search Engine Indexing</p>
                                                <p className="text-xs text-white/40">Allow bots to index metadata and boost content discoverability.</p>
                                            </div>
                                            <Switch
                                                checked={site.indexing}
                                                onChange={(val) => setSite({ ...site, indexing: val })}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between p-4 rounded-xl bg-red-500/[0.02] border border-red-500/10">
                                            <div className="space-y-0.5 flex gap-3 items-center">
                                                <LuTriangleAlert className="text-amber-500 shrink-0" size={20} />
                                                <div>
                                                    <p className="text-sm font-medium text-white">Maintenance Mode</p>
                                                    <p className="text-xs text-white/40">Gracefully lock frontend access while completing core upgrades.</p>
                                                </div>
                                            </div>
                                            <Switch
                                                checked={site.maintenance}
                                                onChange={(val) => setSite({ ...site, maintenance: val })}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="border-t border-white/5 pt-6 flex justify-end gap-4">
                                    <Button type="submit" variant="premium" className="gap-2" disabled={isSubmitting}>
                                        <LuSave size={16} />
                                        {isSubmitting ? "Processing..." : "Persist Settings"}
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}

                        {activeTab === "security" && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Credentials & Access control</CardTitle>
                                    <CardDescription>Perform administrative secret keys and password resets.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Current Admin Password</label>
                                        <Input
                                            type="password"
                                            value={security.currentPassword}
                                            onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })}
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">New Secure Cipher</label>
                                            <Input
                                                type="password"
                                                value={security.newPassword}
                                                onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                                                placeholder="••••••••"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">Verify Cipher</label>
                                            <Input
                                                type="password"
                                                value={security.confirmPassword}
                                                onChange={(e) => setSecurity({ ...security, confirmPassword: e.target.value })}
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="border-t border-white/5 pt-6 flex justify-end gap-4">
                                    <Button type="submit" variant="premium" className="gap-2" disabled={isSubmitting}>
                                        <LuShield size={16} />
                                        {isSubmitting ? "Encrypting..." : "Change Credentials"}
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
