const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantListSchema = new Schema(
    {
     idRes:{
        type: Number,
        required: true
     },
     mealType:{
        type: String,
        required: true
     },
     location:{
         type: String,
         required: true
     },
     restaurant:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    cuisine:{
        type: String,
        required: true
    },
    costforTwo:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }
    }
)


module.exports = mongoose.model('RestaurantList', RestaurantListSchema, 'RestaurantList')