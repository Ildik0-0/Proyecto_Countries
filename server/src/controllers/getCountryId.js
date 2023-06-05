const {Country} = require('../db')

const getCountryId = async (req, res) => {
    
    const {id} = req.params

    try{

        const country = await Country.findByPk(id)
        
        res.status(200).json(country)
    }catch (error){
        res.status(500).json(error.message)
    }
    

}

module.exports = getCountryId