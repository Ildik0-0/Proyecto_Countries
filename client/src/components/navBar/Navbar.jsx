import { NavLink, useLocation } from "react-router-dom";
import { Search } from '../../components/seachBar/Search'
import style from '../navBar/nav.module.css'


export const Navbar = () => {

    const location = useLocation()

    return(
        <nav>
            {location.pathname !== '/activity' && <Search />}
            <div className={style.nav}>
            
                <div className={style.menu}>
                     <Search/> 
                    <NavLink className={style.btn}  to='/home'>Home</NavLink>
                    <NavLink className={style.btn} to='/activity'>Create Activity</NavLink>
                </div>
            </div>
        </nav>
        
    )
}

