const axios = require ("axios");
const { Country } = require("../db");
//const e = require("express");







const getApiInfo = async (req, res) => {
    try{
    const {data} = await axios.get('http://localhost:5000/countries')
    let countriesArray = [];

        data.forEach(element => {
            const country = {
                id: element.cca3,
                name: element.name.common,
                imgFlag : element.flags.png,
                continent : element.continents[0],
                capital : element.capital ? element.capital[0] : "No data",
                subregion : element.subregion,
                area : element.area,
                population: element.population,   
            }
            countriesArray.push(country)
        })
        Country.bulkCreate(countriesArray)
        return res.status(200).json(countriesArray)


    }catch (error){
        res.status(500).json(error.message)
       
    }
}

module.exports = getApiInfo