import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addCountries} from '../../redux/reducer'
import { validation } from "../validationForm/validation";
import { useNavigate } from "react-router-dom";

import style from '../formCountry/from.module.css'

export const Formactivity = () => {
  const URL = 'http://localhost:3001/countries';
  //const URL2 = 'http://localhost:3001/activities';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activity = useSelector(state => state.country.countries);

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios(URL);
        dispatch(addCountries(data));
        console.log(activity);
      } catch (error) {
        throw error.message;
      }
    };
    getAll();
  }, []);

  const [userData, setUserData] = useState({
    name: "",
    season: "",
    difficulty: "",
    duration: "",
    countries: [],
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]:event.target.name === 'countries' ? userData.countries.includes(event.target.value) ? [...userData.countries] : [...userData.countries, event.target.value] : event.target.value
    });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validation(userData);
   

 
    
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        await axios.post("http://localhost:3001/activities", userData);
        alert("Datos guardados exitosamente");
        setUserData({
          name: "",
          season: "",
          difficulty: "",
          duration: "",
          country: [],
        });
        document.forms["formTag"].reset();
        navigate('/home')
      } catch (error) {
        alert("Error al guardar los datos en el servidor");
        
        
      }
    } else {
      alert("Formulario contiene errores");
    }
  };
    return(
      <div>
            
          <div className={style.formBox}>
            <form name="formTag" onSubmit={handleSubmit}>
                <div className={style.form}>
                    <label>Actividad: </label>
                    <br />
                    <input type="text" name='name' placeholder="Ingrese Actividad" onChange={handleChange}/>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <br />
                <div className={style.form}>
                    <label>Temporada: </label>
                    <br />
                    <select name='season' onChange={handleChange} value={userData.season}>
                        <option >Select Season</option>
                        <option value='Summer'>Summer</option>
                        <option value='Winter'>Winter</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Spring'>Spring</option>
                        
                    </select>
                    {errors.season && <p className="error">{errors.season}</p>}
                </div>
                <br />
                <div className={style.form}>
                    <label>Duracion: </label>
                    <br />
                    <input type="number" name='duration' placeholder="Ingrese Las Horas" onChange={handleChange}/>
                    {errors.duration && <p className="error">{errors.duration}</p>}
                </div>
                <br />
                <div className={style.form}>
                     <label>Dificultad: </label>
                    <br />
                   {/* <input type="text" name='difficulty' placeholder="Ingrese La dificultad" onChange={handleChange}/> */}
                    <select name='difficulty' onChange={handleChange} value={userData.difficulty}>
                        <option >Select difficulty</option>
                        <option value='1'>Very Easy</option>
                        <option value='2'>Easy</option>
                        <option value='3'>Medium</option>
                        <option value='4'>Hard</option>
                        <option value='5'>Very Hard</option>
                        
                    </select>
                    {errors.difficulty && <p className="error">{errors.difficulty}</p>}
                </div>
                <br />
                <div className={style.form}>
                    <label>Pais: </label>
                        <br />
                        <select name="countries" onChange={handleChange}>
                        <option value="">Chose Country</option>
                            {Array.isArray(activity) && activity.length > 0 ? (
                                activity.map(({ id, name }) => (
                                <option key={id} value={id}>
                                    {name}
                                </option>
                                ))
                            ) : (
                                <option value="">No hay actividades disponibles</option>
                            )}
                        </select>
                        {userData.countries.map( country => (
                          <span  key={country}>
                          {country} 
                          </span>
                        ))}
                </div>
                <br />
                <button type="submit ">Submit</button>
            </form>
          </div>
      </div>
    )
}

//export default Formactivity;