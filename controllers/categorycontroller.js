const express = require('express');
const router = express.Router();

const category = require('../models/categorymodel');

router.get('/', (req, res) => {

    res.send("hi");
})


router.post('/addcategory', async (req, res) => {

    const cat = req.body;

    try {
        const cate = new category(cat);
        await cate.save();
        return res.json(await cate.find())

    } catch (err) {
        console.log(err.message)
    }




})

module.exports = router;