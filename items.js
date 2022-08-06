
const {Products} = require('./db');
const  { dbconn} = require('./connect');
const mongoose = require('mongoose');
const express = require('express');
const Auth = require('./middleware/Auth');

const router = express.Router();
router.use(express.json());


router.get('/' ,async(req,res)=>{
            try{
                const products = await Products.find()
                return res.status(200).json({
                        message :"retrieved data succesfully",
                        products
                    })
                }
            catch(err){
                return res.status(500).json({
                    message:"somehting went wrong"
                })

         }
})
router.get('/:name',async (req,res)=>{
    try {
        const name1 = req.params.name;
        const products = await Products.findOne({itemname:name1});
        res.status(200).json({
         message :"retrieved data",
          products                    
         })
        
    } catch (err) {

        return res.status(500).json({
                    message:"somehting went wrong",
                    error:err.message
                })
    }
   
})


router.post('/add' ,  async(req,res)=>{
    try {
        
        const {  itemname , itemprice ,itemdescription ,itemimage}= req.body;
        if(itemname == "" || itemname == undefined)
        {
            return res.status(400).json({
                message :"please enter a name"
            })
        }
        if(itemprice == "" || itemprice == undefined)
        {
           return  res.status(400).json({
                message :"please enter a price"
            })
        }
        if(itemdescription == "" || itemdescription == undefined)
        {
            return res.status(400).json({
                message :"please enter a description"
            })
        }
        if(itemimage == "" || itemimage == undefined)
        {
            return res.status(400).json({
                message :"please enter an image"
            })
        }
    
            const ProductObj = { itemname , itemprice , itemdescription , itemimage};
            const products = new Products(ProductObj);
            await products.save()
                return res.status(200).json({
                   message:"data saved succesfully",
                   ProductObj
                })
    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
         })
        
    }
})


router.delete('/deleteitem/:name' , async(req,res)=>{
    try{
        const {name} = req.params;
        const products1 = await Products.findOne({itemname:name});
        await Products.findByIdAndDelete(products1._id);
        return res.status(200).json({
         message:"deleted data succesfully",
        })
    }
   
   catch(err){
            return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
       }
})


router.put('/update/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const {  itemname , itemprice ,itemdescription , itemimage }= req.body;
        if( itemname == "" || itemname == undefined)
        {
            return res.status(400).json({
                message :"please enter a name"
            })
        }
        if(itemprice == "" || itemprice == undefined)
        {
           return  res.status(400).json({
                message :"please enter a price"
            })
        }
        if(itemdescription == "" || itemdescription == undefined)
        {
            return res.status(400).json({
                message :"please enter a description"
            })
        }
        if(itemimage == "" || itemimage == undefined)
        {
            return res.status(400).json({
                message :"please enter a image"
            })
        }
        const products = await Products.findById(id);
        products.itemname = itemname;
        products.itemprice = itemprice;
        products.itemdescription = itemdescription;
        await products.save()
        return res.status(200).json({
            message:"data updated succesfully!"
        })
       }  
       catch(err){
        return res.status(500).json({
        message:"something went wrong",
        error: err.message
        })
                 }
   
})

dbconn();

module.exports = router;

