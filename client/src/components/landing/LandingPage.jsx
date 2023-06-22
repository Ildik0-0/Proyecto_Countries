
import {NavLink} from 'react-router-dom'
import style from '../landing/landingPage.module.css'

 export const LandingPage = ()  =>{



    return (
        

            <div className={style.contenedor}>
                    <div>
                  
                <button className={style.btnHome}>
                    <NavLink to='/home'> View Countries </NavLink>
                </button>
                </div>
            </div>
       
    )
}

