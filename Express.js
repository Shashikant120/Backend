let http=require('http');
let express=require('express');
const app=express();
app.use((req,res,next)=>{
console.log('in the first middlewawre');
next();
})
app.use((req,res,next)=>{
    console.log('in the second middleware');
    res.send('<h1>Hello Form Express JS</h1>');
})
let server=http.createServer(app);
server.listen(3000);
