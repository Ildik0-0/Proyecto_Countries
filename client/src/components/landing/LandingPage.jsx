//import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addCountries } from '../../redux/reducer';
import { useSelector } from 'react-redux';
import {filterContinent} from '../../redux/reducer'
//import {orderPopulation} from '../../redux/reducer';
import {orderAsenDen} from '../../redux/reducer';
import axios from 'axios';

import style from '../landing/landingPage.module.css'
import  CardCountry  from '../cardCountry/CardCountry';
//import PropTypes from 'prop-types';

export const LandingPage = ()  =>{
const URL =  'http://localhost:3001/countries'
    //const c = useSelector(state => state.countries)
    const dispatch = useDispatch()

    const countries = useSelector(state=>state.country.allCountries)
    useEffect(()=>{
        const getall= async()=>{
            try {
                const {data} = await axios(URL)
                console.log(data)
                dispatch(addCountries(data))
                 console.log(countries)
            } catch (error) {
                throw error.message
            }
        }
        getall();
        
    },[])

    //console.log(countries[1].name)
    // useEffect(() => {
    //     console.log(countries);
    // },[countries])

  

  const handleFilterChange = (event) => {
    dispatch(filterContinent(event.target.value));
  };

  const handleOrderChange = (event) => {
    dispatch(orderAsenDen( event.target.value));
  };

    return (
        <>

            <h1>Lista De Pais</h1>

                <div >
                <select onChange={handleOrderChange}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                    <select name='continents' onChange={handleFilterChange}>
                        <option value="All">All</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                    </select>
                </div>
            
           <div className={style.conteiner}>

                {/* <div className={style.card}> */}
                    {
                        countries.map(({id, name, imgFlag, continents}) =>{
                            
                            return (
                                <CardCountry 
                                    key={id}
                                    id={id}
                                    name={name}
                                    imgFlag={imgFlag}
                                    continents={continents}
                                />
                            )
                        })
                    }
                {/* </div> */}
        
            </div>
        
        </>
    )
}
