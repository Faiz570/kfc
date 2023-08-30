import React from 'react';
import './History.css';

function History() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row bg-dark rounded-3">
          <div className="col-lg-12">
            <div className="hcard mb-3 mt-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://www.kfcpakistan.com/static/media/history-img.599c12141403abf0beb5.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title text-light mt-5"><b>History</b></h2>
                    <p className="card-text text-light mt-5">It all started with Colonel Harland Sanders, the man who convinced the world by saying “We do<br/> chicken right!” Sanders took a great deal of time perfecting his iconic secret recipe of 11 herbs<br/> and spices, a legacy he’s brought to the world through KFC’s 10,000 restaurants. Starting from<br/> outside of his gas station in Korbin, Kentucky to being a globally recognized face, we owe our success to the Colonel’s hard work and passion for sharing his love for chicken with the world!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
