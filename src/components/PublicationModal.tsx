
import React, { useEffect, useRef } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface Publication {
    logo: string;
    publicationName: string;
    description: string;
    link: string;
    thumbnail: string;
}

interface PublicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    publication: Publication | null;
    content: string;
    triggerRef: React.RefObject<HTMLButtonElement>;
}

const PublicationModal: React.FC<PublicationModalProps> = ({ isOpen, onClose, publication, content, triggerRef }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useFocusTrap(modalRef, isOpen);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleClose = () => {
        onClose();
        triggerRef.current?.focus();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
            id="publication-modal"
            ref={modalRef}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="publication-modal-title"
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl h-[90vh] max-h-[800px] m-4 flex flex-col animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        {publication && (
                            <>
                                <div className="flex-shrink-0 bg-white h-10 w-10 rounded-full flex items-center justify-center p-1 shadow-sm">
                                    <img className="max-h-full max-w-full object-contain" src={publication.logo} alt={`${publication.publicationName} logo`} />
                                </div>
                                <h3 id="publication-modal-title" className="text-xl font-bold text-gray-800 dark:text-white">
                                    {publication.publicationName}
                                </h3>
                            </>
                        )}
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl font-light focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Close modal"
                    >&times;</button>
                </header>
                <main className="flex-grow overflow-y-auto">
                    <article className="p-6" dangerouslySetInnerHTML={{ __html: content }} />
                </main>
            </div>
        </div>
    );
};

export default PublicationModal;