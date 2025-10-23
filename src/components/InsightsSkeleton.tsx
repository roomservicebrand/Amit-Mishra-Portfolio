
import React from 'react';

const SkeletonBar: React.FC<{ width: string; height?: string }> = ({ width, height = 'h-4' }) => (
    <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${width} ${height}`}></div>
);

const InsightsSkeleton: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <SkeletonBar width="w-3/5" height="h-6" />
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-5/6" />
            </div>
            <div className="space-y-3">
                <SkeletonBar width="w-1/2" height="h-6" />
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-full" />
            </div>
            <div className="space-y-3">
                <SkeletonBar width="w-4/6" height="h-6" />
                <SkeletonBar width="w-full" />
                <SkeletonBar width="w-11/12" />
            </div>
        </div>
    );
};

export default InsightsSkeleton;