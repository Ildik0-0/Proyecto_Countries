import {
    GET_COUNTRIES,
    GET_COUNTRY,
    ORDER_COUNTRIES,
    GET_COUNTRY_NAME,
    ORDER_POPULATION,
    FILTER_CONTINENT,
    POST_ACTIVITIES,
    DELETE_ACTIVITY,
    FILTER_ACTIVITY
} from './action-types'

const initialState = {
    allCountries: [],
    countries: [],
    country: {},
    activities: [],
    //activity: [],
}

const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
            }

        case POST_ACTIVITIES:
            return {
                ...state,
            }


        case ORDER_COUNTRIES:
            return {
                ...state,
                countries:
                    state.payload === 'A' //ascedente
                        ? state.countries.sort((a, b) => a.name - b.name)
                        : state.countries.sort((a, b) => b.name - a.name)
            }
        case ORDER_POPULATION:{
            const sortPopulation = [...state.allCountries]
            // ? state.countries.sort((a, b) =>{
            //     if(a.population > b.population){
            //         return 1;
            //     }
            //     if(b.population > a.population){
            //         return -1;
            //     }
            //     return 0;
            // })
            // : state.countries.sort((a, b) =>{
            //     if(a.population > b.population){
            //         return -1;
            //     }
            //     if(b.population > a.population){
            //         return 1;
            //     }
            //     return 0;
            // })

            return {
                ...state,
                countries:
                    action.payload === 'A'
                        ? sortPopulation.sort((a, b) => a.population - b.population)
                        : sortPopulation.sort((a, b) => b.population - a.population)
            }
        }

        case GET_COUNTRY_NAME:
            return {
                ...state,
                countries: action.payload
            }

        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER_CONTINENT:{
            const allCountries = action.allCountries;
            const contiFilter = action.payload === 'All'
                ? allCountries
                : allCountries.filter(element => action.payload.includes(element.continents))
            return {
                ...state,
                countries: contiFilter
            }
        }
        //VEREMOS
        case FILTER_ACTIVITY: {
            const idsCountries = action.payload.split(",");
      
            const allCountries = state.allCountries;
            const filterActivity = allCountries.filter((country) =>
              idsCountries.includes(country.id)
            );
      
            return {
              ...state,
              countries: filterActivity,
            };
          }
        default:
            return {
                ...state
            };
    }
}

export default getReducer;