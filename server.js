const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 1111;
const bodyParser = require('body-parser');
/////////data base import//////

require('./models/db');

/////-----Post data send chayadaniki----/////
app.use(express.json())



const flash = require('express-flash');
app.use(flash());

const sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true,
    
}));

//////// controllers import////////////
const user = require('./controllers/userconrollers');
const role = require('./controllers/rolecontroller');
const product = require('./controllers/productcontroller');
const categorys = require('./controllers/categorycontroller');
const bike = require('./controllers/bikecontrollers');

app.get('/',(req,res)=>{
    res.send('Hello Suggu');

})


app.use(express.static(__dirname+'/public'))
// html file path
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.use('/users',user);
app.use('/roles',role);
app.use('/products',product);
app.use('/category', categorys);
app.use('/bikes',bike);

app.listen(port,()=>console.log("Server Running" + " http://localhost:" + port))