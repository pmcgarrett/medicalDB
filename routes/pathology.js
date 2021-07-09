const router = require("express").Router();
const Pathology = require('../models/Pathology.model.js');
const fileUpload = require("../config/cloudinary");


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


router.get('/pathology-create', async (req, res) => {
    res.render('pathology/pathology-create');
});

router.post('/pathology-create', fileUpload.single("image"), async (req, res) => {
    const { pathology, organ, type, subtype, entity, description } = req.body;

    let fileUrlOnCloudinary = "";
    if (req.file) {
        fileUrlOnCloudinary = req.file.path;
    } else {
        fileUrlOnCloudinary = 'https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625561096/no_image_available_fah5ho.jpg';
    }

    await Pathology.create({
        pathology, organ, type, subtype, entity, description,
        macroImg: fileUrlOnCloudinary,
    });

    res.redirect("/");
});




module.exports = router;
