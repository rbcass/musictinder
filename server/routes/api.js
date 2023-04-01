const express = require('express');
const router = express.Router();
const FormModel = require('../models/formModel');

router.post('/submit-form', (req, res) => {
  const { name, type, genre, instrument, url, about, p_type, p_genre, p_instrument, matches } = req.body;
  const formData = new FormModel({
    name,
    type,
    genre,
    instrument,
    url,
    about,
    p_type,
    p_genre,
    p_instrument,
    matches
  });
  formData.save()
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to submit form', error: err });
    });
});

module.exports = router;