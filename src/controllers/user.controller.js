const User = require("../auth/auth.dao");
const userSchema = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "secretkey123456";

exports.createUser = (req, res, next) => {
  const newUser = {
    fullname: req.body.fullname,
    email: req.body.email,
    confirmpass: bcrypt.hashSync(req.body.confirmpass),
    password: bcrypt.hashSync(req.body.password),
  };

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000)
      return res.status(409).send("Email already exists");
    if (err) {
      //console.log("hhhhh", err);
      return res
        .status(500)
        .send({ message: "Something is wrong, Email does not Exist" });
    }
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    const dataUser = {
      //id: user._id,
      fullname: user.fullname,
      email: user.email,
      accessToken: accessToken,
      expiresIn: expiresIn,
    };
    // response
    res.send({ dataUser });
  });
};

exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };

  User.findOne({ email: userData.email }, (err, user) => {
    console.log(user);
    if (err) return res.status(500).send("Server error!");

    if (!user) {
      // email no existe
      res
        .status(409)
        .send({ message: "Something is wrong, Email does not Exist" });
    } else {
      const resultPassword = bcrypt.compareSync(
        userData.password,
        user.password
      );
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
          expiresIn: expiresIn,
        });

        const dataUser = {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
          //count: user.count,
          accessToken: accessToken,
          expiresIn: expiresIn,
        };
        res.send({ dataUser });
      } else {
        // password incorrecta
        res.status(409).send({ message: "Something is wrong" });
      }
    }
  });
};

exports.getUser = async (req, res) => {
  const id = req.body.id;
  try {
    let user = await userSchema.findById(id);
    res.json({
      done: true,
      user,
    });
  } catch (err) {
    //console.log("hhhhh", err);
    return res.status(400).json({
      done: false,
      error: "The information could not be accessed",
    });
  }
};

exports.uptadeUser = async (req, res) => {
  const body = req.body;
  const _id = req.body.id;
  try {
    await userSchema.findByIdAndUpdate(_id, body);
    res.json({
      done: true,
      msg: "Profile updated successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The username or password is incorrect",
    });
  }
};
exports.deleteUser = async (req, res) => {
  const id = req.body.id;
  try {
    await userSchema.findByIdAndDelete(id);
    res.json({
      done: true,
      msg: "Profile delete successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Profile could not be deleted",
    });
  }
};
