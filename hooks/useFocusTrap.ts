import React, { useEffect, useRef } from 'react';

export const useFocusTrap = (
    ref: React.RefObject<HTMLElement>, 
    active: boolean
) => {
    const previousFocus = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (active && ref.current) {
            previousFocus.current = document.activeElement as HTMLElement;

            const focusableElements = ref.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            // Wait for modal to be fully visible before focusing
            setTimeout(() => firstElement.focus(), 100);

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key !== 'Tab') return;

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            };

            const element = ref.current;
            element.addEventListener('keydown', handleKeyDown);

            return () => {
                element.removeEventListener('keydown', handleKeyDown);
                previousFocus.current?.focus();
            };
        }
    }, [active, ref]);
};
