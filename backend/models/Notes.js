const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
    user : {type : mongoose.Schema.Types.ObjectId , ref : 'user'},
    Title : {type: String , required : true},
    Task : {type: String , required : true},
    Tag : {type: String  , default : 'Work'},
    Date : {type: Date , default: Date.now},
  });

  module.exports = mongoose.model('notes',NotesSchema);