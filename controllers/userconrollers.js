const express = require('express');
const router = express.Router();

const Users = require('../models/usermodel')


router.get('/', (req, res) => {

    res.send('suggu');
})



router.post('/addusers', async (req, res) => {

    let userroles = req.body;

    try {
        const user = new Users(userroles);
        await user.save();
        res.send(user)

    } catch (err) {
        console.log(err.message)
    }


})

router.get('/allusers', async (req, res) => {

    try {
        const getallusers = await Users.find();
        return res.json(getallusers);

    } catch (err) {
        console.log(err.message);
    }

})

router.get('/getuserbyid/:id', async (req,res) => {

    try {
        const getallusers = await Users.findById(req.params.id);
        return res.json(getallusers);

    } catch (err) {
        console.log(err.message);
    }

})

router.delete('/deleteuser/:id', async (req,res) => {

    console.log(req.params);

    try {
        await  Users.findByIdAndDelete(req.params.id);
        return res.json(await Users.find());

    } catch (err) {
        console.log(err.message);
    }

})

///////////////////-----Update-----////////////////////

router.put('/updateuser/:id',async(req,res)=>{

    try{
        const id = req.params.id;
        const updates =req.body;
        const options ={new:true};
        await Users.findByIdAndUpdate(id,updates,options);
        return res.json(await Users.find())
    }catch{
         console.log(err.message);     
    }

})





module.exports = router;