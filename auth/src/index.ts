import express from "express";
import { errorHandler } from "./middlewares/error-handler";
import { signupRouter } from "./routes/signupRoute";

const app = express();
app.use(express.json());

app.use(signupRouter);
app.use(errorHandler)

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
