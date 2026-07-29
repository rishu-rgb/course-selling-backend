const { Router } = require("express");
const adminRouter = Router();
const { adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD_ADMIN = "rishu12345"

//brcypt, zod, jsonwebtoken


adminRouter.post("/signup", async function(req, res){
     const{ email, password, firstName, lastName } =req.body; // todo; adding zod validation
    // todo: hash the password so plain pass is not stored in the db
    // todo: use try catch 

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup succeeded"
    })
})

adminRouter.post("/signin", async function(req, res){
      const {email ,password } = req.body;
     // todo: ideally password should be hashed, and hence we cannot compare the user provided password and thee database password
     const admin = await adminModel.findOne({
        email: email,
        password: password
     });
//.find will not work as it return an array for all the user with this credentials which is true in all the cases as it will always return empty array
// if want to use find then check user.length === 1
     if(admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_USER_PASSWORD_ADMIN);

        //do cookie logic

        res.json({
            token: token
        })
     } else{
        res.status(403).json({
        message: "incorrect credentials"
        })
     }
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