const express = require('express');

const router = express.Router();

//////-----import Model ------////////
const UserRole = require('../models/rolemodel');

/////---post data send chayadaniki----//////
const app = express();
app.use(express.json())
/////////////---------------------/////////////





router.post('/addrole', async (req, res) => {

    let userrole = req.body;
    try {
        const newDate = new UserRole(userrole);
        await newDate.save();
        //////----Just shown Succes Mesggg-----////
        res.send(newDate)
        ///---- retun all the data-------////
        //return res.json(await UserRole.find())

    } catch (err) {
        console.log(err.message)
    }
})

router.get('/getroles', async (req, res) => {

    try {
        const allroles = await UserRole.find();
        return res.json(allroles)

    } catch (err) {
        console.log(err.message)
    }
})


router.get('/getrolesbyid/:id', async (req, res) => {

    try {
        const allroles = await UserRole.findById(req.params.id);
        return res.json(allroles)

    } catch (err) {
        console.log(err.message)
    }
})

router.delete('/deleterole/:id', async (req, res) => {

    try {
         await UserRole.findByIdAndDelete(req.params.id);
        return res.json(await UserRole.find())

    } catch (err) {
        console.log(err.message)
    }
})


///////////////////-----Update-----////////////////////

router.put('/updaterole/:id',async(req,res)=>{

    try{
        const id = req.params.id;
        const updates =req.body;
        const options ={new:true};
        await UserRole.findByIdAndUpdate(id,updates,options);
        return res.json(await UserRole.find())
    }catch{
         console.log(err.message);     
    }

})


module.exports = router;