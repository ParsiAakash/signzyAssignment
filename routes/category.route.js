const express = require('express');
const router = express.Router();

// require the controller
const categoryController = require('../controllers/category.controller');


// Route defined to operate on category
router.get('/listOfCategories', categoryController.listOfCategories);

router.post('/addCategory', categoryController.addCategory);

router.post('/editCategory', categoryController.editCategory);

router.delete('/deleteCategory', categoryController.deleteCategory);

module.exports = router;
