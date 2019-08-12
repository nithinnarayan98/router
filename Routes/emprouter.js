var express=require('express')
const router=express.Router();
router.get('/',function(req,res){
res.render('emphome')
})
router.get('/new',function(req,res){
    res.render('new')
})
router.get('/new/pemp',function(req,res){
    res.render('pemp')
})
router.get('/new/temp',function(req,res){
    res.render('temp')
})
router.get('/edit',function(req,res){
    res.send('details edited')
})
router.get('/view',function(req,res){
    res.send('the emp is')
})
router.get('/rem',function(req,res){
    res.send('removed')
})
module.exports=router;