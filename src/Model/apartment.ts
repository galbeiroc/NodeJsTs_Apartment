import mongoose from 'mongoose';
const { Schema } = mongoose;

const apartmSchema = new Schema({
    numApartment: { type: String, required: true  }, 
    meter: { type: Number, required: true }, 
    price: { type: Number, required: true }
});


module.exports = mongoose.model('Apartment', apartmSchema);