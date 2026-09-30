import Header from "@/components/frontend/layouts/Header";
import Footer from "@/components/frontend/layouts/Footer";

export default function WebsiteLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#e0e5ec] text-slate-800 selection:bg-cyan-500 selection:text-white">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
