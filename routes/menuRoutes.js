const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menu');

router.post('/menu', async (req, res) =>{
    try{
        const data = req.body;
        const newmenu = new MenuItem(data);

        const response = await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/menu', async (req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;