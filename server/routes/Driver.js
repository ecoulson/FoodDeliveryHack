const router = require("express").Router();
const DriverModel = require("../models/Driver");
const OrderModel = require("../models/Order");

router.post("/driver", function(req,res) {
    const Driver = new DriverModel(req.body);
    Driver.save(function (error, document) {
        if (error) {
            return console.log(error);
        }
        return res.json({
            success:true
        });
    });
});

router.get("/driver", function(req, res) {
    DriverModel.find().then(function (drivers) {
        res.json(drivers)
    });
});

//getting a particular driver with respective id
router.get("/driver", function(req, res) {
    console.log(req.query.id)
    DriverModel.findById(req.query.id).then(function (driver) {
        res.json(driver)
    })
});

router.get("/driver/nearme/", function(req, res) {
    OrderModel.find().then(function (orders) {
        res.json(orders)
    })
});

//route to add new orders to a driver
router.put("/driver/:id", function(req, res) {
    DriverModel.updateOne({ _id: req.params.id }, {
        $push: { orders: req.body }
    }).then(function (updatedDocument) {
        res.json(updatedDocument);
    })
});

//code to to let driver show they picked up food from restaurant
router.put("/driver/pickup/:id", function(req, res) {
    OrderModel.updateOne({_id: req.params.id},{pickedUp: true}).then(function(updatedDocument) {
        res.json(updatedDocument)
    })
});

router.put("/driver/dropoff/:id", function(req, res) {
    OrderModel.updateOne({_id: req.params.id},{delivered: true}).then(function(updatedDocument) {
        res.json(updatedDocument)
    })
});


router.put("/driver/accept/:id", function(req, res){
    OrderModel.updateOne({_id: req.params.id},{accepted: true}).then(function(updatedDocument) {
        res.json(updatedDocument)
    }); 
});

module.exports = router;