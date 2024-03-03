import Users from "../models/userModel.js";

export const signup = async (req, res) => {
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
    res.status(500).json(err);
  }
};
