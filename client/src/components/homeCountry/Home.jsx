import style from '../homeCountry/home.module.css'
import {NavLink} from 'react-router-dom'

 export const Home = ()  =>{



    return (
        

            <div className={style.contenedor}>
                    <div>
                    <h1>HOLA!!</h1>
                <button className={style.btnHome}>
                    <NavLink to='/home'> HOME </NavLink>
                </button>
                </div>
            </div>
       
    )
}

// export default Home;