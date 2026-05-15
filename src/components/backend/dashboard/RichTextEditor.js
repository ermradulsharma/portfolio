"use client";
import React from "react";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// Safe, asynchronous dynamic registration of browser-only RichText components
const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill-new");
        const { default: BlotFormatter } = await import("quill-blot-formatter");
        RQ.Quill.register('modules/blotFormatter', BlotFormatter);
        return RQ;
    },
    {
        ssr: false,
        loading: () => (
            <div className="p-8 min-h-[300px] flex items-center justify-center text-white/20 animate-pulse font-mono text-xs tracking-widest border border-white/5 rounded-xl bg-white/[0.01]">
                [LOADING EDITOR MODULE...]
            </div>
        )
    }
);

const quillModules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'code-block'],
        ['clean']
    ],
    blotFormatter: {}
};

/**
 * Reusable Premium HTML Editor component wrapping ReactQuill and BlotFormatter with dynamic SSR disabling.
 * 
 * @param {String} value The HTML string state
 * @param {Function} onChange Callback with the updated HTML content
 * @param {String} placeholder Input helper string when blank
 * @param {String} title Big uppercase title label
 * @param {String} subTitle Small font-mono subtitle tag
 */
export default function RichTextEditor({
    value = "",
    onChange,
    placeholder = "Write content here...",
    title = "Editor",
    subTitle = "HTML Enabled"
}) {
    return (
        <div className="relative bg-white/[0.02] border border-white/5 hover:border-pink-500/10 rounded-xl overflow-hidden flex flex-col shadow-2xl min-h-[420px] transition-all duration-500 group">
            <div className="px-5 py-3 bg-white/[0.02] border-b border-white/5 flex items-center justify-between backdrop-blur-md">
                <h3 className="text-[10px] text-white/40 font-bold uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></div> {title} </h3>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest"> {subTitle}</span>
            </div>
            <div className="flex-1 flex flex-col quill-editor-modern [&_.ql-toolbar]:bg-white/[0.02] [&_.ql-toolbar]:!border-none [&_.ql-container]:!border-none [&_.ql-container]:flex-1 [&_.ql-editor]:text-white/80 [&_.ql-editor]:text-base [&_.ql-editor.ql-blank::before]:text-white/10 [&_.ql-stroke]:stroke-white/40 [&_.ql-fill]:fill-white/40 [&_.ql-picker]:text-white/40 [&_.ql-picker-options]:bg-zinc-900 [&_.ql-picker-options]:border-white/10">
                <ReactQuill theme="snow" value={value} onChange={onChange} modules={quillModules} placeholder={placeholder} className="h-full flex-1 flex flex-col min-h-[360px]" />
            </div>
        </div>
    );
}
