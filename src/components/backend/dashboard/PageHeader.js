"use client";
import React from "react";
import Link from "next/link";
import { LuArrowLeft, LuSave } from "react-icons/lu";
import { Button } from "@/components/backend/ui";

/**
 * Universal Dashboard Form & Action Header component.
 * Wraps Breadcrumb paths, Page Titles, and Save/Discard triggers consistently.
 * 
 * @param {String} title Master title of the screen
 * @param {React.ReactNode} icon React-icon element representing the page theme
 * @param {Array} breadcrumbs Array of { label, href } navigation blocks
 * @param {String} activeBreadcrumb Terminal active path name string
 * @param {String} discardHref Path route to go back to on discard
 * @param {Function} onSave Action callback fired on primary button save click
 * @param {Boolean} loading Active lock state for primary action
 * @param {String} saveText Custom label for the active save action
 * @param {String} loadingText Custom label when processing primary action
 */
export default function PageHeader({ title = "", icon = null, breadcrumbs = [], activeBreadcrumb = "", discardHref = "#", onSave, loading = false, saveText = "Save Changes", loadingText = "Saving..." }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6">
            {/* TITLE & HIERARCHY METADATA */}
            <div>
                <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest mb-1">
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <Link href={crumb.href} className="hover:text-white transition-colors flex items-center gap-1">
                                {index === 0 && <LuArrowLeft size={12} />}
                                {crumb.label}
                            </Link>
                            <span>/</span>
                        </React.Fragment>
                    ))}
                    {activeBreadcrumb && (
                        <span className="text-pink-400">{activeBreadcrumb}</span>
                    )}
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                    {icon && React.cloneElement(icon, {
                        size: 24,
                        className: "text-pink-400"
                    })}
                    {title}
                </h1>
            </div>

            {/* PRIMARY ACTION PORTALS */}
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <Link href={discardHref}>
                    <Button variant="ghost" size="sm">
                        Discard
                    </Button>
                </Link>
                <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg transition-all"
                    onClick={onSave}
                    disabled={loading}
                >
                    <LuSave size={16} className="mr-2" />
                    {loading ? loadingText : saveText}
                </Button>
            </div>
        </div>
    );
}
