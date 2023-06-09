import { NavLink } from "react-router-dom";
import style from '../navBar/nav.module.css'

export const Navbar = () => {
    return(
        <nav>
            <div className={style.nav}>
                <NavLink className={style.btn} to='/home'>Home</NavLink>
                <NavLink className={style.btn} to='/activity'>Activity</NavLink>
            </div>
        </nav>
    )
}

// export default Navbar;