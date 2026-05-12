export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 bg-black/70 backdrop-blur-md border-t border-white/10 p-4 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <p className="text-sm text-white/40 uppercase">Built by <span className="text-white"> @ Kautilya</span></p>
                </div>

                <nav className="flex items-center gap-6">
                    <a href="#" className="text-xs text-white/40 hover:text-white hover:underline transition-colors underline-offset-4">
                        Documentation
                    </a>
                    <a href="#" className="text-xs text-white/40 hover:text-white hover:underline transition-colors underline-offset-4">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-xs text-white/40 hover:text-white hover:underline transition-colors underline-offset-4">
                        Support
                    </a>
                </nav>
            </div>
        </footer>
    );
}
