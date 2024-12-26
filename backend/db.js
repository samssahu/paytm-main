const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/paytm");

//Create a Schema for Users
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minlength:3,
        maxlength:30
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    }
});

//Create a model for the Schema
const User = mongoose.model('User', userSchema);


module.exports={
    User
};