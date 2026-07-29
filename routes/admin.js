const { Router } = require("express");
const adminRouter = Router();
const { adminModel} = require("../db");
//brcypt, zod, jsonwebtoken


adminRouter.post("/signup",function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin",function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

// /api/v1/course/
adminRouter.post("/course",function(req, res){
    res.json({
        message: "course  endpoint"
    })
})

adminRouter.put("/course",function(req, res){
    res.json({
        message: "course creation endpoint"
    })
})

adminRouter.get("/course/bulk",function(req, res){
    res.json({
        message: "get all the created course  endpoint"
    })
})


module.exports = {
    adminRouter: adminRouter
}