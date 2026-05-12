export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 py-4 px-6 flex items-center justify-between bg-white/70 backdrop-blur-lg sticky top-0 z-50">
      <div className="text-2xl font-bold text-slate-900 tracking-tighter">WEBSITE</div>
      <nav className="hidden md:flex gap-8">
        <a href="#" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Home</a>
        <a href="#" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Features</a>
        <a href="#" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Pricing</a>
      </nav>
      <a href="/login" className="px-5 py-2 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-sm transition-all">
        Go to App
      </a>
    </header>
  );
}