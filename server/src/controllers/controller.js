const axios = require ("axios");
const { Country } = require("../db");





const getApiInfo = async (req, res) => {
    try{
    const {data} = await axios.get('http://localhost:5000/countries')
    let countriesArray = await Promise.all(
      data.map(async (element) => {
        const country = {
          id: element.cca3,
          name: element.name.common,
          imgFlag : element.flags.png,
          continents : element.continents[0],
          capital : element.capital ? element.capital[0] : "No data",
          subregion : element.subregion,
          area : element.area,
          population: element.population,   
      }
      Country.findOrCreate({
            where: {
                id: element.cca3,
              },
              defaults: {
                name: element.name.common,
                imgFlag: element.flags.png,
                continents: element.continents[0],
                capital: element.capital ? element.capital[0] : "No data",
                subregion: element.subregion ? element.subregion : "No data",
                area: element.area,
                population: element.population,
              }
        })
        return country;
    })

    )
    
    
    return res.status(200).json(countriesArray)


    }catch (error){
        res.status(500).json(error.message)
       
    }
}

module.exports = {getApiInfo}



