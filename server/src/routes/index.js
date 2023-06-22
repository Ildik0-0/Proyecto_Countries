const { Router } = require('express');


const {getApiInfo} = require('../controllers/controller');
const getCountryId = require('../controllers/getCountryId');
const getCountryName = require('../controllers/getCountryName');
const postActivity = require('../controllers/postActivity');
const getActivity = require('../controllers/getActivity');



const router = Router();



router.get("/countries", getApiInfo);
router.get("/countries/name", getCountryName)




router.get("/activities", getActivity)
router.post("/activities", postActivity)

router.get("/countries/:id", getCountryId)
module.exports = router

