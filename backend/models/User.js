const mongoose = require('mongoose');
const {Schema} = mongoose;

// In this we have imported Schema to use it 
// and when we export the user it saves the data in the db

const UserSchema = new Schema({
    Name : {type: String , required : true},
    Email : {type: String , required : true , unique : true},
    Password : {type: String , required : true},
    Date : {type: Date , default: Date.now},
  });

const User  = mongoose.model('User',UserSchema);
module.exports = User;