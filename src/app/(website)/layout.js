import Header from "@/components/frontend/layouts/Header";
import Footer from "@/components/frontend/layouts/Footer";

export default function WebsiteLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#ffffff] text-slate-900 antialiased">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
