const mongoose = require('mongoose');
const {connectionUrl} = require('../config/keys');
const connectMongodb = async ()=>{
    try {
        await mongoose.connect(connectionUrl);
        console.log('Database connection established successfully')

        
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = connectMongodb;