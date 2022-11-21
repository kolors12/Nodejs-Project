const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({


    ProductName : {

        type : String,
        required:true 

    },
    ProductDesc : {

        type : String,
        required:true 

    },
    ProductPrice : {

        type : String,
        required:true 

    },
    ProductBatch : {

        type : String,
        required:true 

    },
    date: {
        type:Date,
        default :Date.now
    }

})

module.exports= new mongoose.model('products',ProductSchema)