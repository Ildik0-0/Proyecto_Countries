//import style from '../searchBar/seach.module.css'
import { useState } from 'react';
import { getCountryName } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//import { useSelector } from 'react-redux';
import axios from 'axios'
//import { getCountryName } from '../../redux/reducer';
//import { useSelector } from 'react-redux';


export const Search = () =>{


  const URL = 'http://localhost:3001/countries';
  const dispatch = useDispatch();
  //const countries = useSelector((state) => state.country.allCountries);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get(`${URL}/name/?name=${searchTerm}`);
        dispatch(getCountryName(data));
      } catch (error) {
        throw error.message;
      }
    };
    getAll();
  }, [searchTerm]);

  

  const handleChange = (event) => {
    const regex = /^[a-zA-Z\s]*$/; //  permite solo letras y espacios
  
    if (regex.test(event.target.value)) {
    setSearchTerm(event.target.value);

  }
}


  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          value={searchTerm}
          type='search'
          placeholder='Buscar por nombre'
        />
        {/* <button onClick={handleSearch}>
          Buscar
        </button> */}
       </div>
     </div>
   );
 };