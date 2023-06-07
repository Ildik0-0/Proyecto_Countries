const axios = require('axios');
const {Country} = require('../db')
const {Op} =require('sequelize')

const getCountryName = async (req,res) => {
    const {name} = req.query

    try {
        // const {data} = await axios.get('http://localhost:5000/countries')
        // const apiCountry = data.filter(element => element.name.toLoweCase().includes(name.toLoweCase()))
        const searchCountry = await Country.findAll({where: {name:{[Op.iLike]:`%${name}%`}}})

        if(!searchCountry.length){
            return res.status(404).json({error: 'No existe Mijo'})
        }
        

        return res.status(200).json(searchCountry)

    } catch (error) {
        res.status(400).json(error.message)
        
    }
}


module.exports = getCountryName