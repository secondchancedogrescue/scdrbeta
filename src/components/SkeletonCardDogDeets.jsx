import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCardDogDeets = () => {
  return (
    <SkeletonTheme baseColor='#d8e2ff' highlightColor='#ffffcc' duration={1.8}>
      <div className='desktop-deets'>
        {/* Mobile */}
        <div className='sm:tw-hidden tw-mt-24 tw-text-center'>
          <Skeleton width={340} height={428} />
        </div>

        {/* Desktop */}
        <div className='tw-hidden desktop-deets-pic'>
          <Skeleton width={300} height={300} />
          <div className='desktop-deets-thumb-pic'>
            <Skeleton width={100} height={100} />
            <Skeleton width={100} height={100} />
            <Skeleton width={100} height={100} />
          </div>
        </div>

        {/* Everything else */}
        <div className='tw-m-4'>
          <Skeleton width={55} height={20} />
          <div className='tw-mt-2'>
            <Skeleton width={200} height={36} />
          </div>
          <div className='tw-mt-1'>
            <Skeleton width='90%' height={18} />
          </div>
        </div>

        <div className='tw-m-4 tw-flex tw-flex-wrap tw-gap-2'>
          <Skeleton width={75} height={30} borderRadius={9999} />
          <Skeleton width={95} height={30} borderRadius={9999} />
          <Skeleton width={65} height={30} borderRadius={9999} />
          <Skeleton width={85} height={30} borderRadius={9999} />
        </div>

        <div className='tw-my-8 tw-mb-4 tw-mx-4'>
          <Skeleton width={180} height={26} />
          <div className='tw-mt-2'>
            <Skeleton width='100%' height={22} />
            <Skeleton width='100%' height={22} />
            <Skeleton width='90%' height={22} />
            <Skeleton width='75%' height={22} />
          </div>
        </div>
      </div>
    </SkeletonTheme>

  )
}

export default SkeletonCardDogDeets