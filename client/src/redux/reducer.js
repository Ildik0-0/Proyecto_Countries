import {GET_COUNTRIES, POST_ACTIVITY, GET_ACTIVITY} from './action-types'

const initialState ={
  allCountries: [],
  countries: [],
  country: {},
  activities: [],
  activity: [],
}

const getReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
          return {
              ...state, 
              countries: action.payload,
              allCountries: action.payload
        }
        case POST_ACTIVITY:
            return{
                ...state,
            }
    
            case GET_ACTIVITY:
                return{
                    ...state,
            }

        default:
            return{
                ...state
            };
    }
}

export default getReducer;