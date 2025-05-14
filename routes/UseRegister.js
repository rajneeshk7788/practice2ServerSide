import express from "express";

const userRgister = express.Router();

userRgister.get("/", (req, res) => {
    console.log("Hello World");
});

userRgister.post("/register", (req, res) => {
    console.log(req.body);
    res.send('Hello World');
    console.log('Hello World');
    res.end();
});



export default userRgister;