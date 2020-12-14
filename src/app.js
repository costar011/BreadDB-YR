import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import mongoose from "mongoose";
import globalRouter from "./router/globalRouter";
import Bread from "../models/Bread";

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
