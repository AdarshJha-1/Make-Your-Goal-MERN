const asyncHandler = require("express-async-handler");
const Goal = require('../models/goal.model')
// @decs    Get goals
// @route   GET /api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals);
});

// @decs    Set goals
// @route   POST /api/goals
// @access  private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text filed");
  }

  const goal = await Goal.create({
    text: req.body.text
  })

  res.status(200).json(goal);
});

// @decs    Update goals
// @route   PUT /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = Goal.findById(req.params.id);
  if(!goal){
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json({
    updatedGoal
  });
});

// @decs    Delete goals
// @route   DELETE /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = Goal.findById(req.params.id);
  if(!goal){
    res.status(400);
    throw new Error("Goal not found");
  }
  const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({
    id: req.params.id
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
