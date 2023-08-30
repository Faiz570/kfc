import React from 'react'
import './About.css'
import  History  from './History'
import Fast from './Fast'
import Agrid from './Agrid'
import Acard from './Acard'


function About() {
  return (
    <div>
      <h1 className='text-light text-center mt-5'><b></b>About us</h1>
      <div className="container">
        <div className="row1 bg-dark rounded-3 d-flex gap-3">
          <div className="col-6 text-light ms-3 "><p  className='mt-5'>KFC entered Pakistan in 1997 and since then, it’s been a journey full of excitement and Finger Lickin’ goodness! The first KFC restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi and now our Finger Lickin’ Chicken is available in 33 cities with over 117 restaurants! Being the most loved fast food chain in Pakistan, KFC leaves no stone unturned to provide its customers the most delicious chicken and an excellent dining experience.</p></div>
          <div className="col-6">
             <div className="daba bg-danger text-light rounded-3 mt-5">
              <h6 className=' dabatxt text-center   '><b>WE PRIDE OURSELVES ON USING QUALITY HALAL<br></br> CHICKEN AND LOCAL INGREDIENTS FROM TRUSTED<br></br> SUPPLIERS</b></h6> </div>
           
          </div>
        </div>
      </div>
      <History/>
      <Fast/>
      <Agrid/>
      <Acard/>
      
    </div>
   
  )
}

export default About
