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
  const countriesActivityForm = useSelector(state => state.country.countries);

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios(URL);
        dispatch(addCountries(data));
        console.log(countriesActivityForm);
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
    if (event.target.name === "countries" && event.target.value === "Chose Country") {
      return; 
    }
    setUserData({
      ...userData,
      [event.target.name]:event.target.name === 'countries' ? userData.countries.includes(event.target.value) ? [...userData.countries] : [...userData.countries, event.target.value] : event.target.value
    });
  };
  const handleClick = (event, id) => {
    event.preventDefault()
    setUserData({
        ...userData,
        countries: userData.countries.filter((country) => country !== id)
    })
}
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validation(userData);
   

 
    
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        await axios.post("http://localhost:3001/activities", userData);
        alert("Data have been successfully sent");
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
        alert("Error the data can not be saved");
        
        
      }
    } else {
      alert("Form have errors ");
    }
  };
    return(
      <div className={style.containerForm}>
            
           

          <div className={style.formBox}>
             
            <form name="formTag" onSubmit={handleSubmit}>
                <div className={style.form}>
                    <label>Actividad: </label>
                    <br />
                    <input type="text" name='name' placeholder="  Enter Activity" onChange={handleChange}/>
                    {errors.name && <p className={style.error}>{errors.name}</p>}
                </div>
                <br />
                <div className={style.form}>
                    <label>Season: </label>
                    <br />
                    <select name='season' className={style.custom} onChange={handleChange} value={userData.season}>
                        <option >Select Season</option>
                        <option value='Summer'>Summer</option>
                        <option value='Winter'>Winter</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Spring'>Spring</option>
                        
                    </select>
                    {errors.season && <p className={style.error}>{errors.season}</p>}
                </div>
                <br />
                <div className={style.form}>
                    <label>Duration  (Hours): </label>
                    <br />
                    <input type="text" name='duration' placeholder="  Enter Hours" onChange={handleChange}/>
                    {errors.duration && <p className={style.error}>{errors.duration}</p>}
                </div>
                <br />
                <div className={style.form}>
                     <label>Difficulty: </label>
                    <br />
                   {/* <input type="text" name='difficulty' placeholder="Ingrese La dificultad" onChange={handleChange}/> */}
                    <select name='difficulty' className={style.custom} onChange={handleChange} value={userData.difficulty}>
                        <option >Select difficulty</option>
                        <option value='1'>Very Easy</option>
                        <option value='2'>Easy</option>
                        <option value='3'>Medium</option>
                        <option value='4'>Hard</option>
                        <option value='5'>Very Hard</option>
                        
                    </select>
                    {errors.difficulty && <p className={style.error}>{errors.difficulty}</p>}
                </div>
                <br />
                <div className={style.form}>
                    <label>Country: </label>
                        <br />

                        <select name="countries" className={style.custom} value={userData.countries} onChange={handleChange}>
                        <option >Chose Country</option>
                        {/* aqui esoty mapeando los paices para mostrarlos en el select y guardarlos con el form */}
                            {Array.isArray(countriesActivityForm) && countriesActivityForm.length > 0 ? (
                                countriesActivityForm.map(({ id, name }) => (
                                <option key={id} value={id}>
                                    {name}  
                                    {/* aqui muestro el nombre de los paices */}
                                </option>
                                ))
                            ) : (
                               errors.countries && <p className={style.error}>{errors.countries}</p>
                            )}
                           
                        </select>
                        {errors.countries && <p className={style.error}>{errors.countries}</p>}

                        <div className={style.spanTag}>
                          {userData.countries.length ? <span>Countries Select:</span> : null}
                          </div>

                        <div className={style.btnCountries}>
                        {
                          userData.countries.map( country => (
                            <button  key={country} onClick={(event) => handleClick(event, country)}>
                            {country} 
                            </button>
                            
                            )) 
                          }
                          
                          </div>
                        
              
                        
                </div>
                <br />
                <button className={style.btn} type="submit ">Submit</button>
            </form>
          </div>


                          

      </div>
    )
}

//export default Formactivity;