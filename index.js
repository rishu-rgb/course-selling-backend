//gitigmore adding learn
//routing in express, the express router

const express = require("express");
const mongoose = require("mongoose");
const { userModel,
    adminModel,
    courseModel,
    purchaseModel } = require("./db");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main(){
    //server will start only if database is connected
    // .env file to store this
    await mongoose.connect("mongodb+srv://rishuraj76:0y4Y2Xug6LPra8l0@cluster0.lwcgla6.mongodb.net/lec8project");
    app.listen(3000);
}

main()





