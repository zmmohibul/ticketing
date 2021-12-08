import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { ErrorResponse } from "../errors/error-response";
import { RequestValidationError } from "../errors/request-validation-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const responseErrors = new RequestValidationError(errors.array());
      return res.status(responseErrors.statusCode).send(new ErrorResponse(responseErrors.statusCode, responseErrors.message, responseErrors.errors));
    }
    res.send("Hi there!");
});

router.get("/api/users/signup", (req, res) => {
  

  res.status(200).send({ message: "Hi there!" });
});



export { router as signupRouter };