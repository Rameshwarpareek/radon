const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



//create first api
router.post('/createBook', BookController.createBook )
router.get('/bookList',BookController.bookList)
router.post('/getBooksInYear',BookController.getBooksInYear)
router.get('/getXINRBooks',BookController.getXINRBooks)
router.get('/getRandomBooks',BookController.getRandomBooks)
router.post('/getParticularBooks',BookController.getParticularBooks)
module.exports = router;