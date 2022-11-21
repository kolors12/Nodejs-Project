const express = require('express');
const router = express.Router();

const Products = require('../models/productmodel');


router.get('/', (req, res) => {

    res.send('Helloe Products');


})

router.post('/addproducts', async (req, res) => {

    const Pro = req.body;
    try {

        const allproducts = new Products(Pro);
        await allproducts.save();
        //res.send(allproducts);
        return res.json(await Products.find())

    } catch (err) {
        console.log(err.message)
    }

})


router.get('/allproducts', async(req, res) => {

    try{

     const allproducts  = await Products.find();

        res.json(allproducts)
    }catch(err){
        console.log(err .message)
    }

})

router.get('/getallproducts/:id', async(req, res) => {

    try{

     const allproducts  = await Products.findById(req.params.id);

        res.json(allproducts)
    }catch(err){
        console.log(err .message)
    }

})

router.delete('/deleteproduct/:id', async(req, res) => {

    try{

      await Products.findByIdAndDelete(req.params.id);
      return res.json(await Products.find());
      
    }catch(err){
        console.log(err .message)
    }

})




module.exports = router;