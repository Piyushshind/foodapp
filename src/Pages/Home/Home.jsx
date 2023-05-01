import React from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import Footer from '../../Componants/Footer/Footer'
import Card from '../../Componants/Card/Card'
import Carousel from '../../Componants/Carousel/Carousel'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <div>
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default Home