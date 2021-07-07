const router = require("express").Router();
const Pathology = require('../models/Pathology.model.js');
const fileUpload = require("../config/cloudinary");


router.get('/view/:pathology/:organ/:type/:subtype/:entity', async (req, res) => {

    const { entity } = req.params;
    const entityDetails = await Pathology.find({ entity: entity });


    res.render('entity/entity-list', entityDetails[0]);
});

router.get('/create/:pathology/:organ/:type/:subtype', async (req, res) => {

    const { pathology, organ, type, subtype } = req.params;
    res.render('entity/entity-create', { pathology, organ, type, subtype })
});

router.post('/create/:pathology/:organ/:type/:subtype', fileUpload.single("image"), async (req, res) => {
    const { pathology, organ, type, subtype } = req.params;
    const { entity, description } = req.body;

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

    res.redirect(`/view/${pathology}/${organ}/${type}/${subtype}`);

});


router.get('/update/:pathology/:organ/:type/:subtype/:entity', async (req, res) => {
    const { entity } = req.params;


    const entityDetails = await Pathology.find({ entity: entity });
    res.render('entity/entity-edit', entityDetails[0]);
});

router.post('/update/:pathology/:organ/:type/:subtype/:id', fileUpload.single("image"), async (req, res) => {
    const { pathology, organ, type, subtype } = req.params;
    const { entity, description } = req.body;


    //To make sure it doesn't break if the user doesn't choose an image
    let fileUrlOnCloudinary = "";
    if (req.file) {
        fileUrlOnCloudinary = req.file.path;
    } else {
        //to make sure it keeps the original image, if nothing was picked
        const imageUrl = await Pathology.findById(req.params.id);
        fileUrlOnCloudinary = imageUrl.macroImg;
    }


    await Pathology.findByIdAndUpdate(req.params.id, {
        entity, description,
        macroImg: fileUrlOnCloudinary,
    });

    res.redirect(`/view/${pathology}/${organ}/${type}/${subtype}/${entity}`);
});


router.post('/delete/:pathology/:organ/:type/:subtype/:entity', async (req, res) => {
    const { pathology, organ, type, subtype, entity } = req.params;

    await Pathology.findOneAndDelete({ entity: entity });
    res.redirect(`/view/${pathology}/${organ}/${type}/${subtype}`);




});


module.exports = router;
