import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const newUser = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json({
      msg: "sucess",
      data: {
        newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await Users.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const checkPassword = await bcrypt.compare(password, validUser.password);
    if (!checkPassword) {
      return next(errorHandler(401, "Invalid Credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryTime = new Date(Date.now() + 24 * 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryTime })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
