const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const fileUpload = require("../config/cloudinary");

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", fileUpload.single("image"), async (req, res) => {
  let fileUrlOnCloudinary = "";
  if (req.file) {
    fileUrlOnCloudinary = req.file.path;
  }
  const { username, age, password, name } = req.body;

  if (username === "" || password === "") {
    res.render("auth/signup", { errorMessage: "Fill username and password" });
    return;
  }

  //check for password strength
  /* const myRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (myRegex.test(password) === false) {
    res.render("auth/signup", {
      errorMessage: "Password is too weak",
    });
    return;
  } */

  //check if username already exists
  const user = await User.findOne({ username });
  if (user !== null) {
    res.render("auth/signup", { errorMessage: "Username already exists" });
    return;
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({
    username,
    name,
    age,
    password: hashedPassword,
    imageUrl: fileUrlOnCloudinary,
  });
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.render("auth/login", {
      errorMessage: "Fill username and password",
    });
    return;
  }

  const user = await User.findOne({ username });
  if (!user) {
    res.render("auth/login", {
      errorMessage: "Invalid login",
    });
    return;
  }


  if (bcrypt.compareSync(password, user.password)) {

    req.session.currentUser = user;
    res.redirect("/");
  } else {

    res.render("auth/login", {
      errorMessage: "Invalid login",
    });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
