const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

// Import Controller
const LoginRegisterController = require('../Controller/LoginRegisterController');
const PaymentController = require('../Controller/PaymentController');
const RestaurantListController = require('../Controller/RestaurantListController');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Creating router for controller
router.get('/login/:username', LoginRegisterController.Login)
// router.get('/getData', LoginRegisterController.getData);
// router.post('/userDetails', LoginRegisterController.postUserDetails);
router.get('/restaurantList', RestaurantListController.getRestaurantList);
router.post('/payment', PaymentController.PostPayment);



module.exports = router;