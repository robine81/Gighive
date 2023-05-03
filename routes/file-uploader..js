/* const express = require('express');
const router  = express.Router();
const uploader = require('../middleware/cloudinary.config.js');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
     console.log('file is: ', req.file)
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    //You will get the image url in 'req.file.path'
    //store that in the DB  
})

module.exports = router; */