import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/users/signup", (req, res) => {
  res.send("Hi there!");
});

router.post("/api/users/signup", (req, res) => {
  

  res.status(200).send({ message: "Hi there!" });
});



export { router as signupRouter };