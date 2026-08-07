import React from 'react';
import '../css/notfound.css';
import notfound from '../assets/404_2026.webp';

const Notfound = () => {
    return (
        <section className='desktop-notfound'>
            <div className='tw-mx-4 tw-my-56 tw-flex tw-justify-center'>
                <img className='tw-border' src={notfound} alt="" />
            </div>
        </section>
    )
}

export default Notfound
