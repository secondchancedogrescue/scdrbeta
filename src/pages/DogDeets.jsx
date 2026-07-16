import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDogById } from '../services/dogFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import '../css/deets.css';

const scrubText = (txt) => {
    if (!txt) return '';

    const e = document.createElement('textarea');
    e.innerHTML = txt;
    return e.value;
};

const DogDeets = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);
    const [imgModal, setImgModal] = useState('');

    const checkCourtesyPost = (name) => name?.toLowerCase().includes('courtesy post');
    const isCourtesyPost = checkCourtesyPost(dog?.attributes?.name)

    useEffect(() => {
        const fetchDogs = async () => {
            const data = await getDogById(id);
            setDog(data);
        };

        fetchDogs();
    }, [id]);

    // Loading state while fetching
    if (!dog) return <div>Loading...</div>;

    return (
        <div className='desktop-deets'>
            {/* Carousel */}
            <div className='sm:tw-hidden tw-mt-24'>
                <Swiper slidesPerView={1.15} centeredSlides={true} spaceBetween={16} modules={[Pagination]} pagination={{ el: '.custom-pagination', clickable: true }} >
                    {/* <Swiper effect='cards' grabCursor={true} modules={[EffectCards]} > */}
                    {dog.attributes.allPics.map((url, index) => (
                        <SwiperSlide key={index}>
                            <div className=''>
                                <img className='tw-w-full tw-h-[428px] tw-object-contain' src={url} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='custom-pagination tw-flex tw-justify-center'></div>
            </div>

            {/* Desktop */}
            <div className='tw-hidden desktop-deets-pic'>
                {dog?.attributes.allPics?.length > 0 && (
                    <>
                        <div>
                            <img className='desktop-deets-prime-pic' src={dog.attributes.allPics[0]} alt="" onClick={() => setImgModal(dog.attributes.allPics[0])} />
                        </div>

                        <div className='desktop-deets-thumb-pic'>
                            {dog.attributes.allPics.slice(1).map((url, index) => (
                                <img key={index} src={url} alt="" onClick={() => setImgModal(url)} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Modal */}
            {imgModal && (
                <div className='desktop-deets-modal' onClick={() => setImgModal('')}>
                    <img src={imgModal} alt="" onClick={(e) => e.stopPropagation()} />
                </div>
            )}

            {/* Name */}
            <div className='tw-mx-4 tw-my-4'>
                <Link to='/dogs/' className='tw-text-[#0000cc]' >&lt; Back</Link>
                <p className='tw-text-[#cd1c18] tw-text-3xl tw-font-bold'>{dog.attributes.name}</p>
                <p className='tw-text-[#878787] tw-text-[1rem] tw-font-light'> {dog.attributes.breedPrimary} • {dog.attributes.sex} • {dog.attributes.ageString} • {dog.attributes.sizeGroup} </p>
            </div>

            {/* Qualities */}
            <div className='tw-m-4 tw-flex tw-flex-wrap tw-items-center tw-gap-2'>
                {dog.attributes.qualities?.length > 0 ? (dog.attributes.qualities.map((quality, index) =>
                    (<p key={index} className='tw-rounded-full tw-py-1 tw-px-3 tw-m-1 tw-bg-[#cd1c18]/10 tw-text-[#cd1c18]'>{quality}</p>)
                )) : (<p></p>)}

            </div>

            {/* Description */}
            <div className='tw-my-8 tw-mb-4 tw-mx-4'>
                <h1 className='tw-font-bold tw-text-xl tw-mb-2'>About {dog.attributes.name}</h1>
                <p className='tw-font-light tw-text-lg'>{scrubText(dog.attributes.descriptionText)}</p>
            </div>

            {/* CTA to adopt */}
            <div className='desktop-deets-cta tw-m-4 tw-max-w-[320px] tw-rounded-lg tw-py-2 tw-px-2 tw-bg-[#cd1c18]/10 tw-relative'>
                <div className=''>
                    <h3 className='tw-font-bold tw-mb-8'>Adoption Fee</h3>
                    <h2 className='tw-font-bold tw-text-[#cd1c18] tw-text-2xl tw-absolute tw-top-2 tw-right-6'>
                        {!isCourtesyPost && `$${dog.attributes.adoptionFeeString.replace(/\$/g, '')}`}
                    </h2>
                </div>
                <p className='tw-font-extralight tw-text-sm tw-mb-8'>
                    Includes spay/neuter, vaccinations, microchip, and veterinary care.
                </p>
                {isCourtesyPost ?
                    (
                        <button className='tw-block tw-w-fit tw-rounded-full tw-py-1 tw-px-3 tw-mx-auto tw-bg-[#878787]/40 tw-pointer-events-none tw-cursor-not-allowed'>
                            See Description
                        </button>
                    ) : (
                        <a className='tw-block tw-w-fit tw-rounded-full tw-py-1 tw-px-3 tw-mx-auto tw-bg-[#cd1c18] tw-text-[#faffff]'
                            href='https://forms.gle/TYvB3TDfUtYgHt389' target='_blank' rel='noreferrer'>
                            Apply
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default DogDeets