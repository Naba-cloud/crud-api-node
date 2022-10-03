const mongoose=require('mongoose');
const db=require('../config/db');
const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    isbn:{
        type:Number,
        required:true
    },
    author:{
        type:String
    }
})
const bookmodel=mongoose.model('books',bookSchema);
module.exports=bookmodel;