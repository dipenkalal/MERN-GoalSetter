//server code run by 'npm run server'
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000 
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()


connectDB()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


//this request goes to the GoalRoutes.js and looks into it 
app.use('/api/goals',require('./routes/GoalRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server strated on port ${port}`))