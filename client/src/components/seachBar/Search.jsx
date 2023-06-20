import { useState } from 'react';
import { getCountryName } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import style from '../seachBar/search.module.css';

export const Search = () => {
  const URL = 'http://localhost:3001/countries';
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState(false); // Estado para controlar el error de búsqueda

  useEffect(() => {
    setSearchError(false);
    const getAll = async () => {
      try {
        const { data } = await axios.get(`${URL}/name/?name=${searchTerm}`);
        dispatch(getCountryName(data));
        setSearchError(data.length === 0); // Establecer el estado de error a verdadero si no se encuentran resultados
      } catch (error) {
        setSearchError(true); // Establecer el estado de error a verdadero si hay un error en la llamada a la API
      }
    };
    getAll();
  }, [searchTerm]);

  const handleChange = (event) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(event.target.value)) {
      setSearchTerm(event.target.value);
    }
  };

  return (
    <div className={style.search}>
     
      <div className={style.searchId}>
        <input
          className={style.searchInput}
          onChange={handleChange}
          value={searchTerm}
          type='search'
          placeholder='name'
        />
        {searchError && <p className={style.error}>Country not found</p>}
        <button className="searchButton" href="#">
          ✈
        </button>
      </div>
      
    </div>
    
  );
};
