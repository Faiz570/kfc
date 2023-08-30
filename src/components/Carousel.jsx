import React from 'react'
import "./Caresoul.css"
function Carousel() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide margin" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.kfcpakistan.com/images/c7dfa7d0-f483-11ed-a370-c701cfd1fb3c-1920-x-420banner_desktop_image-2023-05-17072354.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<div class="d-grid gap-2 col-6 mx-auto mt-3 ">
  <button class="btn btn-danger" type="button"><b>REORDER</b></button>
  
</div>
    </div>
  )
}

export default Carousel
