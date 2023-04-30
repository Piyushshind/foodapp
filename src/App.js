import './App.css';
import Footer from './Componants/Footer/Footer';
import Home from './Pages/Home/Home';
import  { Route , Routes} from 'react-router-dom'
function App() {
  return (
    <>
     <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/footer' element={<Footer />}/>
     </Routes>
      
    </>
  );
}

export default App;
