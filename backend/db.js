const mongoose = require('mongoose');
const mongoURI = 'mongodb://0.0.0.0:27017';

const connecttomongo = async()=>{

    mongoose.connect(mongoURI)
    {
        console.log("I am Running MOnggose");
    }
}

module.exports = connecttomongo;    