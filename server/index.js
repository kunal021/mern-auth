import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 3080;
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB is connected"))
  .catch((e) => console.log(e));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    sucess: false,
    message,
    statusCode,
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
