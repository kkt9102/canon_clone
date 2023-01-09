import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import images from "../../resources/img/img";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../resources/css/swiper/styles.css";


const SlideContents = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img_box">
            <img src={images.contents1} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>
          <div className="img_box">
            <img src={images.contents3} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box">
            <img src={images.contents4} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box">
            <img src={images.contents5} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box">
            <img src={images.contents6} alt=""/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SlideContents;