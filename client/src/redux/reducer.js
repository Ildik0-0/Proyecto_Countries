import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allCountries: [],
    countries: [],
    country: {},
    activities: [],
}

export const getReducer = createSlice({
    name: 'country',
    initialState,
    reducers:{
        addCountries:(state, action) => {
            const data = action.payload;
            state.countries = data;
            state.allCountries= data;
            
        },
        getCountryId: (state, action) =>{
            const data = action.payload;
            state.country = data;

        },
        filterContinent: (state, action) =>{
           const data = action.payload;
           const allfilterContinent = state.countries.filter(country => country.continents === data)
           console.log(allfilterContinent);
           state.allCountries = data === 'All'
            ? state.countries
            : allfilterContinent
               
        },
        // orderPopulation : (state, action) =>{
        //     const data = action.payload;
        //     const sortedCountries = [...state.countries]; // Crear una copia del array de países
        //     sortedCountries.sort((a, b) => {
        //       if (data  === 'A') {
        //         return a.population - b.population;
        //       } else if (data  === 'D') {
        //         return b.population - a.population;
        //       } else {
        //         return 0;
        //       }
        //     });
          
        //     return {
        //       ...state,
        //       countries: sortedCountries,
        //     };
        // }
        orderAsenDen: (state, action) =>{
            const data = action.payload;
            const allCountriesCopy = [...state.countries]
            state.allCountries = data ==='A'
            ? allCountriesCopy.sort((a, b) => a.name.localeCompare(b.name))
            : allCountriesCopy.sort((a, b) => b.name.localeCompare(a.name))
            console.log(state.allCountries)
        },
        
    }
});

export const {addCountries, getCountryId, filterContinent, orderPopulation, orderAsenDen} = getReducer.actions;
export default getReducer.reducer;