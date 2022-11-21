const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username : {
        type: String,
        required:true 
    },
    useremail : {
        type: String,
        required:true 
    },
    userphone : {
        type: String,
        required:true 
    },
    useraddress : {
        type: String,
        required:true 
    },
    date: {
        type:Date,
        default :Date.now
    }

})


module.exports = new mongoose.model('users',UserSchema);