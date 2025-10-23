
import React, { useEffect, useRef } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface LightboxProps {
    images: string[];
    selectedIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    triggerRef: React.RefObject<HTMLButtonElement>;
}

const Lightbox: React.FC<LightboxProps> = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
    const lightboxRef = useRef<HTMLDivElement>(null);
    useFocusTrap(lightboxRef, true); // It's always active when rendered

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div
            ref={lightboxRef}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
        >
            <button
                className="absolute top-4 right-6 text-white text-5xl font-light hover:opacity-80 transition-opacity"
                onClick={onClose}
                aria-label="Close gallery"
            >
                &times;
            </button>
            <button
                className="absolute left-4 md:left-8 text-white text-4xl p-2 rounded-full bg-black bg-opacity-40 hover:bg-opacity-70 transition-all"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
            >
                &#x2190;
            </button>
            <img
                src={images[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}`}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
            />
            <button
                className="absolute right-4 md:right-8 text-white text-4xl p-2 rounded-full bg-black bg-opacity-40 hover:bg-opacity-70 transition-all"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
            >
                &#x2192;
            </button>
        </div>
    );
};

export default Lightbox;