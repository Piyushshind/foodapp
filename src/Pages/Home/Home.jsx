import React, { useEffect } from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import Footer from '../../Componants/Footer/Footer'
import Card from '../../Componants/Card/Card'
import { useState } from 'react'

const Home = () => {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let fetchData = await response.json();
    setFoodItem(fetchData[0]);
    setFoodCat(fetchData[1]);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: '5' }}>
              <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success " type="submit">Search</button>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900×700/?cricket" className="d-block w-100" style={{ filter: 'brightness(80%)' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ filter: 'brightness(60%)' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?chicken" className="d-block w-100" style={{ filter: 'brightness(85%)' }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      
      <div className='container'>
        {
          foodCat !== [] ? foodCat.map((data) => {
            return (

              <div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {
                  foodItem !== [] ? foodItem.filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItem) => {
                      return (
                        <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                          <Card
                            foodName={filterItem.name}
                            options={filterItem.options[0]}
                            imgSrc={filterItem.img}
                          ></Card>
                        </div>
                      )
                    })
                    : ""
                }
              </div>

            )
          }) : ""
        }
      </div>
      <Footer />
    </>
  )
}

export default Home