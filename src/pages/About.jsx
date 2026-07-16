import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faEarthAmerica, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../css/about.css';

const About = () => {
  return (
    <section className='desktop-about'>
      <div className='desktop-about-mission tw-mx-4'>
        <div className='desktop-about-mission-h1 tw-flex tw-flex-col tw-items-center'>
          <FontAwesomeIcon icon={faCompass} className='tw-text-[#cd1c18] tw-mt-24 tw-text-4xl' />
          <h1 className='tw-font-bold tw-text-4xl tw-mt-4'>
            Our <span className='tw-text-[#cd1c18]'>Mission</span>
          </h1>
        </div>
        <p className='desktop-about-mission-p tw-font-light tw-my-4'>
          Second Chance Dog Rescue is a 501(c)(3) nonprofit dedicated to rescuing, rehabilitating, and re-homing dogs through a network of foster families.
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
          <h3 className='tw-font-bold tw-text-xl tw-mt-3 tw-mb-2'>
            Why <span className='tw-text-[#cd1c18]'>Foster</span>
          </h3>
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
          <h3 className='tw-font-bold tw-text-xl tw-mt-3 tw-mb-2'>
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
  )
}

export default About