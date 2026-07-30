import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ id, pictureThumbnailUrl, name, breedPrimary, sex, ageString, imageClassName = '', buttonClassName = '', onLearnMore }) => {
    return (
        <div className='tw-h-[428px] tw-w-full tw-bg-[#faffff] tw-relative'>
            {pictureThumbnailUrl && (
                <img src={pictureThumbnailUrl} alt="" className={`${imageClassName} tw-w-full tw-h-full tw-object-cover tw-overflow-hidden`} />
            )}
            <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-3 tw-flex tw-flex-col tw-items-start tw-bg-[#faffff]/90'>
                <h2 className='tw-text-2xl tw-font-semibold tw-text-[#cd1c18]'>
                    {name}
                </h2>
                <p>{sex}</p>
                <p>{breedPrimary}</p>
                <p>{ageString}</p>
                <Link className={`${buttonClassName} desktop-dog-blue-button tw-text-[#ffff00] tw-py-1 tw-px-3 tw-bg-[#0000cc] tw-rounded-full tw-mt-2`} to={`/dogs/${id}`} onClick={onLearnMore}>
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default DogCard