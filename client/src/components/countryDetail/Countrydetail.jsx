
//import style from '../countryDetail/details.module.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getCountryId } from "../../redux/reducer"
import { useParams } from "react-router-dom"
import style from '../countryDetail/details.module.css'
import { Link } from "react-router-dom"
import axios from "axios"

export const Countrydetail = () =>{
    
  const URL = 'http://localhost:3001/countries';
  const  {id}  = useParams();
  const dispatch = useDispatch();
    console.log(id);
  const country = useSelector(state => state.country.country);
  useEffect(() => {
    const getCountryById = async () => {
      try {
        const {data}  = await axios(`${URL}/${id}`);
        
        dispatch(getCountryId(data));
        
      } catch (error) {
        throw error.message;
      }
    }
    getCountryById();
  }, []);



// className={style.detailConteiner}
    return(
        <div>
            <div className={style.detailConteiner}>
                {/* <button>
                    <Link to='/home'>Home Pais</Link>
                </button> */}
               
                <h1>{country?.name}</h1>
                <h2>Continente: {country?.continents}</h2>
                <h2>Capital: {country?.capital}</h2>
                <h2>Subregion: {country?.subregion}</h2>
                <h2>Area: {country?.area} Km2</h2>
                <h2>Poblacion: {country?.population} </h2>
                <img src={country?.imgFlag} />
                
            </div>
        </div>
    )
}