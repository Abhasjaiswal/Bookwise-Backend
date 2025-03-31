import { config } from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

config();

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection error:", err);
    process.exit(1);
  });
