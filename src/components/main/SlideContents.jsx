import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SlideArray from "../../Array/SlideItem";

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
        {SlideArray.SlideContentsArray.map((item, index) =>
          <SwiperSlide key={index}>
            <div className="slide_items img_box">
              <img src={item.img} alt=""/>
              <div className="txt_box absolute" style={{color:`${item.color}`}}>
                <div className="sub_tit">{item.sub_title}</div>
                <div className="tit">{item.title}</div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

export default SlideContents;