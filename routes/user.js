const { Router } = require("express");
const { userModel } = require("../db");

const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "rishu123"

const userRouter = Router();


userRouter.post("/signup", async function(req, res){

    const{ email, password, firstName, lastName } =req.body; // todo; adding zod validation
    // todo: hash the password so plain pass is not stored in the db
    // todo: use try catch 

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup succeeded"
    })
})

userRouter.post("/signin", async function(req, res){

     const {email ,password } = req.body;
     // todo: ideally password should be hashed, and hence we cannot compare the user provided password and thee database password
     const user = await userModel.findOne({
        email: email,
        password: password
     });
//.find will not work as it return an array for all the user with this credentials which is true in all the cases as it will always return empty array
// if want to use find then check user.length === 1
     if(user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

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

userRouter.get("/purchases", function(req, res){
    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}