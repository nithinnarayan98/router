var express=require('express')
const app=express();
var prdrouter=require('./Routes/prdrouter')
app.set("view engine","ejs");
app.set("views" ,"./src/views")
app.use("/prd",prdrouter)
app.use("/emp",emprouter)
app.get("/",function(req,res){
    res.render('home');
})

app.listen(8000,function(req,res){
    console.log("server started")
})