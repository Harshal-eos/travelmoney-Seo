"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface TypeformPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const TypeformPopup: React.FC<TypeformPopupProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            // Prevent body scroll when popup is open
            document.body.style.overflow = "hidden";
        } else {
            // Restore body scroll when popup is closed
            document.body.style.overflow = "unset";
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop - Completely blocks background */}
            <div
                className="absolute inset-0 bg-white"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Centered Popup Container */}
            <div className="relative w-[90vw] max-w-5xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden mx-4 my-8 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Join TravelMoney Waitlist
                    </h2>
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 p-0 hover:bg-gray-100 rounded-full"
                        aria-label="Close popup"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Typeform Embed */}
                <div className="h-[calc(100%-5rem)] bg-white">
                    <iframe
                        src="https://form.typeform.com/to/UwKy0ccS"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="TravelMoney Waitlist Form"
                        className="border-0"
                        allow="camera; microphone; autoplay; encrypted-media; fullscreen"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TypeformPopup;
