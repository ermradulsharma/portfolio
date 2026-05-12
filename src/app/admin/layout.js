import { Sidebar, Header, Footer } from "@/components/backend/layouts";
import ProtectedRoute from "@/components/backend/auth/ProtectedRoute";

export default function AdminLayout({ children }) {
    return (
        <ProtectedRoute>
            <div className="h-screen overflow-hidden lg:grid lg:grid-cols-[260px_1fr] lg:grid-rows-[70px_1fr_auto]">
                <Sidebar />
                <Header />
                <main className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 p-6 relative overflow-y-auto min-h-0 no-scrollbar">
                    {children}
                </main>
                <Footer />
            </div>
        </ProtectedRoute>
    );
}
