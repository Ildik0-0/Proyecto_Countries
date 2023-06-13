//import style from '../homeCountry/home.module.css'
import {NavLink} from 'react-router-dom'
import style from '../landing/landingPage.module.css'

 export const LandingPage = ()  =>{



    return (
        

            <div className={style.contenedor}>
                    <div>
                  
                <button className={style.btnHome}>
                    <NavLink to='/home'> HOME </NavLink>
                </button>
                </div>
            </div>
       
    )
}

// export default Home;