const mongoose = require('mongoose');

const busSchema = new mongoose.Schema ({

    Name: {
        type:String
    },
    Phno:{
        type:Number
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    Bordingpoint:{
        type:String,
        enum:["Manglore" ,"Udupi" , "SUIET Mukka"]
      
    },
    Destination:{
        type: String,
        enum:["Belagavi" , "Banglore" , "Goa"]
        
    },
    Date:{
        type:String
    },
    Departure:{
        type:String,
        enum:["6:00hr" , "15:30hr" , "23:30hr"]
    },
    Route:{
        type:String,
        enum:["Manglore karvar Goa" , "Manglore Hubli Belagavi" , "Manglore Madikeri Banglore"]
    },
    Busno:{
        type:Number,
        enum:[01,02,03]

    },
    Busname:{
        type:String,
        enum:["Manglore To Goa" , "Manglore to Belagavi" , "Manglore To Banglore"]
    },
    

    
})


const Bus = mongoose.model('Bus' , busSchema);
module.exports = Bus;