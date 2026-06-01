const express = require('express');
const router = express.Router();

const Bikes = require('../models/bikemodel');


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


module.exports = router;
