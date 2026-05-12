export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 py-12 bg-slate-50 text-center text-slate-500 text-sm font-medium">
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}