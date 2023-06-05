//common js module syntax
const express = require('express')
const router = express.Router()
const {getGoals,setGoals,putGoals,deleteGoals, updateGoals} =require('../controllers/goalController')

//router for get and post request
router.route('/').get(getGoals).post(setGoals)

//router for put request and delete request but we require an id for updating specific value or field
router.route('/:id').get(updateGoals).post(deleteGoals)
module.exports = router