
const {Activity} = require('../db')
const axios = require('axios')

const postActivity = async (req, res) => {

    try {
        // const activity = await axios.get('http://localhost:5000/countries')
        // const activities = activity.data.map(element => element.activities)
        // const eachActivity = activities.map(element => {
        //     for (let i = 0; i < element.length; i++) return element[i]
        //     console.log(eachActivity);
        // })
        // eachActivity.forEach(element =>{
        //     Activity.findOrCreate({
        //         where:{name: element}
        //     })
        // })
        // const allActivity = await Activity.findAll()
        // res.send(allActivity)

        const {id, name, season, difficulty, duration } = req.body
        const [postActi, isCreate] = await Activity.findOrCreate({where:{name}, 
            defaults:{name, season, difficulty, duration}})
              
            if(isCreate){
               return res.status(200).send('Esta Creado')
            }else{
              return  res.status(409).send('Ya existe')
            }
    } catch (error) {
        res.status(500).send(error.message)
    }
   

    
}




module.exports = postActivity;