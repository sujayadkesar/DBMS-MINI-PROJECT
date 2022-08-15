const mongoose = require('mongoose');
const Bus = require('./Database/schema');

mongoose.connect('mongodb://localhost:27017/Agreeproduct'  , {useNewUrlParser: true , useUnifiedTopology : true})
.then( () => {
    console.log("MONGO DB Connection opened Keep working");
})
.catch( err => {
    console.log("Sorry some internal server error in MONGO DB.....  Please try later");
    console.log(err);
})



const ticket = [
    {
        Name:"name_test"
    },
    {
        Phno:12345678
    },
    {
        email:"testing@gmail.com"
    },
    {
        age:99
    },
    {
        gender:"Male-test"
    },
 {
     Bordingpoint:"Manglore"
 },
 {
     Destination:"Belagavi"
 },
 {
     Date:"29-2-2022"
 },
 {
    Departure:"6:00hr"
},
  {
      Route:"Manglore karvar Goa"
  },
  {
      Busno:01
  },
  {
  Busname:"Manglore To Goa"
  }
]


Bus.insertMany(ticket)
.then(res =>{
    console.log(res);
})
.catch(e =>{
    console.log(e);
})
