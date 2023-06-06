const { Activity, Country } = require("../db");
const axios = require('axios')

const getActivity = async (req,res) => {
     try {
    //     const activity = await axios.get('http://localhost:5000/countries')
    
    //     const countries = activity.data.map(element => element.name.common)
    //     const eachActivity = countries.map(element => {
    //         for (let i = 0; i < element.length; i++) return element[i]
    //     })
    //     console.log(eachActivity);
    //     eachActivity.forEach(element =>{
    //         Activity.findOrCreate({
    //             where:{name:element}
                
    //         }, {defaults:{ season, difficulty, duration}})
    //     })
    //     const allActivity = await Activity.findAll()
    //     res.send(allActivity)

    const activity = await Activity.findAll({
        include:{
            model:Country, 
            //as:'Countries',
            atributes: ["id","name"],
            through:{ atributes:[]}
        },
    })
    if(activity){
        res.status(200).json(activity)
    }else{
        res.status(404).json('No se encuentra actividad mijo')
    }


    } catch (error) {
        res.status(500).send(error.message)
    }
    

}






module.exports = getActivity