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
        description: "Sclerosing Pneumocytoma is a tumour of pneumocytic origin composed of dual population of surface cells resembeling type II pneumocytes and round cells.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625730197/Tumors/Adenomas__Sclerosing_pneumocytoma_jm7erm.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Alveolar Adenoma",
        description: "Alveolar adenoma is a well-circunscribed tumour consisting of cystic spaces lined by a single layer of type II pneumcytes overlying a spindle rich stroma.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625730679/Tumors/Adenomas_alveolar_adenoma_hzetmb.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Papillar adenoma",
        description: "Circunscribed papillary neoplasm composed of cytologically bland, cuboidal to columnar cells linning fibrovascular cores.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625730863/Tumors/Adenoma_Papillar_txyqh2.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Bronchiolar Adenoma",
        description: "Benign peripheral lung tumour composed of bilayered bronchiolar-type epithelium containing a continuous basal cell type",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625731198/Tumors/Bronchiolar_adenoma_zibshn.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Mucinous Cystadenoma",
        description: "Localized cystic mass filled with mucin and surrounded by columnar mucinous epithelium without significant atypia or invasive growth.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625731388/Tumors/Mucinous_Cystadenoma_mtrete.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lugs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Mucous Gland",
        description: "Benign exophytic tumour resemblin seromucinous bronchial glands.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625731559/Tumors/Mucous_gland_ncjqoa.jpg",
    },
];

Pathology.create(pathologies)
    .then(pathologiesFromDB => {
        console.log(`Created ${pathologiesFromDB.length} pathologies on ${MONGO_URI}`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating pathologies from the DB: ${err}`));