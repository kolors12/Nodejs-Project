const express = require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9999;

/////////data base import//////

require('./models/db');

/////-----Post data send chayadaniki----/////
app.use(express.json())

//////// controllers import////////////
const user = require('./controllers/userconrollers');
const role = require('./controllers/rolecontroller');
const product = require('./controllers/productcontroller');



app.get('/',(req,res)=>{
    res.send('Hello Suggu');

})

app.use('/users',user);
app.use('/roles',role);
app.use('/products',product)
app.listen(port,()=>console.log("Server Running" + " http://localhost:" + port))