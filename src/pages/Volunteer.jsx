import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendarAlt, faCameraRetro, faCarSide, faCheckCircle, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../css/volunteer.css';
import { useModal } from '../components/ModalContext';

const Volunteer = () => {
  const {handleOpenCal} = useModal();

  return (
    <div>
      <section className='tw-bg-[linear-gradient(to_bottom_right,#faffff_55%,#faffff_65%,#ff9999)]'>
        <div className='desktop-vol-hero tw-mx-4'>
          <h1 className='tw-font-bold tw-text-4xl tw-mt-24'>
            Because Making a <span className='tw-text-[#0000cc]/70'>Difference</span> Takes a <span className='tw-text-[#cd1c18]'>Community</span>
          </h1>
          <p className='tw-font-light tw-my-4'>
            Join our community of dedicated volunteers and help give dogs a second chance, one life at a time.
          </p>
          <div className='desktop-vol-hero-cta tw-flex tw-flex-col tw-items-center'>
            <a className='tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-mt-8 tw-mb-4 tw-w-[16rem] tw-py-2 tw-bg-[#cd1c18] tw-text-white' href="https://forms.gle/NfmPhCZLzAwe3jXBA" target='_blank' rel='noopener noreferrer'>
              Foster App
            </a>
            <a className='tw-inline-flex tw-justify-center tw-rounded-full tw-w-[16rem] tw-mb-16 tw-py-2 tw-border tw-border-black' href="https://forms.gle/GVmr7RrTY9zzjU1G7" target='_blank' rel='noopener noreferrer'>
              Volunteer App
            </a>
          </div>
        </div>
      </section>

      <section className='desktop-vol-foster tw-mx-4'>
        <h1 className='tw-font-bold tw-text-4xl tw-mt-8 tw-text-[#0000cc]/70'>
          Become a Foster Parent
        </h1>
        <p className='tw-font-light tw-my-4'>
          Fostering is the heart of our rescue. By opening your home temporarily, you give a dog the love, care, and stability they need while waiting for their forever family.
          It's one of the most rewarding experiences you'll ever have.
        </p>
        <div className='desktop-vol-foster-card'>
          <div className='tw-flex tw-items-center tw-mb-2'>
            <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#0000cc]/80 tw-mx-2' />
            <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
              Medical Care Provided - All veterinary care is covered through our trusted partners.
            </p>
          </div>
          <div className='tw-flex tw-items-center tw-mb-2'>
            <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#0000cc]/80 tw-mx-2' />
            <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
              Supplies Included - Leashes, collars, bowls, foods, bedding, and flea medication are all provided.
            </p>
          </div>
          <div className='tw-flex tw-items-center tw-mb-2'>
            <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#0000cc]/80 tw-mx-2' />
            <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
              Flexible Schedule - You choose the foster timeline; we coordinate to ensure dogs are safe, healthy and ready for adoption.
            </p>
          </div>
          <div className='tw-flex tw-items-center tw-mb-2'>
            <FontAwesomeIcon icon={faCheckCircle} className='tw-text-[#0000cc]/80 tw-mx-2' />
            <p className='tw-text-sm tw-font-light tw-max-w-[214px]'>
              No Cost to You - Fostering is 100% supported.
            </p>
          </div>
          {/* Links */}
          <div className='tw-flex tw-flex-col tw-items-center'>
            <a className='desktop-vol-volunteer-cta tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-my-8 tw-w-[16rem] tw-py-2 tw-bg-[#0000cc]/80 tw-text-white' href="https://forms.gle/NfmPhCZLzAwe3jXBA" target='_blank' rel='noopener noreferrer'>
              Foster App
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='tw-pt-8 tw-px-4 tw-flex tw-flex-col tw-items-center tw-bg-[linear-gradient(to_bottom,#ff9999_0%,#faffff_30%)]'>
          <h1 className='tw-text-4xl tw-font-bold tw-text-center tw-text-[#faffff]'>
            Volunteer Opportunities
          </h1>
          <p className='tw-font-light tw-text-lg tw-mt-6'>
            Find the perfect way to contribute your time and talents
          </p>

          <div className='desktop-vol-volunteer'>
            <div className='desktop-vol-volunteer-card tw-flex tw-flex-col tw-border-2 tw-border-[#9999ff] tw-bg-[#faffff] tw-mt-8 tw-mb-3 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faCalendarAlt} className='tw-text-[#0000cc]/80 tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Event
              </h3>
              <p className='tw-mx-4 tw-pb-1 tw-font-light'>
                Help at various events: adoption, fundraisers, and community outreach.
                Set up and teardown tents, playpen, socialize dogs, and connect with adopters.
              </p>
              <p onClick={handleOpenCal} className='desktop-vol-volunteer-cta tw-mx-4 tw-mb-3 tw-rounded-full tw-bg-[#0000cc] tw-w-fit tw-px-4 tw-py-1 tw-text-bold tw-text-[#ffff00] tw-cursor-pointer'>
                Events
              </p>
            </div>

            <div className='desktop-vol-volunteer-card tw-flex tw-flex-col tw-border-2 tw-border-[#9999ff] tw-bg-[#faffff] tw-my-6 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faCarSide} className='tw-text-[#0000cc]/80 tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Transport
              </h3>
              <p className='tw-mx-4 tw-pb-3 tw-font-light'>
                Help transport dogs to vet appointments, foster homes, or adoption events.
              </p>
            </div>

            <div className='desktop-vol-volunteer-card tw-flex tw-flex-col tw-border-2 tw-border-[#9999ff] tw-bg-[#faffff] tw-my-6 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faCameraRetro} className='tw-text-[#0000cc]/80 tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Photography
              </h3>
              <p className='tw-mx-4 tw-pb-3 tw-font-light'>
                Capture beautiful photos of our dogs for adoption listings and social media.
              </p>
            </div>

            <div className='desktop-vol-volunteer-card tw-flex tw-flex-col tw-border-2 tw-border-[#9999ff] tw-bg-[#faffff] tw-my-6 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faBullhorn} className='tw-text-[#0000cc]/80 tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Outreach
              </h3>
              <p className='tw-mx-4 tw-pb-3 tw-font-light'>
                Organize drives, campaigns, or help spread awareness online.
              </p>
            </div>

            <div className='desktop-vol-volunteer-card tw-flex tw-flex-col tw-border-2 tw-border-[#9999ff] tw-bg-[#faffff] tw-my-2 tw-rounded-xl tw-relative tw-max-w-xs tw-w-full'>
              <FontAwesomeIcon icon={faLaptopCode} className='tw-text-[#0000cc]/80 tw-p-1 tw-text-3xl tw-m-4' />
              <h3 className='tw-text-2xl tw-font-bold tw-mx-4'>
                Technology
              </h3>
              <p className='tw-mx-4 tw-pb-3 tw-font-light'>
                Build web apps in Google Workspace and automate workflows.
              </p>
            </div>
          </div>

          {/* Volunteer CTA*/}
          <a className='desktop-vol-volunteer-cta tw-inline-flex tw-justify-center tw-rounded-full tw-w-[16rem] tw-mt-8 tw-mb-16 tw-py-2 tw-bg-[#0000cc]/80 tw-text-white' href="https://forms.gle/GVmr7RrTY9zzjU1G7" target='_blank' rel='noopener noreferrer'>
            Volunteer App
          </a>
        </div>
      </section>
    </div>
  )
}

export default Volunteer