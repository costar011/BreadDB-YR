import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
