import { NavLink } from "react-router-dom";
import { Search } from '../../components/seachBar/Search'
import style from '../navBar/nav.module.css'


export const Navbar = () => {
    return(
        <nav>
            <div className={style.nav}>
                
                <div className={style.menu}>
                    <NavLink> <Search/> </NavLink>
                    <NavLink className={style.btn}  to='/home'>Home</NavLink>
                    <NavLink className={style.btn} to='/activity'>Create Activity</NavLink>
                </div>
            </div>
        </nav>
        
    )
}

// export default Navbar;