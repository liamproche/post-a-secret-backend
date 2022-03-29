const express = require('express');
const router = express();
const Secret = require('../models/secret')


//INDEX ROUTE
router.get('/', async (req, res)=>{
    try{
        const secret = await Secret.find()
        res.send({
            success: true,
            data: secret
        })

    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})


//CREATE ROUTE
router.post('/', async (req, res)=>{
    try{
        const newSecret = await Secret.create(req.body);
        res.send({
            success: true,
            data: newSecret
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})


//SHOW ROUTE (INDIVIDUAL ANIMAL)
//NOT PLANNED FOR ORIGINAL PRODUCT
router.get('/:id', async (req, res)=>{
    try{
        const secret = await Secret.findById(req.params.id)
        if(!secret){
            throw new Error("No animal by that ID here")
        }
        res.send({
            success: true,
            data: secret
        })
    }
    catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})


//DELETE ROUTE
router.delete('/:id', async (req, res)=>{
    try{
        const secret = await Secret.findByIdAndDelete(req.params.id)
        res.send({
            success: true,
            data: secret
        })
    }
    catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

//EDIT ROUTE
router.put('/:id', async (req, res)=>{
    try{
        const secret = await Secret.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send({
            success: true,
            data: secret
        })
    }
    catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})



module.exports = router