import React from "react";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "./Modal";
import { Button } from "./Button";
import { LuCircleCheck, LuX } from "react-icons/lu";

export function ActionModal({ open, onOpenChange, title, description, children, icon: Icon, iconColor = "text-emerald-400", saveText = "Confirm", cancelText = "Cancel", onSave, size = "max-w-md", isSubmitting = false }) {
    return (
        <Modal open={open} onOpenChange={onOpenChange}>
            <ModalContent className={size}>
                <ModalHeader>
                    <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center ${iconColor} border border-white/5 shadow-md`}>
                            {Icon ? <Icon size={20} /> : <LuCircleCheck size={20} />}
                        </div>
                        <div>
                            <ModalTitle>{title}</ModalTitle>
                            <ModalDescription>{description}</ModalDescription>
                        </div>
                    </div>
                </ModalHeader>
                <div className="px-6 py-2">
                    {children}
                </div>
                <ModalFooter>
                    <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={isSubmitting} className="hover:bg-white/5 hover:text-white">{cancelText}</Button>
                    <Button onClick={onSave} disabled={isSubmitting} className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg hover:opacity-90 transition-opacity font-medium gap-2">
                        {isSubmitting ? (
                            <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        ) : (
                            <LuCircleCheck size={16} />
                        )}
                        {isSubmitting ? "Processing..." : saveText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
