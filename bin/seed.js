const mongoose = require('mongoose');
const Pathology = require('../models/Pathology.model.js');
const User = require("../models/User.model");


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
        organ: "Lungs",
        type: "Epithelial",
        subtype: "None",
        entity: "Papilloma",
        description: "Squamous cell papiloma is a papillary tumour consisting of delicate connective tissue fronds lined with squamous epitehlium.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625651122/Tumors/Bronchial_Papilloma_uigiby.jpg",

    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Sclerosing Pneumocytoma",
        description: "Sclerosing Pneumocytoma is a tumour of pneumocytic origin composed of dual population of surface cells resembeling type II pneumocytes and round cells.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625730197/Tumors/Adenomas__Sclerosing_pneumocytoma_jm7erm.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Alveolar Adenoma",
        description: "Alveolar adenoma is a well-circunscribed tumour consisting of cystic spaces lined by a single layer of type II pneumcytes overlying a spindle rich stroma.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625730679/Tumors/Adenomas_alveolar_adenoma_hzetmb.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Papillar adenoma",
        description: "Circunscribed papillary neoplasm composed of cytologically bland, cuboidal to columnar cells linning fibrovascular cores.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625730863/Tumors/Adenoma_Papillar_txyqh2.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Bronchiolar Adenoma",
        description: "Benign peripheral lung tumour composed of bilayered bronchiolar-type epithelium containing a continuous basal cell type",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625731198/Tumors/Bronchiolar_adenoma_zibshn.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Mucinous Cystadenoma",
        description: "Localized cystic mass filled with mucin and surrounded by columnar mucinous epithelium without significant atypia or invasive growth.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625731388/Tumors/Mucinous_Cystadenoma_mtrete.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenoma",
        entity: "Mucous Gland",
        description: "Benign exophytic tumour resemblin seromucinous bronchial glands.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625731559/Tumors/Mucous_gland_ncjqoa.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenocarcinoma",
        entity: "Minimally Invasive Adenocarcinoma",
        description: "Small (< 30 mm) solitary adenocarcinoma with a predominantly lepidic pattern and < 5 mm invasion.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625735162/Tumors/Minimally_invasive_h4moob.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenocarcinoma",
        entity: "Invasive non-mucinous adenocarcinoma",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625736089/Tumors/Invasive_non_mucinous_adenocarcinoma_bl9uxj.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenocarcinoma",
        entity: "Invasive mucinous adenocarcinoma",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625736221/Tumors/Invasive_mucinous_adenocarcinoma_jzji1s.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenocarcinoma",
        entity: "Colloid adenocarcinoma​",
        description: "This tumor consists of pools of mucin filling air spaces with well-differentiated malignant glands growing along the edges of the surrounding connective tissue.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625736381/Tumors/Colloid_adenocarcinoma_qgsvee.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenocarcinoma",
        entity: "​Fetal adenocarcinoma​",
        description: "Resembeling fetal lung with pseudoglandular",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625736500/Tumors/Fetal_adenocarcinoma_dfnwdv.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Adenocarcinoma",
        entity: "Enteric-type adenocarcinoma",
        description: "Resemble colorectal adenocarcinoma",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625736642/Tumors/Enteric-type_adenocarcinoma_ncukms.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Squamous Cell Carcinoma",
        entity: "Lymphoepithelial carcinoma",
        description: "Poorly differenciated squamous cell carcinoma admixed with lymphoplasmatic infiltrate.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625736895/Tumors/Lymphoepithelial_carcinoma_c5maez.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "None",
        entity: "Large cell carcinoma",
        description: "Restrict diagnosis of large cell carcinoma to resected tumors that lack any clear morphologic or immunohistochemical differentiation.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625737021/Tumors/Large_cell_carcinoma_faxpsd.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "None",
        entity: "Adenosquamous carcinoma",
        description: "Substantial amounts of malignant squamous and glandular differentiation (at least 10% of each component within tumor)​ 90% peripheral, often associated with scars.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625737720/Tumors/Adenosquamous_carcinoma_eehc8t.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Sarcomatoid Carcinoma",
        entity: "Pleomorphic carcinoma",
        description: "usually aggressive, malignant epithelial neoplasm composed of cells with significant cytologic atypia and nuclear pleomorphism​ Contains at least 10% spindle cells and/ or giant cells",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625737324/Tumors/Pleomorphic_carcinoma_qnlkpp.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Sarcomatoid Carcinoma",
        entity: "Pulmonary blastoma",
        description: "rare aggressive malignant tumor of infancy and early childhood. The tumor arises in the lung and pleura and is regarded as a pulmonary dysontogenetic or embryonic neoplasm.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625737527/Tumors/Pulmonary_blastoma_s3nbck.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Sarcomatoid Carcinoma",
        entity: "Carcinossarcoma",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625737844/Tumors/Carcinossarcoma_iiq5rn.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Others",
        entity: "NUT carcinoma",
        description: "NUT midline carcinoma (NMC) is a poorly differentiated tumor typically driven by a t(15;19) rearrangement leading to a NUT fusion event.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625737994/Tumors/NUT_carcinoma_yefcgd.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Others",
        entity: "Thoracic SMARC4 deficient undifferenciated tumour",
        description: "Highly aggressive thoracic neoplasms characterized by SMARCA4 (BRG1) deficiency and undifferentiated round cell or rhabdoid morphology have been recently described and proposed to represent thoracic sarcomas.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625738108/Tumors/Thoracic_SMARC4_rnosef.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Salivary gland-type tumours",
        entity: "Pleomorphic adenoma",
        description: "Pleomorphic adenoma usually occurs in the salivary glands but rarely in the trachea or bronchi.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625738282/Tumors/Pleomorphic_adenoma_tlhlak.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Salivary gland-type tumours",
        entity: "Adenoid cystic carcinoma",
        description: "rare salivary gland-type malignant neoplasm that occurs infrequently as a primary tumor of the airway.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625738385/Tumors/Adenoid_cystic_carcinoma_rmlfq7.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Salivary gland-type tumours",
        entity: " Epithelial-myoepithelial carcinoma",
        description: "Myoepithelial and epithelial-myoepithelial carcinoma are two tumour entities that consist largely of malignant myoepithelial cells.   ",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625740397/Tumors/Epithelial_myoepithelial_carcinoma_nnb4j6.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Salivary gland-type tumours",
        entity: "Mucoepidermoid carcinoma",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625740563/Tumors/Mucoepidermoid_carcinoma_ja4wla.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Salivary gland-type tumours",
        entity: "Hyalinizing clear cell carcinoma",
        description: "Hyalinizing clear cell carcinoma (HCCC) is a rare malignant salivary gland tumour, with a good prognosis, that is usually found on the tongue or palate.",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625740659/Tumors/Hyalinizing_clear_cell_carcinoma_ya773p.jpg",
    },
    {
        pathology: "Tumor",
        organ: "Lungs",
        type: "Epithelial",
        subtype: "Salivary gland-type tumours",
        entity: "Myoepithelioma and myoepithelial carcinoma",
        description: "Myoepithelioma, myoepithelial carcinoma and mixed tumor of soft tissue are a group of uncommon neoplasms that share morphological, immunophenotypic and genetic features with their counterparts in salivary gland",
        macroImg: "https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625740835/Tumors/Myoepithelioma_and_myoepithelial_carcinoma_q05aaa.jpg",
    },
];

