const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    taste: {
        type: String,
        require: true,
        enum: ['Spicy', 'Sweet', 'Sour']
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;