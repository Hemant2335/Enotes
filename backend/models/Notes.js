const mongoose = require('mongoose');
const Schema = require('mongoose');

const NotesSchema = new Schema({
    Title : {type: String , required : true},
    Task : {type: String , required : true},
    Tag : {type: String  , default : 'Work'},
    Date : {type: Date , default: Date.now},
  });

  module.exports = mongoose.model('notes',NotesSchema);