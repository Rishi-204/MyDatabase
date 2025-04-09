const mongoose = require('mongoose');

// Define the person Schema
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    salary: {
        type:Number,
        required: true
    }
});

// Create Person Model
const Person = mongoose.model('Person', personschema);
module.exports = Person;