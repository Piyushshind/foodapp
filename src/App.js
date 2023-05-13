import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import { CartProvider } from './Componants/ContextReducer/ContextReducer';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
