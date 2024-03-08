const express = require('express');
const { fileController } = require('../controllers');
const upload = require('../middlewares/upload');
const isAuth = require('../middlewares/isAuth');
const router = express.Router();

router.post('/upload',isAuth,upload.array('image',3),fileController.uploadFile);

module.exports = router;