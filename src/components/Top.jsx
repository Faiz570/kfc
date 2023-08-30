
import './Top.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

function Top() {
  return (
    <div className="container ">
    <h3 className='text-light ms-5 mt-5'><b>TOP DEALS</b></h3>
    <div className="line ms-5 bg-danger mb-2 "></div>
<div className="d-flex flex-wrap justify-content-center align-items-center">
<div class="card1" style={{width: "16rem"}}>
  <img src="https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png" class="card-img-top w-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light"><b>Twister Combo</b></h5>
    <p class="card-text text-light">Twister + 1 Regular fries + 1 Regular drink</p>
    <p className='text-light'><b>Rs 670</b></p>
    <a href="#" class="btn btn-danger">+ Add To Bucket</a>
  </div>
</div>

        <div class="card1" style={{width: "16rem"}}>
  <img src="https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png" class="card-img-top w-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light"><b>Zinger Stacker Combo</b></h5>
    <p class="card-text text-light">1 Zinger Stacker + 1 Regular fries + 1 Regular drink</p>
    <p className='text-light'><b>Rs 850</b></p>
    <a href="#" class="btn btn-danger">+ Add To Bucket</a>
  </div>
</div>
        <div class="card1" style={{width: "16rem"}}>
  <img src="https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png" class="card-img-top w-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light"><b>Crispy Duo Box</b></h5>
    <p class="card-text text-light">Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2</p>
    <p className='text-light'><b>Rs 1250</b></p>
    <a href="#" class="btn btn-danger">+ Add To Bucket</a>
  </div>
</div>        <div class="card1" style={{width: "16rem"}}>
  <img src="https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png" class="card-img-top w-50" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-light"><b>Family Festival 3</b></h5>
    <p class="card-text text-light">An ultimate meal for the fam. It includes 4 Zinger burgers + 4</p>
    <p className='text-light'><b>Rs 2450</b></p>
    <a href="#" class="btn btn-danger">+ Add To Bucket</a>
  </div>
</div>
</div>
    </div>
   
  )
}

export default Top
