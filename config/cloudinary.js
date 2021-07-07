const cloudinary = require("cloudinary").v2;

const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});


const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "books",
    allowed_formats: ["png", "jpg"],
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
