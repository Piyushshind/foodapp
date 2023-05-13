import React, { useState } from 'react'
import { useCart, useDispatchCart } from '../ContextReducer/ContextReducer';



const Card = (props) => {
  const { foodItem, options } = props;
  const priceOption = Object.keys(options)
  let dispatch = useDispatchCart();
  let data = useCart();
  
  const [qty,setQty] = useState(1);
  const [size,setSize] = useState('');
  
  let finalPrice = qty * parseInt(options[size])
  
  const handleAddtoCart = async () => {
      await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,price:props.finalPrice,qty:qty,size:size,img:foodItem.img})
        console.log(data);
    }

  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '22.5rem' }}>
        <img className="card-img-top" src={foodItem.img} alt="food" style={{ height: '150px', objectFit: 'fill' }} />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          <p className="card-text">Some quick example text to build on </p>
          <div className='container w-100'>
            <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(3), (e, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select>
            <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setSize(e.target.value)}>
              {
                priceOption.map(data => <option key={data} value={data}>{data}</option>)
              }
            </select>
            <div className='d-inline h-100 fs-5'>
              ₹{'Total price'}/-
            </div>
          </div>
          <hr>
          </hr>

          <button className='btn btn-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</button>

        </div>
      </div>
    </div>
  )
}

export default Card;













// "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rfcfoudtda1n7qqgbi4c" 