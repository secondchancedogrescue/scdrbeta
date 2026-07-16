import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons'
import '../css/footer.css';

const Footer = () => {
  const currentYr = new Date().getFullYear();

  return (
    <footer className='tw-bg-[#0000cc] tw-text-[#ffff00] tw-pt-4'>

      <div className='footer'>

        {/* Logo and Name*/}
        <div className='footer-logo tw-flex tw-flex-col tw-mx-3'>
          <div className='tw-flex tw-items-center'>
            <img className='tw-h-12 tw-w-10 tw-mt-2 tw-mb-1 tw-mr-3' src='https://secondchancedogrescue.org/wp-content/uploads/2020/01/logo.png' alt='' />
            <div className='tw-flex tw-flex-col tw-mt-2 tw-mb-1'>
              <p className='tw-mt-0'>Second Chance</p>
              <p className='tw-text-[#1591ea] tw-text-sm'>DOG RESCUE</p>
            </div>
          </div>
          <p className='tw-text-xs tw-text-[#1591ea] tw-mt-1'>A foster-based nonprofit rescuing, <span className='tw-text-[#ffff00]'>rehabilitating,</span> and re-homing dogs in San Diego.</p>
        </div>

        {/* Newsletter links */}
        <div className='footer-substack tw-flex tw-flex-col tw-mt-6 tw-mx-3'>
          <p className='tw-text-[#1591ea] tw-text-sm'>RESOURCES</p>
          <a className='tw-mt-2 tw-px-1 tw-py-1 hover:tw-text-[#cc0000] hover:tw-bg-white' href="https://2ndchancedogrescue.substack.com" target='_blank' rel='noopener noreferrer'>
            Our Substack
          </a>
          
        </div>

        {/* Social Media */}
        <div className='footer-social tw-mt-4 tw-mx-3'>
          <p className='tw-text-[#1591ea] tw-text-sm'>CONNECT</p>
          <div className='footer-social-stack tw-flex'>
            <a className='hover:tw-text-[#cc0000]' href="https://www.instagram.com/2ndchancedogrescue" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='instagram-icon tw-mt-3 tw-mr-2 tw-rounded-full tw-p-2 tw-bg-[#1591ea] hover:tw-bg-white' />
            </a>
            <div className='footer-social-small'>
              <a className=' hover:tw-text-[#cc0000]' href="https://www.facebook.com/secondchancedogrescue" target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebookF} className='small-social-icon small-social-icon-fb tw-mt-3 tw-mr-2 tw-rounded-full tw-p-2 tw-bg-[#1591ea] hover:tw-bg-white' />
              </a>
              <a className=' hover:tw-text-[#cc0000]' href="https://www.tiktok.com/@2ndchancedogrescuesd" target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faTiktok} className='small-social-icon tw-mt-3 tw-rounded-full tw-p-2 tw-bg-[#1591ea] hover:tw-bg-white' />
              </a>
            </div>
          </div>
          <div className='tw-mt-3 tw-mb-8'>
            <p className='tw-text-[#1591ea]'>San Diego, California</p>
            <p className='tw-text-sm tw-text-[#1591ea]'>info@secondchancedogrescue.org</p>
          </div>
        </div>
      </div>

      <div className='footer-1'>

        <hr className='tw-border-[#1591ea]' />

        {/*Copyright and staff*/}
        <div className='tw-mt-8 tw-mx-3'>
          <a className='tw-text-sm tw-rounded-full tw-bg-[#1591ea]/60 hover:tw-bg-white hover:tw-text-[#0000cc] tw-px-3 tw-py-1' href="https://sites.google.com/secondchancedogrescue.org/intranet" target='_blank' rel='noopener noreferrer'>
            Staff login
          </a>
          <div className='tw-py-4 tw-text-[10px] tw-flex tw-justify-between'>
            <p >
              <FontAwesomeIcon icon={faCopyright} /> {currentYr} Second Chance Dog Rescue. 501(c)(3) Nonprofit Organization.
            </p>
            <p>
              EIN: 26-3642128
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer