import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Calendar = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div>
            <div className='tw-fixed tw-inset-0 tw-z-10 tw-flex tw-justify-center tw-items-center tw-bg-black/60' onClick={onClose}>
                <div className='tw-shadow-xl tw-flex tw-flex-col tw-w-[95%] tw-h-[80vh] tw-pt-10' onClick={(e) => e.stopPropagation()}>
                    <div className='tw-w-full tw-h-full tw-flex tw-flex-col tw-items-end tw-bg-[#cd1c18] tw-px-2 tw-pb-2'>
                        <button className='tw-text-xl tw-text-[#faffff] tw-my-4' onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className='tw-relative tw-h-full tw-w-full tw-overflow-auto tw-rounded-xl'>
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&title=Event%20Calendar&showCalendars=0&mode=AGENDA&src=ZXZlbnRjYWxAc2Vjb25kY2hhbmNlZG9ncmVzY3VlLm9yZw&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043"
                                title='Adoption Event Calendar'
                                className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full'
                                style={{ border: 0 }}
                                loading='lazy'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar