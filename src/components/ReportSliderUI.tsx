'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/styles/styles.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ReportSliderUi() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/gmail_report1.png" />
        </SwiperSlide>        
        <SwiperSlide>
          <img src="/report_whatsapp.png" />
        </SwiperSlide> 
      </Swiper>
    </>
  );
}
