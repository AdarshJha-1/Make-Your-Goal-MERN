const express = require('express')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT
const {errorHandler} = require('./middleware/error.middleware')
const goalsRouter = require('./routes/goal.routes.js')

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use('/api/goals', goalsRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Server is running at PORT', PORT);
})
