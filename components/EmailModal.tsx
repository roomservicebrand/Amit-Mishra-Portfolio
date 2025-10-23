import React, { useState, useEffect, useRef } from 'react';

interface EmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    emailContent: string;
    triggerRef: React.RefObject<HTMLButtonElement>;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose, emailContent, triggerRef }) => {
    const [copySuccess, setCopySuccess] = useState<string>('');
    const closeModalRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen) {
            setCopySuccess('');
            setTimeout(() => closeModalRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
        triggerRef.current?.focus();
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailContent);
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            setCopySuccess('Failed to copy.');
            console.error('Failed to copy text: ', err);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            id="email-modal" 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in"
            onClick={handleClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl p-8 m-4 animate-fade-in-up"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner click
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Your Generated Email</h3>
                    <button 
                        id="close-modal-btn" 
                        ref={closeModalRef}
                        onClick={handleClose} 
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl font-light focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Close modal"
                    >&times;</button>
                </div>
                <textarea id="email-output" className="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 font-mono text-sm" value={emailContent} readOnly></textarea>
                <button id="copy-email-btn" onClick={handleCopy} className="bg-blue-600 w-full text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                    <i className="fas fa-copy"></i> Copy to Clipboard
                </button>
                {copySuccess && <p className="text-green-600 text-center mt-2">{copySuccess}</p>}
            </div>
        </div>
    );
};

export default EmailModal;