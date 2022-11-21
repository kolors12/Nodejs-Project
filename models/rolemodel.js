const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({

    rolename : {
        type : String,
        required:true 
        
    },
    roletype : {

        type : String,
        required:true 
        
    },
    date: {
        type:Date,
        default :Date.now
    }
})

module.exports = new mongoose.model('role', RoleSchema);