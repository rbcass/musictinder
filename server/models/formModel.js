const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  genre: { type: String, required: true },
  instrument: { type: String, required: true },
  url: { type: String, required: true },
  about: { type: String, required: true },
  p_type: { type: String, required: true },
  p_genre: { type: String, required: true },
  p_instrument: { type: String, required: true },
  matches: { type: Array, required: true }
});

module.exports = mongoose.model('FormModel', FormSchema);