const router = require("express").Router();
const { find } = require("../models/Pathology.model.js");
const Pathology = require('../models/Pathology.model.js');

router.get("/", async (req, res) => {
  const allPathlogies = await Pathology.find();

  const randNum = Math.floor(Math.random() * (allPathlogies.length));

  res.render("index", allPathlogies[randNum]);
});

module.exports = router;
