"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/backend/ui";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

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

            if (data.success) {
                // Store securely in local storage per user request architecture
                localStorage.setItem("admin_token", data.token);

                // Safe delay for visually pleasing success transition
                setTimeout(() => {
                    router.push("/admin");
                }, 800);
            } else {
                setErrorMsg(data.error || "Invalid authorization attempt.");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Login Error:", error);
            setErrorMsg("Network malfunction. Check connectivity.");
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/image/back_3.webp" alt="Background" fill className="object-cover opacity-70" style={{ objectPosition: 'center 25%' }} priority />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <Card className="w-full max-w-[440px] relative z-10 backdrop-blur-xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] border-white/[0.08]">
                <CardHeader className="text-center pt-8 pb-6">
                    <CardTitle className="text-3xl font-bold tracking-tight">Welcome Back</CardTitle>
                    <CardDescription className="text-white/50">Access your administrative console securely.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                    {errorMsg && (
                        <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-bold uppercase tracking-wide transition-all animate-in fade-in">
                            ⚠️ {errorMsg}
                        </div>
                    )}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70" htmlFor="email">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-cyan-500 transition-colors"><Mail size={18} /></div>
                                <input type="email" id="email" placeholder="name@company.com" required className="w-full bg-white/[0.03] border border-white/[0.07] text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-white/20 font-medium" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-white/70 " htmlFor="password">Password</label>
                                <a href="#" className="text-xs text-cyan-400/80 hover:text-cyan-400 transition-colors font-medium">Forgot access key?</a>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-purple-500 transition-colors"><Lock size={18} /></div>
                                <input type="password" id="password" placeholder="••••••••" required className="w-full bg-white/[0.03] border border-white/[0.07] text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-white/20 font-medium" />
                            </div>
                        </div>

                        <Button type="submit" disabled={isLoading} className="w-full h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold text-base shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 mt-2 relative overflow-hidden group active:scale-[0.98]">
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <span className="flex items-center gap-2 justify-center">Authenticate
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
