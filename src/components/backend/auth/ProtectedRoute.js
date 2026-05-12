"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Authorization is now fully managed by the server-side Proxy (Middleware).
        // If this layout is rendered, the Proxy has already validated the request.
        setIsAuthorized(true);
        setIsLoading(false);
    }, []);

    // While verification logic executes, we output NOTHING to prevent UI flickering/leakage
    if (isLoading || !isAuthorized) {
        return (
            <div className="min-h-screen w-full bg-[#09090b] flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    // Final visual grant
    return <>{children}</>;
}
