require('dotenv').config();
const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongo_uri)
        const state = mongoose.connection.readyState;

        if (state === 1) {
            console.log("connection to database successful");
        }
        else {
            console.log("connection to database is not live, state = ", state);
        }
        
        // setTimeout(() => {
        //     console.log(mongoose.connection.readyState);
        // }, 10000)
    }
    catch (err) {
        console.log("connection to database failed", err);
    }
}

module.exports = connectToDatabase;