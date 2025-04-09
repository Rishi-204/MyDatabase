const mongoose = require('mongoose');

// Define MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017/mydatabase'

// Set up MongoDB Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the Default Connection
const db = mongoose.connection;

// Define Event Listener for databse Connection
db.on('connected', () => {
    console.log('MongoDB Connected');
});

db.on('erroe', (err) => {
    console.log('MongoDB Connection Error', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export to database Connection
module.exports = db;