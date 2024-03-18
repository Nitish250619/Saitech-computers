import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from "../../Assets/Gallery/1saitech-computers-rnt-road-indore-computer-peripheral-amc-jypz13h50f.jpg";
import Image2 from "../../Assets/Gallery/2saitech-computers-rnt-road-indore-computer-peripheral-amc-sn3qc3hmxa.jpeg.jpg";
import Image3 from "../../Assets/Gallery/3saitech-computers-rnt-road-indore-computer-peripheral-amc-ortt6ruz4w.jpg";
import Image4 from "../../Assets/Gallery/4dfg-indore-g7ua5pezyc.jpg";
import Image5 from "../../Assets/Gallery/5dfg-indore-1q8vqqxcca.jpg";
import Image6 from "../../Assets/Gallery/6dfg-indore-flvuwbmrut.jpg";
import Image7 from "../../Assets/Gallery/7saitech-computers-rnt-road-indore-computer-peripheral-amc-lydicu5fac.jpg";
import Image8 from "../../Assets/Gallery/8abgs38931624AA3A862933725F1318_1667825406875.png";
import Image9 from "../../Assets/Gallery/9A36D40D7EC5F7187A859C9959_1631875121543.jpg";
import Image10 from "../../Assets/Gallery/10AFE23915FD07B929428279B7_1631875121387.jpg";
import Image11 from "../../Assets/Gallery/11djs03870F3E48790294651CE1F835_1668056696264.jpg";
import Image12 from "../../Assets/Gallery/12FF28222BEADDE363D9DBB1F491_1668056674556.jpg";
import Image13 from "../../Assets/Gallery/13AE70A68BBA95DE44A13524ECCB_1668056655694.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Gallery.css"

const Gallery = () => {
  
  const slidesPerView = window.innerWidth >= 768 ? 4 : 1;

  return (
    <div className="swiper-container" style={{ maxHeight: '400px', maxWidth: '100%' ,}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image1}
            alt="Slide 1"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image2}
            alt="Slide 2"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image3}
            alt="Slide 3"
            className='image-style3'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image4}
            alt="Slide 4"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image5}
            alt="Slide 5"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image6}
            alt="Slide 6"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image7}
            alt="Slide 7"
            className='image-style7'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image8}
            alt="Slide 8"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image9}
            alt="Slide 9"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image10}
            alt="Slide 10"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image11}
            alt="Slide 11"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image12}
            alt="Slide 12"
            className='image-style'
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" >
          <img
            src={Image13}
            alt="Slide 13"
            className='image-style'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
