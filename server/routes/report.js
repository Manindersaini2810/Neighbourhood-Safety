const router = require("express").Router();
const Report = require("../models/Report");

// POST report
router.post("/", async (req,res)=>{
  try{
    const report = new Report(req.body);
    await report.save();
    res.json("Report saved");
  }catch(err){
    res.status(500).json(err);
  }
});

// GET reports
router.get("/", async (req,res)=>{
  const reports = await Report.find().sort({time:-1});
  res.json(reports);
});

// DELETE report
router.delete("/:id", async (req,res)=>{
  try{
    await Report.findByIdAndDelete(req.params.id);
    res.json("Report deleted");
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;