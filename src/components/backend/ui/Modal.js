"use client";

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/core/Lib/utils"

const ModalContext = React.createContext({
  open: false,
  setOpen: () => {}
});

export function Modal({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <ModalContext.Provider value={{ open, setOpen: onOpenChange }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all animate-in fade-in duration-300" 
          onClick={() => onOpenChange(false)}
        />
        {/* Modal Core Structure */}
        {children}
      </div>
    </ModalContext.Provider>
  );
}

export function ModalContent({ className, children, ...props }) {
  const { setOpen } = React.useContext(ModalContext);

  return (
    <div
      className={cn(
        "relative z-50 w-full max-w-md p-6 overflow-hidden bg-[#111118] border border-white/10 shadow-2xl rounded-3xl animate-in zoom-in-95 duration-200",
        className
      )}
      {...props}
    >
      {children}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-4 top-4 p-1.5 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-white/5 focus:outline-none"
      >
        <X className="h-4 w-4 text-white" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

export function ModalHeader({ className, ...props }) {
  return <div className={cn("flex flex-col space-y-1.5 text-left mb-4", className)} {...props} />;
}

export function ModalTitle({ className, ...props }) {
  return <h2 className={cn("text-xl font-semibold leading-none tracking-tight text-white", className)} {...props} />;
}

export function ModalDescription({ className, ...props }) {
  return <p className={cn("text-sm text-white/60", className)} {...props} />;
}

export function ModalFooter({ className, ...props }) {
  return <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6", className)} {...props} />;
}
