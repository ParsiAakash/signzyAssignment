const express = require('express');
const router = express.Router();

// require the controller
const deviceController = require('../controllers/device.controller');


// Routes defined to operate on devices 
router.get('/categoryWiseDevices', deviceController.categoryWiseDevices);

router.post('/addDevice', deviceController.addDevice);

router.post('/editDevice', deviceController.editDevice);

router.delete('/deleteDevice', deviceController.deleteDevice);

module.exports = router;
