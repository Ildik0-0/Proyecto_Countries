
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addCountries } from '../../redux/reducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { filterContinent } from '../../redux/reducer';
import { orderAsenDen } from '../../redux/reducer';
import { orderPopulation } from '../../redux/reducer';
import { getActivity } from '../../redux/reducer';
import { activityFilter } from '../../redux/reducer';

import axios from 'axios';
import style from '../homeCountry/home.module.css';
import CardCountry from '../cardCountry/CardCountry';


export const Home = () => {
  const URL = 'http://localhost:3001/countries';
  const Url = 'http://localhost:3001/activities';
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.allCountries);
  const getFilterActivity = useSelector((state) => state.country.activities);

  // const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios(URL);
        dispatch(addCountries(data));

        const response = await axios.get(Url);
        dispatch(getActivity(response.data));
      } catch (error) {
        throw error.message;
      }
    };
    getAll();
  }, []);

  const handleFilterChange = (event) => {
    dispatch(filterContinent(event.target.value));
  };

  const handleOrderChange = (event) => {
    dispatch(orderAsenDen(event.target.value));
  };

  const handleOrderPopulation = (event) => {
    dispatch(orderPopulation(event.target.value));
  };

  const handleActivity = (event) => {
    dispatch(activityFilter(event.target.value));
    console.log('Activity name:', event.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 10;
  const maxDisplayedPages = 5;

  const uniqueActivities = [...new Set(getFilterActivity.map((activity) => activity.name))];
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const pageCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const middlePage = Math.floor(maxDisplayedPages / 2);
    const pageNumbers = [];
    let startPage;
    let endPage;

    if (totalPages <= maxDisplayedPages) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= middlePage) {
      startPage = 1;
      endPage = maxDisplayedPages;
    } else if (currentPage + middlePage >= totalPages) {
      startPage = totalPages - maxDisplayedPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - middlePage;
      endPage = currentPage + middlePage;
    }

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(
        <button
          className={`${style.btn} ${currentPage === page ? style.active : ''}`}
          key={page}
          onClick={() => paginate(page)}
        >
          {page}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={style.homeConteiner}>
      <div className={style.selectList}>
        <br />
        <div>
          <div className={style.custom}>
            <select onChange={handleOrderChange}>
              <option value="A">A-Z</option>
              <option value="D">Z-A</option>
            </select>
          </div>
          <div className={style.custom}>
            <select name="continents" onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Antarctica">Antarctica</option>
            </select>
          </div>
          <div className={style.custom}>
            <select name="continents" onChange={handleOrderPopulation}>
              <option value="All">All</option>
              <option value="asc">Mayor Poblacion</option>
              <option value="desc">Menor Poblacion</option>
            </select>
          </div>
          <div className={style.custom}>
            <select name="name" onChange={handleActivity}>
              <option value="No Activity">No Activity</option>
              {uniqueActivities.map((activityName) => (
                <option key={activityName} value={activityName}>
                  {activityName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={style.pagination}>
          {currentPage > 1 && (
            <button className={style.btn} onClick={() => paginate(currentPage - 1)}>
              ⬅
            </button>
          )}

          {renderPageNumbers()}

          {currentPage < totalPages && (
            <button className={style.btn} onClick={() => paginate(currentPage + 1)}>
              ➡
            </button>
          )}
        </div>
      </div>

      <div className={style.container}>
        {pageCountries.map(({ id, name, imgFlag, continents }) => (
          <CardCountry
            key={id}
            id={id}
            name={name}
            imgFlag={imgFlag}
            continents={continents}
          />
        ))}
      </div>
    </div>
  );
};


