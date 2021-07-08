const router = require("express").Router();
const User = require("../models/User.model");

function requireAdmin(req, res, next) {
  if (req.session.currentUser && req.session.currentUser.role === "Admin") {
    next();
  } else {
    res.redirect("/");
  }
}

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

router.get("/admin", requireAdmin, async(req, res)=> {
  const allUsers = await User.find();
  console.log(allUsers);
  res.render('user/admin', {allUsers});
})

router.get("/user/edit/:id", async(req, res) => {
  const currentUser = await User.findById(req.params.id);
  res.render('user/user-create', currentUser);
})

/* route to delete user */
router.post("/user/delete/:id", async(req,res)=> {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

module.exports = router;
