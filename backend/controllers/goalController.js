const asyncHandler = require('express-async-handler')

//get goals
//route get /api/goals
//private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})

//set goals
//route set /api/goals
//private
const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
    }    

    res.status(200).json({
        message: 'set Goals'
    })
})

//update goals
//route put /api/goals
//private
const putGoals = asyncHandler(async (req,res) => {
    res.status(200).json({
        message: `Update Goals ${req.params.id}`
    })
})

//delete goals
//route delete /api/goals
//private
const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({
        message: `Delete Goals ${req.params.id}`
    })
})


//exporting modules for goalRouters
module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals,
}
