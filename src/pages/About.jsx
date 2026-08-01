import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faEarthAmerica, faLocationDot, faStreetView, faPhone, faReply } from '@fortawesome/free-solid-svg-icons';
import '../css/about.css';
import { useModal } from '../components/ModalContext';
import { board, staff, volunteer } from '../data/roster';

const About = () => {
  const { handleOpenCal } = useModal();

  const WhoWeAre = ({ heading_h2, members, columnWidth }) => (
    <div className='desktop-who-we-are-card tw-my-4 tw-py-4 tw-mx-2 tw-border tw-border-black'>
      <h2 className='tw-my-2 tw-ml-5 tw-text-xl'>{heading_h2}</h2>
      {members.map(({ name, title }) => (
        <div key={name} className={`tw-grid ${columnWidth}`}>
          <p className='tw-pl-5'>{name}</p>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section className='desktop-about'>
        <div className='desktop-about-mission tw-mx-4'>
          <div className='desktop-about-mission-h1 tw-flex tw-flex-col tw-items-center'>
            <FontAwesomeIcon icon={faCompass} className='tw-text-[#cd1c18] tw-mt-24 tw-text-4xl' />
            <h1 className='tw-font-bold tw-text-4xl tw-mt-4'>
              Our <span className='tw-text-[#cd1c18]'>Mission</span>
            </h1>
          </div>
          <p className='desktop-about-mission-p tw-font-light tw-my-4'>
            SCDR Inc. dba Second Chance Dog Rescue is a 501(c)(3) nonprofit dedicated to rescuing, rehabilitating, and re-homing dogs through a network of foster families.
            We provide medical care, love, and support so every dog gets a true second chance.
          </p>
        </div>

        <div className='desktop-about-cards'>
          <div className='about-moving-border tw-mx-4 tw-p-2 tw-mb-10'>
            <h2 className='tw-font-bold tw-text-2xl tw-mb-2'>
              Our <span className='tw-text-[#cd1c18]'>Story</span>
            </h2>
            <p className='tw-font-light tw-mb-1'>
              Second Chance Dog Rescue was founded in 2008 by Sandra D. Simpson, Jason Cordoba, and Maria Blake after recognizing the urgent need for more lifesaving support in our community.
            </p>
            <p className='tw-font-light tw-mb-1'>
              What began as a small group of dedicated volunteers has grown into a powerful foster-based rescue network throughout Southern California.
            </p>
          </div>

          <div className='about-moving-border tw-mx-4 tw-p-2 tw-mb-10'>
            <h2 className='tw-font-bold tw-text-2xl tw-mb-2'>
              Why <span className='tw-text-[#cd1c18]'>Foster</span>
            </h2>
            <p className='tw-font-light tw-mb-1'>
              Because we do not operate a traditional shelter, every dog we save is welcomed into a foster home.
            </p>
            <p className='tw-font-light tw-mb-1'>
              There, frightened or mistreated dogs receive: stability, medical care, and the chance to heal in a loving environment.
            </p>
            <p className='tw-font-light'>
              Many begin to blossom within days.
            </p>
          </div>

          <div className='about-moving-border tw-mx-4 tw-p-2 tw-mb-10'>
            <h2 className='tw-font-bold tw-text-2xl tw-mb-2'>
              How We <span className='tw-text-[#cd1c18]'>Help</span>
            </h2>
            <p className='tw-font-light tw-mb-1'>
              SCDR Inc., dba Second Chance Dog Rescue is a non-profit 501c3.
            </p>
            <p className='tw-font-light tw-mb-1'>
              Once we receive a dog, we provide medical care, including spaying and neutering, and any necessary rehabilitation.
            </p>
          </div>

          <div className='about-moving-border tw-mx-4 tw-p-2 tw-mb-10'>
            <h2 className='tw-font-bold tw-text-2xl tw-mb-2'>
              <span className='tw-text-[#cd1c18]'>Volunteer</span>-Powered
            </h2>
            <p className='tw-font-light tw-mb-1'>
              Second Chance Dog Rescue's success depends on our network of dedicated volunteers and foster families.
            </p>
            <p className='tw-font-light tw-mb-1'>
              Even the most frightened, mistreated or timid dog can blossom and thrive.
            </p>
          </div>

          <div className='about-moving-border tw-mx-4 tw-p-2 tw-mb-10'>
            <h3 className='tw-font-bold tw-text-2xl tw-mb-2'>
              Where We <span className='tw-text-[#cd1c18]'>Rescue</span>
            </h3>
            <p>
              We rescue dogs from:
            </p>
            <div className='tw-flex tw-gap-1 tw-items-center'>
              <FontAwesomeIcon icon={faLocationDot} className='tw-text-[#cd1c18]' />
              <p>
                Local shelters
              </p>
            </div>
            <div className='tw-flex tw-gap-1 tw-items-center'>
              <FontAwesomeIcon icon={faEarthAmerica} className='tw-text-[#cd1c18]' />
              <p>
                Baja California, Mexico
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='tw-flex tw-flex-col tw-bg-[#cc0000] tw-py-14'>
          <h1 className='tw-text-center tw-text-[#faffff] tw-font-bold tw-text-4xl'>Who We Are</h1>
        </div>
        <div className='desktop-who-we-are'>
          <div className='desktop-who-we-are-content'>
            <WhoWeAre
              heading_h2={
                <>
                  Advisory <span className='tw-text-[#cd1c18]'>Board</span> of Directors
                </>
              }
              members={board}
              columnWidth='tw-grid-cols-[14rem_1fr]'
            />

            <WhoWeAre
              heading_h2={
                <>
                  <span className='tw-text-[#cd1c18]'>Staff</span>
                </>
              }
              members={staff}
              columnWidth='tw-grid-cols-[12rem_1fr]'
            />

            <WhoWeAre
              heading_h2={
                <>
                  Key <span className='tw-text-[#cd1c18]'>Volunteers</span>
                </>
              }
              members={volunteer}
              columnWidth='tw-grid-cols-[14rem_1fr]'
            />
          </div>
        </div>
      </section>

      <section className='tw-mt-10 tw-pt-14 tw-bg-[#f7f7f7]'>
        <div className='desktop-visit tw-flex tw-flex-col tw-mx-4'>
          <h1 className='tw-font-bold tw-text-4xl tw-text-center'>
            Visit <span className='tw-text-[#cd1c18]'>Us</span>
          </h1>
          <div className='tw-flex tw-items-center tw-mt-4'>
            <FontAwesomeIcon icon={faStreetView} />
            <p className='tw-mx-2'>
              4284 Cass Street San Diego, CA 92109
            </p>
          </div>
          <div className='tw-flex tw-items-center tw-my-1'>
            <FontAwesomeIcon icon={faPhone} />
            <p className='tw-mx-2'>
              619.721.3647 (DOGS)
            </p>
          </div>
          <div className='tw-flex tw-items-center tw-mb-4'>
            <FontAwesomeIcon icon={faReply} />
            <p className='tw-mx-2'>
              info@secondchancedogrescue.org
            </p>
          </div>
          <h2 className='tw-font-bold'>
            Please Note
          </h2>
          <p>
            Second Chance Dog Rescue does not have a kennel or boarding facility.
            All of our dogs live in private foster homes while they wait for their forever families, so there are no dogs available to meet our office.
            If you're interested in meeting one of our dogs, please submit an adoption application online or visit onr of our upcoming adoption{' '}
            <span onClick={handleOpenCal} className='tw-cursor-pointer tw-text-[#0000cc] hover:tw-underline hover:tw-decoration-[#cc0000] hover:tw-underline-offset-8'>events</span>.
          </p>
        </div>
        <div className='tw-mt-14 tw-w-full'>
          <iframe className='tw-w-full tw-h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.927617005219!2d-117.25360382433662!3d32.794178473656444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95363ace523f9%3A0x7f795cf1250684a0!2sSecond%20Chance%20Dog%20Rescue!5e0!3m2!1sen!2sus!4v1785304134120!5m2!1sen!2sus"
            style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="SCDR Location"></iframe>
        </div>
      </section>
    </>
  )
}

export default About