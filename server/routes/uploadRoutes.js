const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const authMiddleware=require('../middleware/authMiddleware');
const { uploadImage } = require('../controllers/uploadController');

router.post('/upload', authMiddleware, upload.single('image'), uploadImage);

module.exports = router;
