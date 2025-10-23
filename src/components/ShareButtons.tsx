
import React from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<{ href: string; icon: string; label: string; }> = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`Share ${label}`}
        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
    >
        <i className={`${icon} text-lg`}></i>
    </a>
);


const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
        email: `mailto:?subject=${encodedTitle}&body=Check%20out%20this%20article:%20${encodedUrl}`,
        sms: `sms:?&body=${encodedTitle}%20${encodedUrl}`
    };

    return (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Share this article:</p>
                <div className="flex items-center space-x-4">
                    <ShareButton href={shareLinks.twitter} icon="fab fa-twitter" label="on Twitter" />
                    <ShareButton href={shareLinks.linkedin} icon="fab fa-linkedin" label="on LinkedIn" />
                    <ShareButton href={shareLinks.email} icon="fas fa-envelope" label="via Email" />
                    <ShareButton href={shareLinks.sms} icon="fas fa-comment-dots" label="via Text Message" />
                </div>
            </div>
        </div>
    );
};

export default ShareButtons;