const router = require("express").Router();
const LocationModel = require("../models/Location");

router.get("/location", function(req, res) {
    LocationModel.find().then(function (location) {
        res.json(location)
    });
});

router.post("/location", function(req,res) {
    const Location = new LocationModel(req.body);
    Location.save(function (error, document) {
        if (error) {
            return console.log(error);
        }
        return res.json({
            success:true
        });
    });
});

module.exports = router;


