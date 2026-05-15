"use client";
import React from "react";

/**
 * Reusable atomic block for core content parameters (Title, URL Slug, and Description) 
 * with adaptive split-grid layout for Slug synchronization.
 * 
 * @param {String} title Current title string value
 * @param {String} slug Current SEO slug string value 
 * @param {String} description Brief content summary
 * @param {Function} onTitleChange Callback fired with updated raw title text
 * @param {Function} onSlugChange Callback fired when manually customizing slug
 * @param {Function} onDescriptionChange Callback fired with new description value
 * @param {Boolean} showSlug Flag to toggle slug entry visibility
 */
export default function BasicDetails({
    title = "",
    slug = "",
    description = "",
    onTitleChange,
    onSlugChange,
    onDescriptionChange,
    showSlug = true
}) {
    return (
        <div className="group bg-white/[0.02] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-xl p-5 backdrop-blur-xl shadow-2xl transition-all duration-500 space-y-4">
            
            {/* TITLE & ADAPTIVE SLUG DUAL INPUT PORTALS */}
            <div className={`grid grid-cols-1 ${showSlug ? 'md:grid-cols-2 gap-4' : 'gap-4'}`}>
                <div className="space-y-1">
                    <label className="text-[9px] text-white/20 font-mono uppercase tracking-wider font-medium">
                        Title
                    </label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => onTitleChange && onTitleChange(e.target.value)} 
                        placeholder="Enter content title..." 
                        className="w-full bg-transparent text-lg font-semibold text-white placeholder:text-white/10 focus:outline-none transition-all" 
                    />
                </div>

                {showSlug && (
                    <div className="space-y-1 md:border-l md:border-white/5 md:pl-4 flex flex-col justify-center">
                        <label className="text-[9px] text-white/20 font-mono uppercase tracking-wider font-medium">
                            Slug
                        </label>
                        <input 
                            type="text" 
                            value={slug} 
                            onChange={(e) => onSlugChange && onSlugChange(e.target.value)} 
                            placeholder="auto-generated-slug..." 
                            className="w-full bg-transparent text-base font-mono text-white/60 placeholder:text-white/10 focus:outline-none transition-all mt-0.5" 
                        />
                    </div>
                )}
            </div>

            <div className="h-[1px] bg-gradient-to-r from-white/5 via-white/[0.02] to-transparent"></div>

            {/* CORE BRIEF DESCRIPTION ENGINE */}
            <div className="space-y-1">
                <label className="text-[9px] text-white/20 font-mono uppercase tracking-wider font-medium">
                    Description
                </label>
                <textarea 
                    placeholder="Enter brief description or summary..." 
                    value={description} 
                    onChange={(e) => onDescriptionChange && onDescriptionChange(e.target.value)} 
                    className="w-full bg-transparent text-white/50 placeholder:text-white/10 focus:outline-none resize-none min-h-[50px] text-sm leading-relaxed scrollbar-none" 
                />
            </div>
        </div>
    );
}
