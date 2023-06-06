const { Router } = require('express');


const getApiInfo = require('../controllers/controller');
const getCountryId = require('../controllers/getCountryId');
const getCountryName = require('../controllers/getCountryName');
const postActivity = require('../controllers/postActivity');
const getActivity = require('../controllers/getActivity');
//const {Country, Activity} = require('../db')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", getApiInfo);
router.get("/countries/name", getCountryName)




router.get("/activities", getActivity)
router.post("/activities", postActivity)

router.get("/countries/:id", getCountryId)
module.exports = router

