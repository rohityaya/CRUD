const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    image:{
        type:String,
        require:false
    },
    name:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true 
    },
    phone:{
        type : String,
        require: true 
    },
    address:{
        type : String,
        require: true 
    },
    salary:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model('Employee',employeeSchema)

