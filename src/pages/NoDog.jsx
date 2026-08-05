import React from 'react';
import { Link } from 'react-router-dom';

const NoDog = () => {
    return (
        <section>
            <div className='tw-mx-4 tw-my-24'>
                <h1 className='tw-mt-24 tw-text-4xl tw-font-bold'><span className='tw-text-[#cd1c18]'>WoOf!</span> This dog is no longer available.</h1>
                <p className='tw-my-4'>
                    The dog you are looking for may have found a home or is no longer available for adoption.
                </p>
                <Link className='tw-text-[#0000cc]' to='/dogs'>
                    Meet Our Dogs
                </Link>
            </div>
        </section>
    )
}

export default NoDog