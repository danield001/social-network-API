const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/usersPosts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Export the connection
module.exports = db;
