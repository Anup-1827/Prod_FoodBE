const RestaurantListModel = require('../Model/RestaurantList');

exports.getRestaurantList = (req, res)=>{
    RestaurantListModel.find().then(
        (result)=>{
            res.status(200).json({
                list: result
            })
        }
    )
    .catch(
        (err)=>{
            res.status(500).json({
                message: "Could not find the restaurant list",
                error: err.toString()
            })
        }
    )
}