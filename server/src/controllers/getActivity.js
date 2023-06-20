const { Activity, Country } = require("../db");
const axios = require('axios')

const getActivity = async (req,res) => {
     try {
   

    const activity = await Activity.findAll({
        include:{
            model:Country, 
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