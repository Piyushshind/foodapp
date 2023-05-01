import React from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import Footer from '../../Componants/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rfcfoudtda1n7qqgbi4c" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home