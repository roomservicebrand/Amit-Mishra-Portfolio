import React from 'react';

const SkeletonBar: React.FC<{ width: string; height?: string }> = ({ width, height = 'h-4' }) => (
    <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${width} ${height}`}></div>
);

const ArticleSkeleton: React.FC = () => {
    return (
        <div className="space-y-6 p-6">
            <SkeletonBar width="w-3/4" height="h-8" />
            <div className="space-y-3">
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-5/6" />
            </div>
            <div className="space-y-3">
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-11/12" />
            </div>
            <div className="space-y-3">
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-2/3" />
            </div>
        </div>
    );
};

export default ArticleSkeleton;
