const mongoose = require('mongoose');
const { Schema } = mongoose;


const ItinerarySchema = new Schema({
    pkg_name:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    no_of_pax:{
        type: String,
        required: true
    },
    pkg_price:{
        type: String,
        required: true
    },
    pkg_category:{
        type: String,
        required: true
    },
    pickup:{
        type: String,
        required: true
    },
    drop:{
        type: String,
        required: true
    },
    cab:{
        type: String,
        required: true
    },
    
});