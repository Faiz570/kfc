import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Menu.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function Menu() {
  return (
    
    <div className="container">
      <h3 className='text-light mt-5'>EXPLORE MENU</h3>
      <div className="line ms-5 bg-danger mb-2"></div>
      <div className="swiper-body">
      <Swiper
        slidesPerView={3}
        // slidesPerView={'auto'}

        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     // spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 50,
        //   },
        // }}
        className="mySwiper1 mySwiper"
      >
        <SwiperSlide className='my-slide'><div class="mcard m-0" style={{width: "18rem"}}>
  <img  src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Krunch-2023-05-31095826.png" class="card-img w-75 h-75 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light text-center">Everyday Value</h5>
    <p class="card-text text-center ms-5 mt-2"><div className="line ms-5 bg-danger mb-2"></div><div className="cricle  bg-dark "></div></p>
   
  </div>
</div></SwiperSlide >
        <SwiperSlide   className='my-slide'>
          <div class="mcard m-0 " style={{width: "18rem"}}>
  <img  src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png" class="card-img w-75 h-75 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light text-center">Ala-Carte-&-Combos</h5>
    <p class="card-text text-center ms-5 mt-2"><div className="line ms-5 bg-danger mb-2"></div><div className="cricle  bg-dark "></div></p>
   
  </div>
</div></SwiperSlide>
        <SwiperSlide  className='my-slide'><div class="mcard m-0 " style={{width: "18rem"}}>
  <img  src="https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png" class="card-img w-75 h-75 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light text-center">Signature-Boxes</h5>
    <p class="card-text text-center ms-5 mt-2"><div className="line ms-5 bg-danger mb-2"></div><div className="cricle  bg-dark "></div></p>
   
  </div>
</div></SwiperSlide>
        <SwiperSlide  className='my-slide'><div class="mcard m-0 " style={{width: "18rem"}}>
  <img  src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Sharing-2023-05-31095826.png" class="card-img w-75 h-75 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light text-center">Sharing</h5>
    <p class="card-text text-center ms-5 mt-2"><div className="line ms-5 bg-danger mb-2"></div><div className="cricle  bg-dark "></div></p>
   
  </div>
</div></SwiperSlide>
        <SwiperSlide className='my-slide'><div class="mcard m-0 " style={{width: "18rem"}}>
  <img  src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Snacks-2023-05-31095826.png" class="card-img w-75 h-75 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light text-center">Snakes-&-Beverages</h5>
    <p class="card-text text-center ms-5 mt-2"><div className="line ms-5 bg-danger mb-2"></div><div className="cricle  bg-dark "></div></p>
   
  </div>
</div></SwiperSlide>
        <SwiperSlide  className='my-slide'><div class="mcard m-0 " style={{width: "18rem"}}>
  <img  src="https://www.kfcpakistan.com/images/afc49a90-ff99-11ed-aad1-a133693e27ae-Midnight-2023-05-31095826.png" class="card-img w-75 h-75 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light text-center">Midnight</h5>
    <p class="card-text text-center ms-5 mt-2"><div className="line ms-5 bg-danger mb-2"></div><div className="cricle  bg-dark "></div></p>
   
  </div>
</div></SwiperSlide>
      </Swiper>
      </div>
      </div>

    
    




    
  );
}

export default Menu;
