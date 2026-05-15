"use client";
import React from "react";
import NextImage from "next/image";
import { LuImage as LuImageIcon, LuPlus, LuX } from "react-icons/lu";

/**
 * Highly polished, decoupled Image Gallery component for Admin Forms.
 * 
 * @param {Array} files Array of raw file objects or image metadata
 * @param {Array} previews Array of local blob preview URLs or existing CDN image URLs
 * @param {Function} onUpload Callback triggered when new files are selected
 * @param {Function} onRemove Callback triggered to delete an image at a specific index
 * @param {String} title The label for the gallery heading
 */
export default function ImageGallery({ 
    files = [], 
    previews = [], 
    onUpload, 
    onRemove,
    title = "Image Gallery"
}) {
    
    const handleInputChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length && onUpload) {
            onUpload(selectedFiles);
        }
        // Clear the target value so same file can be uploaded again if deleted
        e.target.value = null;
    };

    return (
        <div className="bg-white/[0.02] hover:bg-white/[0.03] border border-white/5 rounded-xl p-5 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <LuImageIcon size={12} className="text-pink-500" /> {title}
                </h3>
                <span className="text-[9px] text-white/20 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                    {previews.length} Images Selected
                </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-3">
                {/* UPLOAD CONTAINER PORTAL */}
                <label className="aspect-square bg-white/[0.01] hover:bg-white/[0.04] border border-dashed border-white/10 hover:border-pink-500/30 rounded-xl flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all group">
                    <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={handleInputChange} 
                        className="hidden" 
                    />
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-pink-500 transition-all border border-white/5 group-hover:border-pink-500/20">
                        <LuPlus size={16} />
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/50">
                        Upload
                    </span>
                </label>

                {/* RENDER STACK OF SELECTED ASSETS */}
                {previews.map((preview, idx) => {
                    const fileName = files[idx]?.name || (typeof preview === "string" && !preview.startsWith("blob:") ? preview.substring(preview.lastIndexOf("/") + 1) : `Asset-${idx}`);
                    return (
                        <div key={idx} className="aspect-square rounded-xl border border-white/5 overflow-hidden relative group shadow-lg hover:border-pink-500/30 transition-all">
                            <NextImage 
                                src={preview} 
                                fill 
                                unoptimized 
                                alt={`Gallery preview ${idx}`} 
                                className="object-cover transition-all duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                <p className="text-[8px] text-white/50 font-mono truncate leading-none w-full">
                                    {fileName}
                                </p>
                            </div>
                            <button 
                                type="button" 
                                onClick={() => onRemove(idx)} 
                                className="absolute top-1.5 right-1.5 h-5 w-5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all shadow-md z-10"
                            >
                                <LuX size={10} />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
