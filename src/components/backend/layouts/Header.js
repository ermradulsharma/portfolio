import { LuSearch, LuBell } from "react-icons/lu";

export default function Header() {
  return (
    <header className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-[#0f1015] border-b border-white/5 px-6 flex items-center justify-between sticky top-0 z-10 h-[70px]">
      <div className="flex items-center gap-8 flex-1">
        <h2 className="text-sm font-semibold text-white/80 hidden sm:block whitespace-nowrap">
            Welcome back, <span className="text-white font-bold">Commander</span>
        </h2>
        
        {/* Sleek Neumorphic Sunken Search */}
        <div className="relative max-w-md w-full group">
          <LuSearch size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-cyan-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search metrics, projects or records..." 
            className="w-full neu-inset rounded-2xl py-2 pl-10 pr-4 outline-none text-xs transition-all placeholder:text-white/20 text-white border border-white/5 focus:border-cyan-500/40" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2.5 neu-button text-white/70 hover:text-cyan-400 rounded-2xl transition-colors border border-white/5">
          <LuBell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_#f43f5e]"></span>
        </button>
        
        <div className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium neu-inset text-cyan-400 border border-cyan-500/20 hidden md:block">
          System: Active
        </div>
        
        <div className="w-10 h-10 rounded-2xl neu-raised p-0.5 border border-purple-500/30 cursor-pointer hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center font-bold text-xs text-white shadow-inner">
                A
            </div>
        </div>
      </div>
    </header>
  );
}
