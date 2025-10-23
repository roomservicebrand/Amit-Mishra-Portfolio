import React from 'react';

const SkeletonCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col animate-pulse">
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
            <div className="space-y-2 flex-grow">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
            <div className="mt-6">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
        </div>
    </div>
);

const BlogSkeleton: React.FC = () => {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    );
};

export default BlogSkeleton;
