import React from 'react';

const AboutCard: React.FC<{ icon: string; title: string; children: React.ReactNode; delay: number; iconColor: string; }> = ({ icon, title, children, delay, iconColor }) => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay={delay}>
        <i className={`${icon} ${iconColor} text-4xl mb-4`}></i>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
);


const About: React.FC = () => {
    return (
        <section id="about" className="py-20 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">About Me</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A results-driven healthcare executive with a proven track record of transforming behavioral health organizations through strategic business development and operational excellence.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <AboutCard icon="fas fa-brain" title="Behavioral Health Specialist" delay={100} iconColor="text-blue-500">
                        8+ years of dedicated experience, from direct client care to executive leadership, with a deep understanding of treatment modalities and recovery principles.
                    </AboutCard>
                    <AboutCard icon="fas fa-gem" title="High-Net-Worth Expertise" delay={200} iconColor="text-teal-500">
                        Mastery in navigating complex financial arrangements for affluent clients, specializing in private-pay models and out-of-network benefits.
                    </AboutCard>
                    <AboutCard icon="fas fa-chart-line" title="Revenue Growth Expert" delay={300} iconColor="text-blue-500">
                        Consistently delivered record-breaking financial performance, generating over $700,000 in monthly revenue across 8 consecutive fiscal quarters.
                    </AboutCard>
                </div>
            </div>
        </section>
    );
};

export default About;