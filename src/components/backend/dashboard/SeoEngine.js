"use client";
import React, { useState } from "react";
import { LuGlobe, LuX } from "react-icons/lu";
import { Input } from "@/components/backend/ui";

/**
 * Encapsulated SEO & Keywords configuration engine for administrative panels.
 * Manages all internal meta state, keyword arrays, and tag creation logic natively.
 * 
 * @param {Object} data Current SEO metadata object containing { title, description, keywords }
 * @param {Function} onChange Callback fired with the updated SEO object when fields change
 * @param {String} title Label displayed on the heading card
 */
export default function SeoEngine({ 
    data = { title: "", description: "", keywords: [] }, 
    onChange,
    title = "Search Engine Optimization (SEO)"
}) {
    const [currentKeyword, setCurrentKeyword] = useState("");

    // Safe nested state update forwarder
    const handleFieldChange = (field, value) => {
        if (onChange) {
            onChange({
                ...data,
                [field]: value
            });
        }
    };

    const addKeyword = (e) => {
        if (e.key === 'Enter' && currentKeyword.trim()) {
            e.preventDefault();
            const keywordToAdd = currentKeyword.trim();
            const existingKeywords = data.keywords || [];

            if (!existingKeywords.includes(keywordToAdd)) {
                handleFieldChange("keywords", [...existingKeywords, keywordToAdd]);
            }
            setCurrentKeyword("");
        }
    };

    const removeKeyword = (kw) => {
        const existingKeywords = data.keywords || [];
        handleFieldChange("keywords", existingKeywords.filter(k => k !== kw));
    };

    return (
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 transition-all">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <LuGlobe size={12} className="text-emerald-400" /> {title}
                </h3>
                <span className="text-[9px] font-mono text-white/20 bg-emerald-500/5 border border-emerald-500/10 px-1.5 py-0.5 rounded">
                    Indexing Metadata
                </span>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* META TITLE */}
                    <div className="space-y-1.5">
                        <label className="text-[9px] text-white/30 font-mono uppercase tracking-wider font-medium">
                            SEO Title
                        </label>
                        <Input
                            value={data.title || ""}
                            onChange={(e) => handleFieldChange("title", e.target.value)}
                            placeholder="Search engine headline..."
                            className="bg-white/[0.01] border-white/5 h-8 text-xs focus:border-emerald-500/30 text-white"
                        />
                    </div>

                    {/* META DESCRIPTION */}
                    <div className="space-y-1.5">
                        <label className="text-[9px] text-white/30 font-mono uppercase tracking-wider font-medium">
                            SEO Description
                        </label>
                        <textarea
                            rows={1}
                            value={data.description || ""}
                            onChange={(e) => handleFieldChange("description", e.target.value)}
                            placeholder="Search results snippet..."
                            className="w-full bg-white/[0.01] border border-white/5 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/30 h-8 resize-none overflow-hidden"
                        />
                    </div>
                </div>

                {/* DYNAMIC KEYWORDS COMPACT GRID */}
                <div className="space-y-2">
                    <label className="text-[9px] text-white/30 font-mono uppercase tracking-wider font-medium">
                        Keywords
                    </label>
                    <div className="flex flex-wrap items-center gap-1.5 min-h-[32px] p-1.5 bg-white/[0.01] border border-white/5 rounded-lg focus-within:border-emerald-500/20 transition-colors">
                        {(data.keywords || []).map(kw => (
                            <span key={kw} className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium rounded flex-shrink-0">
                                {kw}
                                <button 
                                    type="button" 
                                    onClick={() => removeKeyword(kw)} 
                                    className="hover:text-white transition-colors flex items-center"
                                >
                                    <LuX size={8} />
                                </button>
                            </span>
                        ))}
                        <input
                            value={currentKeyword}
                            onChange={(e) => setCurrentKeyword(e.target.value)}
                            onKeyDown={addKeyword}
                            placeholder={(data.keywords || []).length === 0 ? "Type keyword & press Enter..." : "Add next..."}
                            className="flex-1 bg-transparent border-none outline-none text-xs text-white placeholder:text-white/20 px-1 min-w-[100px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
