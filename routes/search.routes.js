const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Festival = require('../models/Festival.model')

router.get('all-festivals', async (req,res) => {
    const allFestivals = await FestivalModel.find()
    res.render('festival/all-festivals', {allFestivals});
})

module.exports = router