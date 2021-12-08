import { ValidationError } from "express-validator";
import { Customerror } from "./custom-error";

export class RequestValidationError extends Customerror {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");
  }

}