const router = require('express').Router();
const { model } = require('mongoose');
const bookModel = require('../models/book_model');
router.post('/book',async(req,res)=>{
const book={
    title:req.body.title,
    author:req.body.author,
    isbn:req.body.isbn,
}
let bookdb=await bookModel.create(book)
bookdb.save();
res.send("Book Uploaded");
console.log("boook uploaded")
})
router.get("/",async(req,res)=>{
    const books=await bookModel.find();
    if(books)
    res.send(books);
    else{
        res.send("Books Not Found");
    }

});
router.get("/:id",async (req,res)=>{
   
    const book= await bookModel.findOne({isbn:req.params.id});
    console.log(book);
    res.send(book);
})
router.delete("/:id",async (req,res)=>{
    const book=bookModel.deleteOne({isbn:req.params.id}).then(function (){console.log("Book deleted Succesfully");  res.send("Book deleted Successfully");})
  
})
module.exports=router;