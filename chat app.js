let express = require('express');
let fs = require('fs');
let bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.get('/login', ((req, res, next) => {
    res.send('<form id="form" onsubmit="localStorage.setItem(`Username`, document.getElementById(`Username`).value)" action="/" method="POST"><label for="username">Enter your username</label><br><br><input type="text" placeholder="add username" id="Username" name="username"><br><br><button type="submit">Login</button></form>')

}));


app.post('/', (req, res, next) => {

   
    
    res.send('<form id="form" action="/" method="POST"><input type="text" placeholder="Enter message" name="message"><br><br><button type="submit">send</button></form>');
   let username=localStorage.getItem('username');

})

app.listen(3000);