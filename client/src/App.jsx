
import {Home} from './components/homeCountry/Home'
import {LandingPage} from './components/landing/LandingPage'
import { Navbar} from './components/navBar/Navbar'
import {Formactivity} from './components/formCountry/Formactivity'
import { Countrydetail } from './components/countryDetail/Countrydetail';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './App.module.css'



function App() {
 
const location = useLocation()
  return (
    <div  className={style.app}>
      {
         location.pathname !== '/' &&  <Navbar/>
      }
     
     
      <Routes>
      
        <Route path= '/home' element={<Home/>} />
        <Route path= '/' element={<LandingPage/>}/>
        <Route path= '/details/:id' element={<Countrydetail/>} />
        <Route path= '/activity' element={<Formactivity/>}/>
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      
    </div>
  )

}
function NotFound() {
  return (
      <div >
          <h2>Error 404: No information found</h2>
          <p > The link you try to enter is invalid .</p>
          <Link to="/home">
          <div  > 
            <h1>Go back to HOME</h1>
          </div>
          </Link>
      </div>
  );
}

export default App
