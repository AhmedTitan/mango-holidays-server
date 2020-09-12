import "dotenv/config";
import express from "express";
import indexRouter from './src/routes'

const app = express();
const port = process.env.PORT;

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
