import express from "express";
import  userRegister  from "./../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/register",userRegister);



export default userRouter;