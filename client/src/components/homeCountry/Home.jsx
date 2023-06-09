// import { useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux"
// import { getAllCountries } from "../../redux/action";
//import CardPais from "../cardsCountry/CardsPais";
//import { useSelector } from "react-redux"
import {NavLink} from 'react-router-dom'

 export const Home = ()  =>{
//get all countries 
// const dispatch = useDispatch();
// const countries = useSelector(state => state.allCountries)
//const c = useSelector(state => state.country)
// useEffect(() => {
//     console.log(countries)
// }, [countries])

// const handleChange = () =>{
//     dispatch(getAllCountries())
// }



    return (
        <>

            <button>
                <NavLink to='/home'> HOME </NavLink>
            </button>
           
        </>
    )
}

// export default Home;