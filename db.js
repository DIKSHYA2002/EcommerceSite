

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    itemname:{
        type: String,
        required: true
    },
    itemprice:{
        type: String,
        required: true
    },
    itemdescription:{
        type: String,
        required: true
    },
    itemimage:{
        type: String,
        required: true
    }
} ,{timestamps:true})
exports.Products = mongoose.model('products',ProductSchema);



