const express = require('express')
const app = express()

const todoController = require('./controllers/todoController.js')

//set template
//embedded js
app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//controllers
todoController(app)

app.listen(3000, () =>{
    console.log("Server is up and running")
})