
const {Activity} = require('../db')
//const axios = require('axios')

const postActivity = async (req, res) => {

    try {
        const {name, season, difficulty, duration, countries } = req.body
        console.log(name, season, difficulty, duration, countries);

        if( !name || !season || !difficulty || !duration || !countries ) 
        return res.status(400).json({error: "No hay data"})
       
        console.log(name, season, difficulty, duration, countries);

      
         const [postactivity, isCreate] = await Activity.findOrCreate({where:{name,season, difficulty, duration}})
            console.log(name, season, difficulty, duration, countries, + '3');

            if(isCreate){
                await postactivity.addCountries(countries)//aqui insert en la tabla realcional 
                res.status(201).send('Esta Creado')
            }else{
                res.status(409).send('Ya existe')
            }
           
            
            

    } catch (error) {
        res.status(404).send(error.message)
    }
   

    
}




module.exports = postActivity;