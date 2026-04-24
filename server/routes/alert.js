const router = require("express").Router();
const Alert = require("../models/Alert");

// POST alert
router.post("/", async (req,res)=>{
  try{
    const alert = new Alert({
      message:req.body.message
    });

    await alert.save();
    res.json("Alert saved");

  }catch(err){
    res.status(500).json(err);
  }
});

// GET alerts
router.get("/", async (req,res)=>{
  const alerts = await Alert.find().sort({time:-1});
  res.json(alerts);
});

// DELETE alert
router.delete("/:id", async (req,res)=>{
  try{
    await Alert.findByIdAndDelete(req.params.id);
    res.json("Alert deleted");
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;