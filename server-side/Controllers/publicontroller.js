const express=require('express');
const {userModel,patientModel,doctorModel,adminModel}=require('../Model/index')

const router=express.Router();

router.get('/doctors',async(req,res)=>{
    try{
        return res.status(200).json({message:await doctorModel.find({}).populate('userId')})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
})
module.exports=router;