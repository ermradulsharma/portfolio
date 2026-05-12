export default function AboutPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-transparent text-slate-900 py-20 relative overflow-hidden">
      {/* Background subtle element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-b from-slate-100/50 to-transparent -z-10 blur-2xl" />
      
      <div className="text-center max-w-3xl px-6 z-10">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-cyan-50 border border-cyan-100 rounded-full text-cyan-600">
          About Us
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Redefining Enterprise Tools
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
          We are committed to building ultra-premium, efficient, and visually stunning analytical software. 
          This page uses the standalone Website layout, proving that isolation is working perfectly!
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
