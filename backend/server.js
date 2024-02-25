const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require('cors')
const PORT = process.env.PORT;
const connectDB = require("./config/db.js");
const { errorHandler } = require("./middleware/error.middleware");
const goalRouter = require("./routes/goal.routes.js");
const userRouter = require("./routes/user.routes.js");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
app.use("/api/goals", goalRouter);
app.use("/api/user", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running at PORT", PORT);
});