const users = [
    {
        username: "admin",
        name: "Admin",
        //password is "admin"
        password: "$2a$10$tYkLh2KK680lrjjcO6h9EeOlW2N9QK3oChnkijkZToN.TcUJ7GLy2",
        role: "admin",
        age: 99,
        sex: "female",
    },
    {
        username: "doctor",
        name: "Doctor",
        //password is "doctor"
        password: "$2a$10$dUyS/2erUP45Obf9mpXgh.lpmzxybIDCnMrz8juA9Uf7LC4C1a60q",
        role: "doctor",
        age: 50,
        sex: "male",
    },
    {
        username: "user",
        name: "User",
        //password is "user"
        password: "$2a$10$qkwnH.t.zG2jjmOMk/u/bu10qvjVqG9YgJUPSxMgZC10hFZ1Zd1lG",
        role: "user",
        age: 12,
        sex: "male",
    },
]


Pathology.create(pathologies)
    .then(pathologiesFromDB => {
        console.log(`Created ${pathologiesFromDB.length} pathologies on ${MONGO_URI}`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating pathologies from the DB: ${err}`));

User.create(users)
    .then(UsersFromDB => {
        console.log(`Created ${UsersFromDB.length} users on ${MONGO_URI}`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating users from the DB: ${err}`));