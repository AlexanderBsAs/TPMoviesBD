const express = require('express');
const router = express.Router();
const{ list,detail,nuevo,recommended} = require('../controllers/moviesController');

router.get('/movies', list);
router.get('/movies/detail/:id', detail);
router.get('/movies/new', nuevo);
router.get('/movies/recommended', recommended);


module.exports = router;