const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please Enter the Product Name"]
        },

        qauntity: {
            type: Number,
            require: true,
            default: 0
        },

        prize: {
            type: Number,
            require: true,
            default: 0
        },

        image: {
            type: String,
            require: false
        }

    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;