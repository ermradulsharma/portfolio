"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasCookieToken = document.cookie.split('; ').some(row => row.startsWith('admin_token='));
        const localToken = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
        const hasLocalToken = localToken && localToken !== 'undefined' && localToken !== 'null';
        
        if (!hasCookieToken && !hasLocalToken) {
            setIsAuthorized(false);
            setIsLoading(false);
            router.push('/login');
        } else {
            setIsAuthorized(true);
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading || !isAuthorized) {
        return (
            <div className="min-h-screen w-full bg-[#09090b] flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    return <>{children}</>;
}
