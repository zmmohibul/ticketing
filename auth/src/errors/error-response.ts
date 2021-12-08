import { ValidationError } from "express-validator";

export class ErrorResponse {
  constructor
  (
    public statusCode: number,
    public message: string,
    public errors: ValidationError[]
  ) {}
}