
//import style from '../countryDetail/details.module.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getCountryId } from "../../redux/reducer"
import { useParams } from "react-router-dom"
import style from '../countryDetail/details.module.css'
// import { Link } from "react-router-dom"
import axios from "axios"

export const Countrydetail = () =>{
    
  const URL = 'http://localhost:3001/countries';
  const  {id}  = useParams();
  const dispatch = useDispatch();
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

if(!country) return(
  <h1 className={style.error}>The ID: {id} does not exist, please enter a valid ID</h1>
 
)


// className={style.detailConteiner}
    return(
        <div className={style.imageBack}>
            <div className={style.detailConteiner}>
                <div className={style.item}>
                  <div className={style.polaroid}>
                  <img src={country?.imgFlag} />
                      <div className={style.caption}>
                        <h1>{country?.name} {country?.id}</h1>
                        <h2>Continente: {country?.continents}</h2>
                        <h2>Capital: {country?.capital}</h2>
                        <h2>Subregion: {country?.subregion}</h2>
                        <h2>Area: {country?.area} Km2</h2>
                        <h2>Poblacion: {country?.population} </h2>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    )
}