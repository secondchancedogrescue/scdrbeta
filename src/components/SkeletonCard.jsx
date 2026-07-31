import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({ className = '' }) => {
    return (
        <SkeletonTheme baseColor='#d8e2ff' highlightColor='#ffffcc' duration={1.8}>
            <div className="tw-h-[428px] tw-w-[300px] tw-mx-auto tw-relative">
                <div className='tw-w-[300px] tw-h-full'>
                    <Skeleton height='100%' />
                </div>

                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-3 tw-bg-white/90">
                    <Skeleton width={140} height={28} />
                    <Skeleton width={70} />
                    <Skeleton width={120} />
                    <Skeleton width={90} />
                    <Skeleton width={120} height={36} borderRadius={9999} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default SkeletonCard