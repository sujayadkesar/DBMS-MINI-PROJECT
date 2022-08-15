const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended:true}))
const fs = require('fs');
const mongoose = require('mongoose');
const exp = require('constants');
const Bus = require('./Database/schema');
const { render } = require('express/lib/response');

const statticPath = path.join(__dirname , "views");
app.use(express.static(statticPath));



mongoose.connect('mongodb://localhost:27017/Agreeproduct'  , {useNewUrlParser: true , useUnifiedTopology : true})
.then( () => {
    console.log("MONGO DB Connection opened Keep working");

})
.catch( err => {
    console.log("Sorry some internal server error in MONGO DB.....  Please try later");
    console.log(err);
})










function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}










app.listen(4545, () =>{  
    console.log("copy this http://localhost:4545 and paste it on browser");
})



app.get('/' ,(req, res) => {
    res.render('index.html');
});

app.get('/some' , async (req , res) => {
    const tickets = await Bus.find({});
    res.render('display.ejs' , {tickets});
})



app.post('/some' , async (req, res) => {
    const newentrybus = new Bus(req.body);
    await newentrybus.save();
    res.redirect('/Alldetails')
 })

 app.get('/some/:id' , async (req , res) => {
     let { id } = req.params ;
    const details = await Bus.findById(id);
    res.render('Details.ejs' , {details});
 })


 app.get('/Alldetails' , async(req, res)=>{
    const tickets = await Bus.find({});
     res.render("index.ejs" , {tickets});
 })

 app.get('/Payments/:id' , async(req, res) => {
    let { id } = req.params ;
    const details = await Bus.findById(id);
    res.render('Payment.ejs' , {details});
 })

 function validate() {
     prompt("Make sure you submit the form before landing on to next page!!!")
 }


app.post('/some/:id' , async(req, res) => {
    const { id } = req.params; 
    const deleteduser = await Bus.findByIdAndDelete( id );
    res.redirect('/bording%20and%20destination.html')
})
    