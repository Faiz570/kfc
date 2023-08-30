import React from 'react';

function Grid() {
  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <img src="https://www.kfcpakistan.com/static/media/pickup-banner.01fde5a7db5ef06f7bce.png" className="w-100 h-100 rounded-3" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <img src="https://www.kfcpakistan.com/static/media/favorites-banner.afff26bc6d0127f68baa.png" className="w-100 h-100 rounded-3" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <img src="https://www.kfcpakistan.com/static/media/scamOrdr.6f809bf83912dd8dbe31.jpg" className="w-100 h-100 rounded-3" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="card w-100 h-100 d-flex flex-column justify-content-center align-items-center">
  <img src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png" className="card-img-top w-50 h-50 rounded-3 mb-3" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-light">Adding 11 herbs and spices, Explore our menu and add items to your cart.</h5>
    <a href="#" className="btn btn-danger mt-3"><b>EXPLORE MENU</b></a>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
