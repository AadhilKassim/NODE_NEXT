const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    await mongoose.connect('mongodb+srv://aadhikassim:WKlWGcgi4kEZmGG2@cluster.ph4sffp.mongodb.net/js');
    console.log('Connected to MongoDB successfully');

};

module.exports = connectToMongoDB;
