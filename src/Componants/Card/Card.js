import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '22.5rem' }}>
          <img className="card-img-top" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rfcfoudtda1n7qqgbi4c" alt="food" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on </p>
            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(3), (e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value='half'>half</option>
                <option value='full'>full</option>
              </select>
              <div className='d-inline h-100 fs-5'>
                Total price
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card