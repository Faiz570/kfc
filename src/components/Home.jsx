import React from 'react'
import Carousel from './Carousel'
import Menu from './Menu'
import Best from './Best'
import Top from './Top'
import Grid from './Grid'

function Home() {
  return (
    <div className="body bg-dark">
      <Carousel/>
      <Menu/>
      <Best/>
      <Top/>
      <Grid/>
      </div>
    
  )
}

export default Home
