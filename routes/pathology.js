const router = require("express").Router();
const Pathology = require('../models/Pathology.model.js');


router.get("/view", async (req, res) => {
    const allPathlogies = await Pathology.distinct("pathology");
    res.render("pathology/pathology", { allPathlogies });
});

router.get('/view/:pathology', async (req, res) => {


    const { pathology } = req.params;
    const allOrgans = await Pathology.find({ pathology: pathology }).distinct("organ");

    res.render('pathology/organ', { allOrgans, pathology });
});

router.get('/view/:pathology/:organ', async (req, res) => {


    const { pathology, organ } = req.params;
    const allTypes = await Pathology.find({ organ: organ }).distinct("type");

    res.render('pathology/type', { allTypes, pathology, organ });
});

router.get('/view/:pathology/:organ/:type', async (req, res) => {


    const { pathology, organ, type } = req.params;
    const allSubtypes = await Pathology.find({ type: type }).distinct("subtype");

    res.render('pathology/subtype', { allSubtypes, pathology, organ, type });
});

router.get('/view/:pathology/:organ/:type/:subtype', async (req, res) => {


    const { pathology, organ, type, subtype } = req.params;
    const allEntities = await Pathology.find({ subtype: subtype }).distinct("entity");

    res.render('pathology/entity', { allEntities, pathology, organ, type, subtype });
});



module.exports = router;
