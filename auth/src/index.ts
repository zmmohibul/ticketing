import express from "express";
import { signupRouter } from "./routes/signupRoute";

const app = express();
app.use(express.json());

app.use(signupRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
