import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-black/70 backdrop-blur-md border-b border-white/10 px-6 flex items-center justify-between sticky top-0 z-10 h-[70px]">
      <div className="flex items-center gap-8 flex-1">
        <h2 className="text-lg font-medium hidden sm:block whitespace-nowrap">Welcome back, Commander</h2>
        
        {/* Sleek Global Search */}
        <div className="relative max-w-md w-full group">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-cyan-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search metrics or records..." 
            className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-cyan-500/50 rounded-lg py-2 pl-10 pr-4 outline-none text-sm transition-all placeholder:text-white/30 text-white focus:ring-1 focus:ring-cyan-500/20" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-black"></span>
        </button>
        
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hidden md:block">
          System: Active
        </div>
        
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-600/20 cursor-pointer border-2 border-white/10 hover:scale-105 transition-transform duration-300"></div>
      </div>
    </header>
  );
}

