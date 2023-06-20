import style from '../cardCountry/cardStyle.module.css';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



const CardCountry = ({id, imgFlag, continents, name}) => {
    
    return(
        <div className={style.counterCard} >

            <div className={style.item}>

                <div className={style.image}>
                   
                        <img src={imgFlag} />
                    

                <div className={style.letra}>
                    <NavLink className={style.letra}  to={`/details/${id}`}>
                        <h2 >Name: {name}</h2>
                    </NavLink>
                    <h2>Region: {continents}</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardCountry
