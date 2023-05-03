const express = require('express')
const router = express.Router()

// Require the Festival model in order to interact with the database
const Festival = require('../models/Festival.model')

/* GET Search page */


router.get('/', async (req, res, next) => {
  try { 
    const {query} = req.query
    const allFestivals = await Festival.find({ name: query })
    console.log(allFestivals);
    res.render('search-result', {allFestivals});
  } catch(error) {
    console.error(error);
  }
})

module.exports = router