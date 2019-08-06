var express=require('express')
const router=express.Router();
router.get("/",function(req,res){
    res.render('prdhome')
})
router.get("/new",function(req,res){
    res.render('newprd')
})
router.get("/new/ret",function(req,res){
    res.send("retail products added")
})
router.get("/new/ws",function(req,res){
    res.send("whole sale products added")
})
router.get("/edit",function(req,res){
    res.send("products edited")
})
router.get("/view",function(req,res){
    res.render('prds')
})
router.get("/rem",function(req,res){
    res.send("products removed")
})
module.exports=router;