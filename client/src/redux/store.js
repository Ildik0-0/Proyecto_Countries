import {configureStore} from '@reduxjs/toolkit'
import countryReducer from './reducer'
//import activityReducer from './activitySlide'

export const store = configureStore({
    reducer:{
        country: countryReducer,
        //activity: activityReducer,       
    }
})