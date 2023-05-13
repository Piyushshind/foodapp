import React, { useEffect } from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import Footer from '../../Componants/Footer/Footer'
import Card from '../../Componants/Card/Card'
import Carousel from '../../Componants/Carousel/Carousel'
import { useState } from 'react'

const Home = () => {
   
   const [foodCat,setFoodCat] = useState([]);
   const [foodItem,setFoodItem] = useState([]);

   const loadData = async() => {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      })
     let fetchData = await response.json();
      console.log(fetchData[0],fetchData[1]);
   }

   useEffect(()=>{
      loadData()
   },[])

  return (
    <>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <div className='m-3'>
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default Home