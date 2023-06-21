
import {Home} from './components/homeCountry/Home'
import {LandingPage} from './components/landing/LandingPage'
import { Navbar} from './components/navBar/Navbar'
import {Formactivity} from './components/formCountry/Formactivity'
import { Countrydetail } from './components/countryDetail/Countrydetail';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
        
        
      </Routes>
      {/* <Home/>
      <LandingPage/> */}
    </div>
  )
}

export default App
