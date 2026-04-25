const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const alertRoute = require("./routes/alert");
const reportRoute = require("./routes/report");
const authRoute = require("./routes/auth");
const statsRoute = require("./routes/stats");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/neighbourhood")
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => {
    console.log("MongoDB error:", err);
});

app.use("/alerts", alertRoute);
app.use("/reports", reportRoute);
app.use("/auth", authRoute);
app.use("/stats", statsRoute);

app.get("/", (req,res)=>{
    res.send("Backend running");
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});