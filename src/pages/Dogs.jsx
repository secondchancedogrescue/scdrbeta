import React from 'react'
import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getAllDogs } from '../services/dogFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import '../css/dogs.css';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [filterSex, setFilterSex] = useState('All');
  const [sortBy, setSortBy] = useState('AZ');
  const introRef = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const fetchDogs = async () => {
      const data = await getAllDogs();
      setDogs(data);
    };

    fetchDogs();
  }, []);

  const processedDogs = useMemo(() => {
    let result = [...dogs];

    // Filter by sex
    if (filterSex !== 'All') {
      result = result.filter((dog) => dog.attributes.sex === filterSex);
    }

    const getBirthDate = (dog) => {
      return dog.attributes.birthDate ? new Date(dog.attributes.birthDate) : null;
    };

    // Sorting by Name
    result.sort((a, b) => {
      if (sortBy === 'AZ' || sortBy === 'ZA') {
        return sortBy === 'AZ' ? a.attributes.name.localeCompare(b.attributes.name)
          : b.attributes.name.localeCompare(a.attributes.name);
      } else {
        const dateA = getBirthDate(a);
        const dateB = getBirthDate(b);

        return sortBy === 'young-old' ? dateB - dateA : dateA - dateB;
      }
    });

    return result;
  }, [dogs, filterSex, sortBy]);

  return (
    <main>
      {/* Intro banner */}
      <section ref={introRef}>
        <div>
          <div className='desktop-adoptable tw-flex-tw-flex-col tw-justify-center tw-mx-4 tw-py-8 tw-mt-20'>
            <h1 className='desktop-adoptable-hero tw-text-3xl tw-font-bold tw-text-center tw-my-4'>
              <span className='tw-text-[#cd1c18]'>Adoptable</span> Dogs
            </h1>
            <p className='tw-font-light tw-text-lg tw-text-center'>
              Help them find their forever.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Sort */}
      <section>
        <div className='desktop-adoptable tw-bg-white tw-z-10 tw-sticky tw-top-[84px] tw-py-4'>
          <div className='desktop-adoptable-filter tw-flex tw-items-center tw-justify-around tw-mb-4 tw-mx-3'>
            <FontAwesomeIcon icon={faFilter} />

            {['All', 'Female', 'Male'].map((sex) => (
              <button key={sex} onClick={() => setFilterSex(sex)}
                className={`tw-px-3 tw-py-1 tw-rounded-full tw-border tw-border-gray-300 tw-text-sm tw-font-medium
              ${filterSex === sex ? 'tw-bg-[#cd1c18] tw-text-white' : 'tw-bg-[#faffff] tw-text-[#878787]'}`}>
                {sex}
              </button>
            ))}
          </div>

          <div className='desktop-adoptable-filter tw-flex tw-items-center tw-flex-wrap tw-justify-around tw-mx-4'>
            <FontAwesomeIcon icon={faSort} />

            {[
              { value: 'AZ', label: 'AZ' },
              { value: 'ZA', label: 'ZA' },
              { value: 'young-old', label: 'Young to Old' },
              { value: 'old-young', label: 'Old to Young' }].map((option) => (
                <button key={option.value} onClick={() => setSortBy(option.value)}
                  className={`tw-my-1 tw-px-3 tw-py-1 tw-rounded-full tw-border tw-border-gray-300 tw-text-sm tw-font-medium
              ${sortBy === option.value ? 'tw-bg-[#cd1c18] tw-text-white' : 'tw-bg-[#faffff] tw-text-[#878787]'}`}>
                  {option.label}
                </button>
              ))}
          </div>
        </div>


        {/* Available dogs */}
        <div className='desktop-adoptable desktop-adoptable-roster tw-mb-6'>
          {processedDogs.map((dog) => {
            const { id, attributes } = dog;
            const { pictureThumbnailUrl, name, breedPrimary, sex, ageString } = attributes;

            return (
              <div key={id} className='tw-h-[428px] tw-w-full tw-bg-[#faffff] tw-relative'>
                {pictureThumbnailUrl && (
                  <img src={pictureThumbnailUrl} alt="" className='desktop-adoptable-photo tw-w-full tw-h-full tw-object-cover tw-overflow-hidden' />
                )}
                <div className='tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-p-3 tw-flex tw-flex-col tw-items-start tw-bg-[#faffff]/90'>
                  <h2 className='tw-text-2xl tw-font-semibold tw-text-[#cd1c18]'>
                    {name}
                  </h2>
                  <p>{sex}</p>
                  <p>{breedPrimary}</p>
                  <p>{ageString}</p>
                  <Link className='desktop-dog-blue-button tw-text-[#ffff00] tw-py-1 tw-px-3 tw-bg-[#0000cc] tw-rounded-full tw-mt-2' to={`/dogs/${id}`} onClick={scrollToTop}>
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  )
}

export default Dogs