const { Schema, model } = require('mongoose');

const PathologySchema = new Schema(
    {
        pathology: {
            type: String,
            required: true,
        },
        organ: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        subtype: {
            type: String,
            required: true,
        },
        entity: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "no description added",
        },
        macroImg: {
            type: String,
            default: 'https://res.cloudinary.com/dl0iv6p9x/image/upload/v1625561096/no_image_available_fah5ho.jpg'
        }

    },
    {
        timestamps: true
    }
);

module.exports = model('Pathology', PathologySchema);