
import React from 'react';

const ExpertiseCard: React.FC<{icon: string; title: string; delay: number; iconColor: string;}> = ({icon, title, delay, iconColor}) => (
    <div className="text-center" data-aos="zoom-in" data-aos-delay={delay}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-full transition-shadow hover:shadow-lg">
            <i className={`${icon} text-5xl mb-4 ${iconColor}`}></i>
            <h3 className="font-bold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
    </div>
);

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Core Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">A comprehensive skill set driving organizational success.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                   <ExpertiseCard icon="fas fa-handshake" title="Business Development" delay={0} iconColor="text-blue-500" />
                   <ExpertiseCard icon="fas fa-file-invoice-dollar" title="Utilization Review" delay={100} iconColor="text-teal-500" />
                   <ExpertiseCard icon="fas fa-dollar-sign" title="Financial Negotiations" delay={200} iconColor="text-blue-500" />
                   <ExpertiseCard icon="fas fa-network-wired" title="Referral Networks" delay={300} iconColor="text-teal-500" />
                </div>
            </div>
        </section>
    );
};

export default Expertise;