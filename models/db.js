const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost:27017/newdb',{useNewUrlParser:true

}).then(res=>{
console.log("Data Base Connected")
}).catch(err=>{
console.log("Not Connected")
});

//require('./usermodel');
//require('./rolemodel');