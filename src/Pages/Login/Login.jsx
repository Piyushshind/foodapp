import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const naviget = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json();
    // console.log(resx);
    if (json.success) {
      localStorage.setItem("authToken",json.authToken)
      // console.log(localStorage.getItem('authToken'));
      naviget("/")
    }
    if (!json.success) {
      alert('enter valid credentials')
    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Login</button>
          <Link to='/signup' className="m-3 btn btn-danger">don't have account</Link>
        </form>
      </div>
    </>
  )
}

export default Login

