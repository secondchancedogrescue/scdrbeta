import React from 'react';
import { Link } from 'react-router-dom';

const NoDog = () => {
    return (
        <section>
            <div className='tw-mx-4 tw-my-24'>
                <h1 className='tw-mt-24 tw-text-4xl tw-font-bold'><span className='tw-text-[#cd1c18]'>WoOf!</span> This dog status is no longer available.</h1>
                <p className='tw-my-4'>
                    The dog you are looking for may have found a home or is currently not available for adoption.
                </p>
                <div className='tw-mx-4 tw-my-56 tw-flex tw-justify-center'>
                    <img className='tw-border' src="https://github.com/secondchancedogrescue/scdrbeta/blob/main/src/assets/nodog.webp?raw=true" alt="" />
                </div>
                <Link className='tw-text-[#0000cc]' to='/dogs'>
                    Meet The Ones That Are!
                </Link>
            </div>
        </section>
    )
}

export default NoDog