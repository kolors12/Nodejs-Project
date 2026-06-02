const express = require('express');
const router = express.Router();

const Bikes = require('../models/bikemodel');


router.get('/', (req, res) => {

    res.send('suggu');
})




router.post('/addbikes', async (req, res) => {

    let bikemodels = req.body;
    //console.log(bikemodels);
    try {
        const bike = new Bikes(bikemodels);
        await bike.save();
        res.send(bike)

    } catch (err) {
        console.log(err.message)
    }


})


router.get('/allbikes', async (req, res) => {

    try {
        const getallbikes = await Bikes.find();
        //console.log(getallbikes);
        return res.json(getallbikes);

    } catch (err) {
        console.log(err.message);
    }

})


module.exports = router;
