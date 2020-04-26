const router = require("express").Router();
const OrderModel = require("../models/Order");

router.get("/order", function(req, res) {
    OrderModel.find().then(function (order) {
        res.json(order)
    });
});

router.post("/order", function(req,res) {
    const Order = new OrderModel(req.body);
    Order.save(function (error, document) {
        if (error) {
            return console.log(error);
        }
        return res.json({
            success:true
        });
    });
});

//prepared order with id
router.put("/order/prepare/:id", function(req, res) {
    OrderModel.updateOne({_id: req.params.id},{prepared: true}).then(function(updatedDocument) {
        res.json(updatedDocument)
    }); 
});

//pickup order with an id
router.put("/order/pickup/:id", function(req, res) {
    OrderModel.updateOne({_id: req.params.id},{pickedUp: true}).then(function(updatedDocument) {
        res.json(updatedDocument)
    }); 
});

//delived order with id
router.put("/order/deliver/:id", function(req, res){
    OrderModel.updateOne({_id: req.params.id},{delivered: true}).then(function(updatedDocument) {
        res.json(updatedDocument)
    }); 
});

module.exports = router;
