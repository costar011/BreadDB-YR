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

mongoose.connect(
  `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
  {
    dbName: `JYR_PRA`,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log("❌ Failed");
    } else {
      console.log("⭕️  DB  ");
    }
  }
);

app.get("/", globalRouter);

app.get("/bread", globalRouter);

app.get("/", async (req, res) => {
  const result = await Bread.find({}, {});

  return res.render("screens/home", { bread: result });
});

app.get("/bread", async (req, res) => {
  const result = await Bread.find({}, {});

  return res.render("screens/bread", { bread: result });
});

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
