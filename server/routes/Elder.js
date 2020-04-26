const router = require("express").Router();
const ElderModel = require("../models/Elder");

router.get("/elder", function(req, res) {
    ElderModel.find().then(function (elder) {
        res.json(elder)
    });
});

router.post("/elder", function(req,res) {
    const Elder = new ElderModel(req.body);
    Elder.save(function (error, document) {
        if (error) {
            return console.log(error);
        }
        return res.json({
            success:true
        });
    })
});

//get an elder with certain id
router.get("/elder/:id", function(req, res) {
    ElderModel.findById(req.params.id).then(function (elder) {
        res.json(elder)
    })
});

//put to elder with certain id and the order is on the body
router.put("/elder/:id", function(req, res){
    ElderModel.updateOne({_id:req.params.id}, {
        $push: { orders: req.body }
    }).then(function (updatedDocument) {
        res.json(updatedDocument);
    }) 
});

module.exports = router;


