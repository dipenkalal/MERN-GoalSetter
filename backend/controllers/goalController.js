const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//get goals
//route get /api/goals
//private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//set goals
//route set /api/goals
//private
const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
    }    
    const goals = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

//update goals
//route put /api/goals
//private
// const updateGoals = asyncHandler(async (req,res) => {
//     const goals = await Goal.findById(req.params.id)
//     if(!goals){
//         res.status(400)
//         throw new Error('Goal not found');
//     }
//     const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     res.status(200).json(updatedGoal)
// })
const updateGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.findById(req.params.id);
    if (!goals) {
      res.status(404).json({
        error: "Goal not found"
      });
      return;
    }
  
    // Update the goal with the data in the request body.
    goals.text = req.body.text;
  
    // Save the updated goal to the database.
    await goals.save();
  
    // Return the updated goal.
    res.status(200).json(goals);
  });

//delete goals
//route delete /api/goals
//private
const deleteGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('Goal not found');
    }
    await goals.remove()
    res.status(200).json({
        id: req.params.id
    })
})


//exporting modules for goalRouters
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}
