const router = require("express").Router();
const User = require("../models/User");
const Alert = require("../models/Alert");
const Report = require("../models/Report");

router.get("/dashboard", async (req, res) => {
  try {
    const residentCount = await User.countDocuments({});

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const alertCount = await Alert.countDocuments({ time: { $gte: sevenDaysAgo } });
    const reportCount = await Report.countDocuments({ time: { $gte: sevenDaysAgo } });

    const safetyScore = Math.max(0, 100 - (alertCount * 5) - (reportCount * 3));

    res.json({ activeMembers: residentCount, safetyScore });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;