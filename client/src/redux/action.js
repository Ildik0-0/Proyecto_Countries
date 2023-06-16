// import {
//     GET_COUNTRIES,
//     GET_COUNTRY,
//     ORDER_COUNTRIES,
//     GET_COUNTRY_NAME,
//     ORDER_POPULATION,
//     FILTER_CONTINENT, 
//     POST_ACTIVITIES,
//     DELETE_ACTIVITY,
//     FILTER_ACTIVITY} from './action-types'
//    import axios from 'axios'

//     export const getAllCountries = () => {
//         const endpoint = 'http://localhost:3001/countries'
//         return async (dispatch) =>{
//             try {
//                 const {data} = await axios.get(endpoint)

//                 if(!data.lenght) throw new Error('No hay Paises')

//                 return dispatch({
//                     type:GET_COUNTRIES,
//                     payload: data
//                 })
                
//             } catch (error) {
//                 console.log(error.message);
//             }
//         }
//     }
//     // export function getAllCountries() {
//     //     return async function (dispatch) {
//     //       const response = await axios("http://localhost:3001/countries");
//     //       return dispatch({
//     //         type: GET_COUNTRIES,
//     //         payload: response.data, // La respuesta contiene todos los Pokémon obtenidos desde la API
//     //       });
//     //     };
//     //   }

//     // export const getAllCountries = () => {
//     //     return async function (dispatch) {
//     //         const dbData = await axios.get("http://localhost:3001/countries");
//     //         const countries = dbData.data.allCountries;
//     //         dispatch({ type: GET_COUNTRIES, payload: countries });
//     //     }
//     // }
   

//     export const postActivity = (activity) => {
//         const endpoint = 'http://localhost:3001/activities'
//         return async (dispatch) =>{
//             try {
//                 const {data} = await axios.post(endpoint, activity)

//                 if(!data.lenght) throw new Error('No hay Actividades')

//                 return dispatch({
//                     type:POST_ACTIVITIES,
//                     payload: data
//                 })
                
//             } catch (error) {
//                 console.log(error.message);
//             }
//         }
//     }


//     export const deleteActivity = (id) => {
//         const endpoint = `http://localhost:3001/activities/${id}`
//         return async (dispatch) => {
//             try {
//                 const {data} = await axios.delete(endpoint)
//                 return dispatch({
//                     type:DELETE_ACTIVITY,
//                     payload: data
//                 })
//             } catch (error) {
//                 console.log(error.message);
//             }
//             }
//         }
    

//     export const filterActivities = (activity) => {
//         return {
//             type:FILTER_ACTIVITY,
//             payload: activity
//         }
//     }
//     export const filterContinet = (order) =>{
//         return {
//             type:FILTER_CONTINENT,
//             payload: order
//         }
//     }

//     export const orderPopulation = (order) =>{
//         return {
//             type:ORDER_POPULATION,
//             payload: order
//         }
//     }

//     export const orderCountries= (name) =>{
//         return {
//             type:ORDER_COUNTRIES,
//             payload: name
//         }
//     }
//     export const getCountry = (country) =>{
//         return {
//             type:GET_COUNTRY,
//             payload: country
//         }
//     }
//     export const serachCountry = (name) =>{
//         return {
//             type:GET_COUNTRY_NAME,
//             payload: name
//         }
//     }