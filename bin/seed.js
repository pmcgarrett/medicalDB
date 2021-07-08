const mongoose = require('mongoose');
const Pathology = require('../models/Pathology.model.js');

// const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/library-project';
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.vhy6o.mongodb.net/MedicalDB?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const pathologies = [
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "None",
        entity: "Papilloma",
        description: "Squamous cell papiloma is a papillary tumour consisting of delicate connective tissue fronds lined with squamous epitehlium.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625651122/Tumors/Bronchial_Papilloma_uigiby.jpg",

    },
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Sclerosing Pneumocytoma",
    },
];

Pathology.create(pathologies)
    .then(pathologiesFromDB => {
        console.log(`Created ${pathologiesFromDB.length} pathologies on ${MONGO_URI}`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating pathologies from the DB: ${err}`));