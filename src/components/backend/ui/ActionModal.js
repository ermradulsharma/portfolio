import React from "react";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "./Modal";
import { Button } from "./Button";
import { CheckCircle2, X } from "lucide-react";

export function ActionModal({ open, onOpenChange, title, description, children, icon: Icon, iconColor = "text-emerald-400", onSave, saveText = "Save Changes", cancelText = "Cancel", isSubmitting = false, size = "max-w-lg", className = "" }) {
    return (
        <Modal open={open} onOpenChange={onOpenChange}>
            <ModalContent className={`${size} ${className}`}>
                <ModalHeader>
                    <ModalTitle className="flex items-center gap-2">{Icon && <Icon size={18} className={iconColor} />} {title} </ModalTitle>
                    {description && <ModalDescription className="mt-1">{description}</ModalDescription>}
                </ModalHeader>
                <div className="my-6">{children}</div>
                <ModalFooter>
                    <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={isSubmitting}>{cancelText}</Button>
                    <Button variant="premium" className="gap-2" onClick={onSave} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        ) : (
                            <CheckCircle2 size={16} />
                        )}
                        {isSubmitting ? "Processing..." : saveText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
