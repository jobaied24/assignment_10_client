import React from 'react';
            // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from '../assets/bework1.jpg';
import slide2 from '../assets/bework2.jpg';
import slide3 from '../assets/bework3.jpg';

const Banner = () => {
    return (
        <Swiper  
        className='mb-20'
  spaceBetween={30}
  slidesPerView={1}
  // navigation={true}
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  modules={[Navigation, Pagination, Autoplay]}
    >
      {/* slide-1 */}
      <SwiperSlide>
        <div className='relative'>
             <img className='w-full md:h-[500px] h-[350px] object-cover' src={slide1}></img>
               <h2 className="px-2 absolute inset-0 flex flex-col text-4xl md:text-6xl font-bold items-center justify-center text-white bg-black/40">
      Grow Your Business Faster</h2>
        </div>
        </SwiperSlide>

      {/* slide-2 */}
      <SwiperSlide>
        <div className='relative'>
             <img className='w-full md:h-[500px] h-[350px] object-cover' src={slide2}></img>
               <h2 className="px-2 absolute inset-0 flex flex-col text-4xl md:text-6xl font-bold items-center justify-center text-white bg-black/40">
      Your Business, Our Talent</h2>
        </div>
        </SwiperSlide>

      {/* slide-3 */}
      <SwiperSlide>
        <div className='relative'>
             <img className='w-full md:h-[500px] h-[350px] object-cover' src={slide3}></img>
               <h2 className="px-2 absolute inset-0 flex flex-col text-4xl md:text-6xl font-bold items-center justify-center text-white bg-black/40">
      Hire Experts, Save Time</h2>
        </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default Banner;