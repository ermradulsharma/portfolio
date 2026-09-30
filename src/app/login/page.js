"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
    LuMail, 
    LuLock, 
    LuArrowRight, 
    LuLoader, 
    LuEye, 
    LuEyeOff, 
    LuShieldCheck, 
    LuArrowLeft,
    LuSparkles
} from "react-icons/lu";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            const token = data.data?.token || data.token;

            if (data.success && token) {
                // Store securely in local storage & cookie per app architecture
                localStorage.setItem("admin_token", token);
                document.cookie = `admin_token=${token}; path=/; max-age=86400; SameSite=Strict`;

                // Safe delay for visually pleasing success transition
                setTimeout(() => {
                    router.push("/admin");
                }, 600);
            } else {
                setErrorMsg(data.message || data.error || "Invalid authorization attempt.");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Login Error:", error);
            setErrorMsg("Network malfunction. Check connectivity.");
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen w-full bg-[#e0e5ec] text-slate-800 flex items-center justify-center p-4 relative overflow-hidden selection:bg-cyan-500 selection:text-white">
            {/* Ambient Background Decorative Neumorphic Elements */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full neu-flat opacity-60 blur-xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full neu-flat opacity-60 blur-xl pointer-events-none" />

            {/* Back Link Button */}
            <div className="absolute top-6 left-6 z-20">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl neu-button text-xs font-bold text-slate-600 hover:text-cyan-600 transition-colors"
                >
                    <LuArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md relative z-10 neu-raised rounded-3xl p-8 sm:p-10 border border-white/60">
                {/* Header / Brand */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl neu-inset p-3 flex items-center justify-center relative group">
                        <Image 
                            src="/image/logo.png" 
                            alt="Brand Logo" 
                            width={56} 
                            height={56} 
                            className="object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
                            priority 
                        />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset text-[11px] font-bold text-cyan-600 uppercase tracking-wider mb-2">
                        <LuSparkles size={12} />
                        Secure Auth Terminal
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
                    <p className="text-xs text-slate-500 mt-1">Authenticate to access management console</p>
                </div>

                {/* Error Banner */}
                {errorMsg && (
                    <div className="mb-6 p-4 rounded-2xl neu-inset border border-red-300/50 bg-red-500/5 text-red-600 text-xs text-center font-semibold flex items-center justify-center gap-2 animate-in">
                        <span className="text-sm">⚠️</span>
                        <span>{errorMsg}</span>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                <LuMail size={18} />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="admin@dashboard.com"
                                className="w-full bg-[#e0e5ec] text-slate-800 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-medium neu-inset outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                                Access Password
                            </label>
                            <a 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); alert("Please contact system administrator to reset password."); }}
                                className="text-xs text-cyan-600 hover:underline font-semibold"
                            >
                                Forgot?
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                <LuLock size={18} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                placeholder="••••••••"
                                className="w-full bg-[#e0e5ec] text-slate-800 rounded-2xl py-3.5 pl-11 pr-11 text-sm font-medium neu-inset outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all placeholder:text-slate-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                {showPassword ? <LuEyeOff size={18} /> : <LuEye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 rounded-2xl neu-button neu-glow-cyan bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 group transition-all duration-300 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                    >
                        {isLoading ? (
                            <LuLoader className="animate-spin" size={20} />
                        ) : (
                            <>
                                Authenticate Console
                                <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                {/* Footer Badges */}
                <div className="mt-8 pt-6 border-t border-slate-300/40 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">
                    <LuShieldCheck size={14} className="text-emerald-500" />
                    <span>256-bit Encrypted SSL Session</span>
                </div>
            </div>
        </main>
    );
}

