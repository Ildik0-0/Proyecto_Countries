
const {Activity} = require('../db')


const postActivity = async (req, res) => {

    try {
        const {name, season, difficulty, duration, countries } = req.body
    

        if( !name || !season || !difficulty || !duration || !countries ) 
        return res.status(400).json({error: "No hay data"})
       
      

      
         const [postactivity, isCreate] = await Activity.findOrCreate({where:{name,season, difficulty, duration}})
          

            if(isCreate){
                await postactivity.addCountries(countries)
                res.status(201).send('Esta Creado')
            }else{
                res.status(409).send('Ya existe')
            }
           
            
            

    } catch (error) {
        res.status(404).send(error.message)
    }
   

    
}




module.exports = postActivity;