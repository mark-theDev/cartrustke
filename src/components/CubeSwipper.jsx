import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './cube-swipper.css';

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

const CubeSwipper = () => {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={false}
        slidesPerView={1}
        autoplay={
          {
            delay: 3000,
            disableOnInteraction: false,
          }
        }
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="swiper relative"
      >
        <SwiperSlide>
          <img src="/Damages-slide1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Purpose-slide1.png" />
        </SwiperSlide>        
        <SwiperSlide>
          <img src="/Odometer-slide1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Specs-slide.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CubeSwipper