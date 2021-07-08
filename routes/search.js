const router = require("express").Router();
const Pathology = require('../models/Pathology.model.js');


router.get("/search", async (req, res) => {

    const query = req.query.q
    console.log(">>---", query);

    let searchResults;
    if (query) {
        let regex = new RegExp(query, 'i', 'g');
        searchResults = await Pathology.find({
            entity: regex,
        });

    } else {
        searchResults = [];
    }

    res.render("search/search-results", { searchResults, query });
});

module.exports = router;
