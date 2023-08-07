let express=require('express');
let shoproute=express.Router();
shoproute.get('/',(req,res,next)=>{
    res.send('Welcome to the home page')
});

module.exports=shoproute;
