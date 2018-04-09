var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('notes', NoteSchema);