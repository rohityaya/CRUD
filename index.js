//module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')


//custom files
const route = require('./routes/routes');

//app
const app = express()

//static file
app.use(express.static(path.join(__dirname,'public')))

//add middleware
app.use(bodyParser.urlencoded({extended: true}));

//connect db
mongoose.connect("mongodb://127.0.0.1:27017/employee")
        .then(()=> console.log("database connection established"))
        .catch(err => console.log(err.message))

//view
app.set('view engine' , 'ejs')

//routes
app.use(route)


//port
const PORT = process.env.PORT || 4000;


//server listen
app.listen(PORT,() =>{
    console.log(`Server is running on PORT :${PORT}`);
})