import React, { useState, useCallback, useRef, lazy, Suspense } from 'react';
import { draftEmail } from '../services/geminiService';
import Spinner from './Spinner';
const EmailModal = lazy(() => import('./EmailModal'));

const Contact: React.FC = () => {
    const [recruiterName, setRecruiterName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [outreachPurpose, setOutreachPurpose] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedEmail, setGeneratedEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const draftButtonRef = useRef<HTMLButtonElement>(null);
    
    const handleDraftEmail = useCallback(async () => {
        setError(null);
        if (!recruiterName || !outreachPurpose) {
            setError('Please fill out Your Name and Purpose of Message.');
            return;
        }

        setIsLoading(true);
        try {
            const result = await draftEmail(recruiterName, companyName, outreachPurpose);
            setGeneratedEmail(result);
            setIsModalOpen(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [recruiterName, companyName, outreachPurpose]);


    return (
        <>
            <section id="contact" className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Let's Build the Future</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">I am currently seeking new opportunities to drive growth and innovation. If you're looking for a dedicated partner to elevate your organization, let's connect.</p>
                    
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-2xl mx-auto text-left">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 text-center">AI-Assisted Outreach</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">Let Gemini help you draft a personalized connection request.</p>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="recruiterName" className="font-semibold text-gray-700 dark:text-gray-300">Your Name</label>
                                <input type="text" id="recruiterName" value={recruiterName} onChange={(e) => setRecruiterName(e.target.value)} className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" placeholder="e.g., Jane Doe" />
                            </div>
                            <div>
                                <label htmlFor="companyName" className="font-semibold text-gray-700 dark:text-gray-300">Your Company (Optional)</label>
                                <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" placeholder="e.g., Innovate Health Corp" />
                            </div>
                            <div>
                                <label htmlFor="outreachPurpose" className="font-semibold text-gray-700 dark:text-gray-300">Purpose of Your Message</label>
                                <input type="text" id="outreachPurpose" value={outreachPurpose} onChange={(e) => setOutreachPurpose(e.target.value)} className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" placeholder="e.g., Partnership opportunity, speaking engagement..." />
                            </div>
                        </div>
                        <button ref={draftButtonRef} id="draft-email-btn" onClick={handleDraftEmail} disabled={isLoading} className="bg-blue-600 w-full mt-6 text-white py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 disabled:bg-gray-400 transition-colors">
                           {isLoading ? <Spinner /> : '✨'}
                           {isLoading ? 'Drafting...' : 'Draft Connection Email'}
                        </button>
                         {error && <div className="text-red-500 text-center mt-4">{error}</div>}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 my-8">Or, reach out directly:</p>

                    <a href="mailto:Amitmishra@consultant.com" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-center text-lg inline-block hover:bg-blue-700 transition-colors">
                        Amitmishra@consultant.com
                    </a>
                </div>
            </section>
            <Suspense fallback={null}>
                <EmailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    emailContent={generatedEmail}
                    triggerRef={draftButtonRef}
                />
            </Suspense>
        </>
    );
};

export default Contact;
