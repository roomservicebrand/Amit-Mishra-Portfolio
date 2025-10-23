import React from 'react';
import RevenueChart from './RevenueChart';

const AchievementCard: React.FC<{ icon: string; title: string; description: string; iconColor: string }> = ({ icon, title, description, iconColor }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center">
        <i className={`${icon} ${iconColor} text-3xl mr-4`}></i>
        <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    </div>
);

interface AchievementsProps {
    theme: string;
}

const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
    return (
        <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Proven Results</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Exceptional performance metrics that drive organizational success.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                            <RevenueChart theme={theme} />
                        </div>
                    </div>
                    <div className="space-y-8" data-aos="fade-left">
                       <AchievementCard icon="fas fa-trophy" title="Employee of the Year 2023" description="Recognized for outstanding leadership and performance." iconColor="text-yellow-500"/>
                       <AchievementCard icon="fas fa-medal" title="4x Employee of the Month" description="Consistent recognition for exceptional contributions." iconColor="text-gray-500"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;