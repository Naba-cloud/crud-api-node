const mongoose=require('mongoose');
const connection = mongoose.connect(`mongodb+srv://Naba:${'password'}@book-app.yocvdoo.mongodb.net/?retryWrites=true&w=majority`).then(()=>{console.log("Connected To Mongodb")},err=>console.log(err));
module.exports.connection=connection;