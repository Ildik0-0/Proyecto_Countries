import style from '../cardCountry/cardStyle.module.css';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const CardCountry = ({id, imgFlag, continents, name}) => {
    
    return(
        <div className={style.counterCard} >
            <div>
                <Link to={`/details/${id}`}>
                    <h2>Name: {name}</h2>
                </Link>
                <h2>Region: {continents}</h2>
            </div>
            <div className={style.image}>
                <img src={imgFlag} />
            </div>
        </div>
    )
}

export default CardCountry
// CardCountry.propTypes = {
//     id: PropTypes.string.isRequired,
//   }