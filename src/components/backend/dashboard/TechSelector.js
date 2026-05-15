"use client";
import React from "react";
import { LuBoxes, LuCheck } from "react-icons/lu";
import { Image } from "@/components/backend/ui";

/**
 * Reusable interactive Technology Selection Grid with Devicon asset loaders and validation workflows.
 * 
 * @param {String} selectedCategory The parent category bound to this selection flow
 * @param {Array} availableTechs Raw array of taxonomy tech documents fetched from current category
 * @param {Array} selectedTechs Current array of checked Technology IDs
 * @param {Function} onToggle Event fire hook carrying target techId toggle
 */
export default function TechSelector({ selectedCategory = null, availableTechs = [], selectedTechs = [], onToggle }) {
    return (
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-4 bg-white/[0.02] border-b border-white/5 flex items-center gap-2">
                <LuBoxes size={16} className="text-cyan-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Technologies</h3>
            </div>
            <div className="p-4 min-h-[100px]">
                {!selectedCategory ? (
                    <p className="text-[10px] italic text-white/30 text-center py-4">Select a category to load technologies.</p>
                ) : availableTechs.length === 0 ? (
                    <p className="text-[10px] italic text-white/30 text-center py-4">No technologies found in this category.</p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {availableTechs.map(tech => {
                            const isSelected = (selectedTechs || []).includes(tech._id);
                            return (
                                <button key={tech._id} type="button" onClick={() => onToggle && onToggle(tech._id)} className={`flex items-center gap-2 px-2 py-1.5 rounded-md border text-[10px] transition-all ${isSelected ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-white/[0.01] border-white/5 text-white/50 hover:border-cyan-500/20'}`}>
                                    {tech.icon && (
                                        <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon.toLowerCase()}/${tech.icon.toLowerCase()}-original.svg`} fallbackSrc={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon.toLowerCase()}/${tech.icon.toLowerCase()}-plain.svg`} alt={tech.name} containerClassName="h-3.5 w-3.5 p-0 bg-transparent border-0 shadow-none" />
                                    )}
                                    <span>{tech.name}</span>
                                    {isSelected && <LuCheck size={10} className="ml-0.5 text-cyan-400" />}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
