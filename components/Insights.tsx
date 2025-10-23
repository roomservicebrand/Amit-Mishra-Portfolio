import React, { useState, useCallback } from 'react';
import { generateInsights } from '../services/geminiService';
import Spinner from './Spinner';
import InsightsSkeleton from './InsightsSkeleton';

const Insights: React.FC = () => {
    const [insights, setInsights] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);

    const handleGenerateInsights = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setShowResult(true);
        setInsights('');
        try {
            const result = await generateInsights();
            setInsights(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, []);


    return (
        <section id="insights" className="py-20 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Future of Healthcare</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">Staying ahead of the curve is critical. Click below to generate real-time insights on the latest trends in behavioral healthcare, powered by Gemini.</p>
                <button
                    id="generate-insights-btn"
                    onClick={handleGenerateInsights}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-center text-lg inline-flex items-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {isLoading ? <Spinner /> : '✨'}
                    {isLoading ? 'Generating...' : 'Generate Industry Insights'}
                </button>
                {showResult && (
                    <div className="mt-8 text-left bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 min-h-[250px]">
                        {isLoading && <InsightsSkeleton />}
                        {!isLoading && insights && (
                             <div className="text-gray-700 dark:text-gray-300 space-y-4" dangerouslySetInnerHTML={{ __html: insights }} />
                        )}
                        {!isLoading && error && (
                            <div className="text-red-500 text-center">{error}</div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Insights;
