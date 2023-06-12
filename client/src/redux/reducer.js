import { createSlice} from '@reduxjs/toolkit'




const initialState = {
    allCountries: [],
    countries: [],
    country: {},
    activity: {},
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
        orderPopulation : (state, action) =>{
            const data = action.payload;
            state.allCountries = [...state.allCountries]
              .sort((a, b) => b.population - a.population);
            if (data === 'desc') {
              state.allCountries.reverse();
            }
          },
        orderAsenDen: (state, action) =>{
            const data = action.payload;
            const allCountriesCopy = [...state.allCountries]
            state.allCountries = data ==='A'
            ? allCountriesCopy.sort((a, b) => a.name.localeCompare(b.name))
            : allCountriesCopy.sort((a, b) => b.name.localeCompare(a.name))
            console.log(state.allCountries)
        },

        
        getCountryName: (state, action) => {
            const data = action.payload;
            state.countries = data;
            state.allCountries = data;
            // // state.allCountries.filter(country =>
            //   country.name.toLowerCase().includes(data.toLowerCase())
            //   );
          },
          // postActivity:(state, action) =>{
          //   const data = action.payload;
          //   state.activities = data
          // },
          
          getActivity: (state, action) => {
            const data = action.payload;
            state.activities = data
        } ,

        activityFilter: (state, action) =>{
          const data = action.payload
            const activitiesCopy = state.activities.filter(activity => activity.name ===data)
            let countriesID = []
            activitiesCopy.map(activity=> activity.Countries.map(country=> countriesID.push(country.id)))
            const countriesFilteredByActivity = state.countries.filter(country=> countriesID.includes(country.id))
            state.allCountries = data === 'No Activity'
            ? state.countries
            : countriesFilteredByActivity
        }
          
          
          
        
    },
});

export const {  addCountries, getCountryId, 
                filterContinent, orderPopulation,
                orderAsenDen, extraReducers, getCountryName, postActivity, getActivity, activityFilter} = getReducer.actions;
export default getReducer.reducer;