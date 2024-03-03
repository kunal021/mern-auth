import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 3080;
import userRoutes from "./routes/userRoutes.js";

const app = express();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB is connected"))
  .catch((e) => console.log(e));

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
