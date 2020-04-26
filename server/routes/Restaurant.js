const router = require("express").Router();
const RestaurantModel = require("../models/Restaurant");
const OrderModel = require("../models/Order");

router.get("/restaurant/search/:name", function(req, res) {
    RestaurantModel.find({'name' : { '$regex' : req.params.name, '$options' : 'i' } }).then(function (restaurant) {
        res.json(restaurant); 
    });
});

router.get("/restaurant", function(req, res) {
    RestaurantModel.find().then(function (restaurant) {
        res.json(restaurant); 
    });
});

router.post("/restaurant", function(req,res) {
    const Restaurant = new RestaurantModel(req.body);
    Restaurant.save(function (error, document) {
        if (error) {
            return console.log(error);
        }
        return res.json({
            success:true
        });
    }); 
});

router.get("/restaurant/:id", function(req, res) {
    RestaurantModel.findById(req.params.id).then(function (restaurant) {
        console.log(restaurant);
        res.json(restaurant);
    }); 
});

router.put("/restaurant/receive/:id", function(req, res) {
    OrderModel.updateOne({_id: req.params.id},{orderReceived: true}).then(function(updatedDocument) {
        res.json(updatedDocument); 
    }); 
});

//order to display to restaurant the order to prepare
router.get("/restaurant/order/:id", function(req, res){
    OrderModel.find({restaurant: req.params.id}).then(function(orders) {
        res.json(orders);
    }); 
});

router.put("/restaurant/ready/:id", function(req, res){
    OrderModel.updateOne({_id: req.params.id},{ready: true}).then(function(updatedDocument) {
        res.json(updatedDocument);
    }); 
});

module.exports = router;