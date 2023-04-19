const mongoose = require('mongoose');
const mongoURI = 'mongodb://0.0.0.0:27017/enotes';

// A Simple Boiler plate code .

const connecttomongo = async()=>{

    mongoose.connect(mongoURI)
    {
        console.log("I am Running MOnggose");
    }
}

module.exports = connecttomongo;    