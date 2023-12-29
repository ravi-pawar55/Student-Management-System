const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to the database....");
    }).catch((error) => {
        console.log('Could not connect to the database....', error);
        process.exit(1);
    })
}

module.exports = dbConnect;