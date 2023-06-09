// //import {NavLink} from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { addCountries } from '../../redux/reducer';
// import { useSelector } from 'react-redux';
// //import { useState } from 'react';
// import {filterContinent} from '../../redux/reducer'
// import { Pagination } from '../pagination/Pagination';
// //import {orderPopulation} from '../../redux/reducer';
// import {orderAsenDen} from '../../redux/reducer';
// import axios from 'axios';

// import style from '../landing/landingPage.module.css'
// import  CardCountry  from '../cardCountry/CardCountry';
// //import PropTypes from 'prop-types';

// export const LandingPage = ()  =>{
// const URL =  'http://localhost:3001/countries'
//     //const c = useSelector(state => state.countries)
//     const dispatch = useDispatch()

//     const countries = useSelector(state=>state.country.allCountries)
    
//     useEffect(()=>{
//         const getall= async()=>{
//             try {
//                 const {data} = await axios(URL)
//                 console.log(data)
//                 dispatch(addCountries(data))
//                  console.log(countries)
//             } catch (error) {
//                 throw error.message
//             }
//         }
//         getall();
        
//     },[])

//     //console.log(countries[1].name)
//     // useEffect(() => {
//     //     console.log(countries);
//     // },[countries])

  

//   const handleFilterChange = (event) => {
//     dispatch(filterContinent(event.target.value));
//   };

//   const handleOrderChange = (event) => {
//     dispatch(orderAsenDen( event.target.value));
//   };

  

  

//     return (
//         <>

           

                
//                 <div >
//                     <br />
//                 <h1>Lista De Pais</h1>
                
//                 <select onChange={handleOrderChange}>
//                     <option value="A">A-Z</option>
//                     <option value="D">Z-A</option>
//                 </select>

//                     <select name='continents' onChange={handleFilterChange}>
//                         <option value="All">All</option>
//                         <option value="North America">North America</option>
//                         <option value="South America">South America</option>
//                         <option value="Oceania">Oceania</option>
//                         <option value="Asia">Asia</option>
//                         <option value="Europe">Europe</option>
//                     </select>
//                 </div>
//            <div className={style.conteiner}>
           
            
//                 {/* <div className={style.card}> */}
                
//                     {
//                         countries.map(({id, name, imgFlag, continents}) =>{
                            
//                             return (
//                                 <CardCountry 
//                                     key={id}
//                                     id={id}
//                                     name={name}
//                                     imgFlag={imgFlag}
//                                     continents={continents}
//                                 />
//                             )
//                         })
//                     }
//                 {/* </div> */}
        
//             </div>
        
//         </>
//     )
// }

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addCountries } from '../../redux/reducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { filterContinent } from '../../redux/reducer';
import { orderAsenDen } from '../../redux/reducer';
import {orderPopulation} from '../../redux/reducer';
import axios from 'axios';

import style from '../landing/landingPage.module.css';
import CardCountry from '../cardCountry/CardCountry';

export const LandingPage = () => {
  const URL = 'http://localhost:3001/countries';
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.allCountries);
  
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios(URL);
        dispatch(addCountries(data));
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

  // Paginación
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const pageCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
    console.log(countries);
  const totalPages = Math.ceil(countries.length / countriesPerPage);
    console.log(pageCountries);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <br />
        <h1>Lista De País</h1>

        <select onChange={handleOrderChange}>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>

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
        
        <select name="continents" onChange={handleOrderPopulation}>
          <option value="All">All</option>
          <option value="asc">Mayor Poblacion</option>
          <option value="desc">Menor Poblacion</option>
          
        </select>
        {/* <div className={style.container}> */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          ))}
            {/* </div> */}
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
    </>
  );
};

