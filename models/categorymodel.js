const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

    categoryname: {
        type: String
    },
    categorytype: {
        type: String
    },
    categoryDec: {
        type: String
    },
    date: {
        type:Date,
        default :Date.now
    }
   


})

module.exports = new mongoose.model('Category',CategorySchema)