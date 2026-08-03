import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faQrcode } from '@fortawesome/free-solid-svg-icons';

const Fee = () => {
    return (
        <section className='tw-mt-24'>
            {/* Hero */}
            <div className='tw-py-4 tw-bg-[#0000cc]'>
                <h1 className='tw-text-4xl tw-font-bold tw-text-center tw-text-[#faffff] tw-mb-3'>
                    Pay Adoption Fee
                </h1>
                <p className='tw-font-light tw-text-[#faffff] tw-mx-2'>
                    Submit your adoption fee securely below.
                    Your payment helps cover the medical care your new companion received.
                </p>
            </div>

            {/* Pay */}
            <div className='tw-mx-2'>
                {/* PayPal */}
                <div className='tw-border tw-border-black tw-my-6'>
                    <div className='tw-flex tw-items-center tw-mb-2 tw-mx-4 tw-my-4'>
                        <FontAwesomeIcon icon={faCreditCard} className='tw-text-[#cd1c18] tw-text-2xl' />
                        <div className='tw-flex tw-flex-col tw-ml-4'>
                            <p className='tw-font-bold'>PayPal</p>
                            <p className='tw-text-xs tw-text-[#878787]'>Venmo, credit/debit card accepted</p>
                        </div>
                    </div>
                    <p className='tw-mb-2 tw-mx-2'>Pay securely with PayPal, Venmo, or any major credit or debit card.</p>
                    <a className='tw-mt-6 tw-px-1 tw-flex tw-justify-center tw-rounded-full tw-w-[16rem] tw-py-2 tw-mx-auto tw-border tw-border-black hover:tw-text-[#cc0000] tw-bg-[#ffc439] hover:tw-bg-white'
                        href="https://www.paypal.com/donate/?hosted_button_id=XPTRRJU3PLLPN" target="_blank" rel="noopener noreferrer">
                        Pay Fee
                    </a>
                    <p className='tw-text-center tw-text-xs tw-text-[#878787] tw-mb-4'>PayPal, Venmo and Credit/Debit Card options</p>
                </div>
                {/* Zelle */}
                <div className='tw-border tw-border-black tw-mb-14'>
                    <div className='tw-flex tw-items-center tw-mb-2 tw-mx-4 tw-my-4'>
                        <FontAwesomeIcon icon={faQrcode} className='tw-text-[#cd1c18] tw-text-2xl tw-my-2' />
                        <div className='tw-flex tw-flex-col tw-ml-4'>
                            <p className='tw-font-bold'>Zelle</p>
                            <p className='tw-text-xs tw-text-[#878787]'>Scan to pay from your bank app</p>
                        </div>
                    </div>
                    <p className='tw-mb-2 tw-mx-2'>Open your bank or Zelle app and scan the code to send your adoption fee.</p>
                    <img className='tw-mx-auto' src="https://secondchancedogrescue.org/wp-content/uploads/2025/12/scdr_zelle_qr.png" alt="Zelle QR Code"></img>
                </div>
            </div>
        </section>
    )
}

export default Fee