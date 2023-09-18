const mongoose = require('mongoose');
const { Schema } = mongoose;


const ItinerarySchema = new Schema({
  
user:{
        type: mongoose.Schema.Types.ObjectId,
ref: 'user'
    }, 
pkg_name: { type: String, required: true },
duration: { type: String, required: true },
no_of_pax: { type: Number, required: true },
pkg_price: { type: Number, required: true },
pkg_category: { type: String, required: true },
pickup: { type: String, required: true },
drop: { type: String, required: true },
cab: { type: String, required: true },
accommodation: { type: String, required: true },
places_covered: { type: String, required: true },
itinerary: [
  {
    title: { type: String, required: true },
    meals: { type: String, required: true },
    description: { type: String, required: true },
  },
],
});


const itinerary = mongoose.model('note', ItinerarySchema);
module.exports =itinerary