const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({

    bikename : {
        type: String,
        required:true 
    },
    bikemodel : {
        type: String,
        required:true 
    },
    bikerange : {
        type: String,
        required:true 
    },
    bikecapacty : {
        type: String,
        required:true 
    },
    date: {
        type:Date,
        default :Date.now
    }

})


module.exports = new mongoose.model('bikes',BikeSchema);