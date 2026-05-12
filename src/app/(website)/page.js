export default function LandingPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto relative z-10 py-20">
        {/* Soft Ambient Glow background refined for Light Mode */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/50 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-100/60 rounded-full blur-[80px] -z-10" />

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
          Build Next-Gen <br />
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-transparent bg-clip-text">Dashboard UI</span>
        </h1>

        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Unlock unprecedented insights and power with our state-of-the-art management platform. Zero bloat, maximum performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/login"
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all"
          >
            Launch Admin Console
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-slate-200 bg-white text-slate-700 rounded-full font-semibold text-lg hover:bg-slate-50 shadow-sm transition-all"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
