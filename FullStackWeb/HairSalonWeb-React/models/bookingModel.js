
const mongoose = require('mongoose');



// Schemas and Models
const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    service: { type: String, required: true },
    stylist: { type: String, required: false },
  });
  
  
module.exports = mongoose.model('Booking', BookingSchema);