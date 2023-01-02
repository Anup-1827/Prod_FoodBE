const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

// Import Controller
const PaymentController = require('../Controller/PaymentController');
const RestaurantListController = require('../Controller/RestaurantListController');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Creating router for controller
router.get('/restaurantList', RestaurantListController.getRestaurantList);
router.post('/payment', PaymentController.PostPayment);



module.exports = router;