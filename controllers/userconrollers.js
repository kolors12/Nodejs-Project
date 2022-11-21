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



module.exports = router;