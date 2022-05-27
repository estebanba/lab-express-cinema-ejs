const express = require('express');
const router = express.Router();

// Connects to MongoDB
require('../db')

// Requests out model
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    let allMovies = await Movie.find()
    console.log(allMovies);
    res.render('movies', { allMovies })
})

module.exports = router;
