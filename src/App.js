import './App.css';
import Home from './Pages/Home/Home';
import  { Route , Routs} from 'react-router-dom'
function App() {
  return (
    <>
     <Routs>

      <Route path='/' element={<Home />}/>
     </Routs>
      
    </>
  );
}

export default App;
