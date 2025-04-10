const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async (req, res) =>{
    try{
        const data = req.body;

        const newperson = new Person(data);
        const response = await newperson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:workType', async (req, res) =>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='manager' || worktype=='waiter'){
        const response = await Person.find({work:workType});
        console.log("Response Fetched");
        res.status(200).json(response);
        }else{
        res.status(404).json({error: 'Inavalid WorkType'})
        }
    }catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.id;  
        const updatedPersonData = req.body;  

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })

        if(!response) {
            return res.status(404).json({ error: 'Person Not Found'})
        }

        console.log('Data Updated');
        res.status(200).json(response);
        
    } catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.delete('./id', async (req, res) =>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response) {
            return res.status(404).json({ error: 'Person Not Found'})
        }

        console.log('Data Deleted');
        res.status(200).json({message: 'Person Deleted Successfull'});

    } catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// Comment added
module.exports = router;