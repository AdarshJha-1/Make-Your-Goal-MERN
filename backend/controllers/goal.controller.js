const asyncHandler = require("express-async-handler");

// @decs    Get goals
// @route   GET /api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});

// @decs    Set goals
// @route   POST /api/goals
// @access  private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text filed");
  }
  res.status(200).json({
    message: "Set goals",
  });
});

// @decs    Update goals
// @route   PUT /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update Goal ${req.params.id}`,
  });
});

// @decs    Delete goals
// @route   DELETE /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
