import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SlideArray from "../../Array/SlideItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../resources/css/swiper/styles.css";

const Dotted = ({item}) => {
  const rendering = () => {
    const result = [];
    // for (i = 0; i < item.length; i++) {
      
    // }
  }
}

const SlideContents = () => {
  const pagination = {
    clickable: true,
    renderBullet: 
    
    function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
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
                {item.link === true ? 
                  <div className="more_link flex flex_jc_c flex_ai_c">
                    <a href="#">더 알아보기</a>
                  </div>
                  :
                  null
                }
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

export default SlideContents;