import React from 'react'
import './Acard.css'

function Acard() {
  return (
    <div>
      <div class="container text-center mt-5">
  <div class="row row-cols-2 ">
    <div class="col bg-dark rounded-3">
        <img className='mt-5 mb-3' src="https://www.kfcpakistan.com/static/media/citizen.96455050a3fd03f4ae80.png" alt="" />
        <p className='text-light mb-5'>Adopted 4 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 800+ students</p>
    </div>
    <div class="col  bg-dark rounded-3">
    <img  src="https://www.kfcpakistan.com/static/media/deaf.8affdbacc52b04c1fa12.jpeg"className="deafimg mt-5 mb-1" alt="" />
        <p className='text-light mb-5'>Proudly running the Deaf Reach KFC Campus and providing education and training to 200 deaf students</p>
    </div>
    <div class="col  bg-dark rounded-3">
    <img className='mt-5 mb-3' src="https://www.kfcpakistan.com/static/media/orange.fdf7006b20f61e8cb4ce.png" alt="" />
        <p className='text-light mb-5'>Sponsoring higher education of 120+ students across HEC recognized universities in Pakistan</p>
    
    </div>
    <div class="col  bg-dark rounded-3">
    <img className='mt-5 mb-3' src="https://www.kfcpakistan.com/static/media/cyte.5a383a40c92b2062984c.png" alt="" />
        <p className='text-light mb-5'>Supporting TEGS – KFC Campus to provide quality education to students in Lahore</p>
    
    </div>
  </div>
</div>
    </div>
  )
}

export default Acard
