const router = require("express").Router();
const User = require("../models/User.model");

router.get("/user-create", async (req, res) => {
  const currentUser = await User.findOne(req.session.currentUser);
  res.render("user/user-create", currentUser);
});

router.post("/user-create/:id", async (req, res) => {
  console.log("----", req.body);
  const { name, password, age, sex, imageUrl } = req.body;

  await User.findByIdAndUpdate(req.params.id, {
    name,
    password,
    age,
    sex,
  });

  res.redirect("/");
});

module.exports = router;
