import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <section>
            <div className='tw-mx-4 tw-my-24'>
                <h1 className='tw-mt-24 tw-text-4xl tw-font-bold'><span className='tw-text-[#cd1c18]'>Oops!</span> This page wandered off.</h1>
                <p className='tw-my-4'>
                    We couldn't find the page you were looking for.
                    Maybe it found a loving foster home elsewhere.
                </p>
                <Link className='tw-text-[#0000cc]' to='/dogs'>
                    Meet Our Dogs
                </Link>
            </div>
        </section>
    )
}

export default Notfound