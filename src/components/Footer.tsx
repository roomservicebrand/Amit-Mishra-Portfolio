
import React from 'react';

const SocialLink: React.FC<{ href: string; icon: string; }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
        <i className={`${icon} text-2xl`}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
                <div className="mb-4 flex justify-center space-x-6">
                    <SocialLink href="https://www.linkedin.com/in/amitmishraclear" icon="fab fa-linkedin" />
                    <SocialLink href="https://profile.indeed.com/p/amitm-s49k846" icon="fas fa-briefcase" />
                    <SocialLink href="https://www.roomservicebranding.com" icon="fas fa-globe" />
                    <SocialLink href="https://roomservicebranding.medium.com" icon="fab fa-medium" />
                </div>
                <p>&copy; {new Date().getFullYear()} Amit Mishra. All Rights Reserved.</p>
                <p className="text-sm mt-2">Built to innovate. Designed for impact.</p>
                <p className="text-xs mt-4 text-gray-400 dark:text-gray-500">
                    Powered by <a href="https://ai.google.dev/gemini-api" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 underline">Google Gemini</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;