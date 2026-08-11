import React from 'react'
import { useState, useEffect, useMemo, useRef } from 'react';
import { getAllDogs } from '../services/dogFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import '../css/dogs.css';
import DogCard from '../components/DogCard';
import SkeletonCard from '../components/SkeletonCard';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [filterSex, setFilterSex] = useState('All');
  const [sortBy, setSortBy] = useState('AZ');
  const introRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      setLoading(true);

      try {
        const data = await getAllDogs();
        setDogs(data);
      } catch (error) {
        console.error("Failed to fetch dogs:", error);
      } finally {
        setLoading(false);
      }
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
            <p className='desktop-adoptable-p tw-font-light tw-text-sm'>
              Please note: Our adoptable dogs live in private foster homes.
              We do not have a public kennel facility for walk-in visits.
              If you are interested in meeting a dog, please visit that dog's profile page and complete an adoption application.
              Our team will contact you with next steps, typically within 3 business days.
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
        <div className="desktop-adoptable desktop-adoptable-roster tw-mb-6">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))
          ) : (
            processedDogs.map((dog) => (
              <DogCard
                key={dog.id}
                id={dog.id}
                {...dog.attributes}
                imageClassName="desktop-adoptable-photo"
                buttonClassName="desktop-dog-blue-button"
              />
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default Dogs