const router = require("express").Router();
const User = require("../models/User.model");

function requireAdmin(req, res, next) {
  if (req.session.currentUser && req.session.currentUser.role === "admin") {
    next();
  } else {
    res.redirect("/");
  }
}


router.get("/user-edit", async (req, res) => {
  const currentUser = await User.findById(req.session.currentUser._id)
  res.render("user/user-edit", currentUser);
});

router.post("/user-edit/:id", async (req, res) => {

  const { name, age, sex, role } = req.body;

  await User.findByIdAndUpdate(req.params.id, {
    name,
    age,
    sex,
    role
  });

  res.redirect("/admin");
});

router.get("/admin", requireAdmin, async (req, res) => {
  const allUsers = await User.find();
  res.render('user/admin', { allUsers });
})

router.get("/user/edit/:id", async (req, res) => {
  const currentUser = await User.findById(req.params.id);
  res.render('user/user-edit', currentUser);
});



/* route to delete user */
router.post("/user/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

module.exports = router;
