import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nodog.css';

const NoDog = () => {
    return (
        <section className='desktop-nodog'>
            <div className='tw-mx-4 tw-my-24'>
                <h1 className='tw-mt-24 tw-text-4xl tw-font-bold'><span className='tw-text-[#cd1c18]'>WoOf!</span> This dog status is no longer available.</h1>
                <p className='tw-my-4'>
                    The dog you are looking for may have found a home or is currently not available for adoption.
                </p>
                <div className='tw-flex tw-justify-center'>
                    <img className='tw-my-2' src="https://github.com/secondchancedogrescue/scdrbeta/blob/main/src/assets/nodog.webp?raw=true" alt="" />
                    <Link className='tw-text-[#0000cc]' to='/dogs'>
                        Meet The Ones That Are!
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NoDog