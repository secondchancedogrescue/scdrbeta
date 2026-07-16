import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCar, faCheckCircle, faSeedling } from '@fortawesome/free-solid-svg-icons';
import '../css/donate.css';

const Donate = () => {
  const ppinitialized = useRef(false);

  useEffect(() => {
    if (ppinitialized.current) return;
    ppinitialized.current = true;

    const renderBtn = () => {
      if (!window.PayPal?.Donation) return;

      window.PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'MHNWHC8PQ6PZG',
      }).render('#paypal-donate');
    }

    if (window.PayPal?.Donation) {
      renderBtn();
      return;
    }

    if (!document.querySelector('script[src*="donate-sdk.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
      script.async = true;
      script.onload = renderBtn;
      document.body.appendChild(script);
    }
  }, [])

  return (
    <div className='tw-mt-24'>
      {/* Hero */}
      <div className='tw-py-4 tw-bg-[#cc0000]'>
        <div className='desktop-donate tw-mx-4'>
          <h1 className='desktop-donate-hero tw-text-4xl tw-font-bold tw-text-[#faffff] tw-mb-3'>
            Because <span className='tw-text-[#ffff00]'>Second Chance</span> Starts With You
          </h1>
          <p className='desktop-donate-hero-p tw-font-light tw-text-[#faffff]'>
            Your gift provides medical care, food, and equipment to give abandoned dogs the second chance they deserve.
          </p>
          <p className='tw-font-light tw-text-[#faffff] tw-text-xs tw-mt-2'>
            All donations are tax-deductible to the extent allow by law. EIN 26-3642128
          </p>
          <div className='desktop-donate-paypal'>
            <div className='tw-flex tw-flex-col tw-items-center tw-mt-8'>
              <h2 className='tw-text-2xl tw-font-bold tw-text-[#faffff]'>
                Donate / Adoption Fee
              </h2>
              <div className='tw-mt-4 tw-mb-16' id='paypal-donate'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='tw-flex tw-flex-col tw-items-center tw-mt-8'>
        <div className='desktop-donate-zelle tw-flex tw-flex-col tw-items-center'>
          <h2 className='tw-text-3xl tw-font-bold tw-text-[#cd1c18]'>
            Have Zelle?
          </h2>
          <img className='tw-mb-8' src="https://secondchancedogrescue.org/wp-content/uploads/2025/12/scdr_zelle_qr.png" alt="Zelle QR Code"></img>
        </div>
      </div>

      {/* Other Ways to Give */}
      <div className='tw-bg-[#cd1c18]/10 tw-pb-12'>
        <h2 className='tw-flex tw-flex-col tw-items-center tw-text-3xl tw-font-bold tw-py-8 tw-text-[#cd1c18]'>
          Ways to Give
        </h2>

        <div className='desktop-donate-ways tw-flex tw-flex-col tw-items-center tw-gap-6'>
          <div className='desktop-donate-ways-card tw-bg-[#faffff] tw-w-fit tw-max-w-[300px] tw-p-3 tw-rounded-lg'>

            <FontAwesomeIcon icon={faCalendar} className='tw-text-[#cd1c18] tw-text-2xl tw-my-2' />
            <h3 className='tw-font-bold tw-text-2xl tw-mb-2'>Monthly Giving</h3>
            <p className='tw-font-light'>
              Consistency saves lives. Monthly donations allow us to plan rescues and cover critical medical care without delay.
            </p>

            <form action="https://www.paypal.com/cgi-bin/webscr" method='post' target='_top' className='tw-text-center tw-my-4'>
              <input type="hidden" name='cmd' value='_s-xclick' />
              <input type="hidden" name='hosted_button_id' value='XTWH6LEUJUKLY' />
              <input type="hidden" name='currency_code' value='USD' />

              <select name="os0" className='tw-border tw-rounded tw-px-3 tw-py-2' >
                <option value="Option 1">$10.00</option>
                <option value="Option 2">$25.00</option>
                <option value="Option 3">$50.00</option>
                <option value="Option 4">$100.00</option>
              </select>
              <input className='tw-block tw-mx-auto tw-mb-2' type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt=''></input>
            </form>
          </div>

          <div className='desktop-donate-ways-card tw-bg-[#faffff] tw-w-fit tw-max-w-[300px] tw-p-3 tw-rounded-lg'>
            <FontAwesomeIcon icon={faCar} className='tw-text-[#cd1c18] tw-text-2xl tw-my-2' />
            <h3 className='tw-font-bold tw-text-2xl tw-mb-2'>Car Donation</h3>
            <p className='tw-font-light'>
              Turn your unused vehicles into life-saving support. Click below to learn more!
            </p>
            <a className='tw-text-[#0000cc] tw-block tw-text-center tw-my-4 tw-text-3xl' href="https://careasy.org/nonprofit/Second-Chance-Dog-Rescue">
              Careasy.org
            </a>
          </div>

          <div className='desktop-donate-ways-card tw-bg-[#faffff] tw-w-fit tw-max-w-[300px] tw-p-3 tw-rounded-lg'>
            <FontAwesomeIcon icon={faSeedling} className='tw-text-[#cd1c18] tw-text-2xl tw-my-2' />
            <h3 className='tw-font-bold tw-text-2xl tw-mb-2'>Planned Giving</h3>
            <p className='tw-font-light'>
              Leave a lasting legacy of love and care by including Second Chance in your estate or financial plans. Contact us to learn more!
            </p>
            <p className='tw-font-light tw-my-3'>
              619 721 3647 (DOGS)
              info@secondchancedogrescue.org
            </p>
            <p className='tw-font-light tw-text-sm'>
              Second Chance Dog Rescue encourages you to consult your professional advisor regarding your estate planning.
            </p>
          </div>
        </div>
      </div>

      {/* Wish List */}
      <div>
        <div className='tw-flex tw-flex-col tw-items-center tw-mb-16'>
          <h2 className='tw-text-3xl tw-font-bold tw-mt-8 tw-text-[#cd1c18]'>
            Donation Wishlist
          </h2>
          <p className='tw-font-light tw-my-6'>
            We also accept in-kind donations.
          </p>

          <div className='desktop-donate-wish tw-p-3 tw-rounded-lg tw-bg-[#cd1c18]/10 tw-max-w-[300px]'>
            <div className='desktop-donate-wish-top'>
              <div className='tw-flex tw-items-center tw-mb-2'>
                <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#cd1c18] tw-mr-2' />
                <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
                  (Slip) leashes, (Martingale) collars, and harnesses of all sizes
                </p>
              </div>
              <div className='tw-flex tw-items-center tw-mb-2'>
                <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#cd1c18] tw-mr-2' />
                <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
                  Dog foods (kibbles and canned): puppy, adult, senior
                </p>
              </div>
              <div className='tw-flex tw-items-center tw-mb-2'>
                <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#cd1c18] tw-mr-2' />
                <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
                  Dog beds (newly or gently used)
                </p>
              </div>
              <div className='tw-flex tw-items-center tw-mb-2'>
                <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#cd1c18] tw-mr-2' />
                <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
                  Dog crates, x-pens, pet fence
                </p>
              </div>
              <div className='tw-flex tw-items-center tw-mb-2'>
                <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#cd1c18] tw-mr-2' />
                <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
                  Dog toys and enrichment items
                </p>
              </div>
            </div>

            {/* Links */}
            <div className='desktop-donate-wish-cta tw-flex tw-flex-col tw-items-center tw-mt-10 tw-mb-4 tw-gap-2'>
              <a className='tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-[#ff9900] tw-py-1 tw-px-3 tw-w-[100px]' href="https://www.amazon.com/gp/registry/wishlist/O27VKCIUEX7H/ref=cm_sw_em_r_wsg_V230wbPY6MYH8_wb" target='_blank' rel='noreferrer'>
                Amazon
              </a>
              <a className='tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-[#1c49c2] tw-py-1 tw-px-3 tw-w-[100px] tw-text-[#faffff]' href="https://www.chewy.com/g/second-change-dog-rescue_b78023353" target='_blank' rel='noreferrer'>
                Chewy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate