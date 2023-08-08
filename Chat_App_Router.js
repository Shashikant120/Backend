let express = require('express');
let router=express.Router();
let fs = require('fs');

router.post('/', (req, res, next) => {
    let username = req.body.username;
    let message = req.body.message;
    fs.writeFile('message.txt', " "+username + " :- " + message, { flag: 'a' }, (err) => {
        res.redirect('/');
    })
});

router.get('/', (req, res, next) => {
    fs.readFile('message.txt', (err, data) => {
        if (err) {
            data = 'no chat exist';
        }
        res.send(`${data}<form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('user-name')" method="POST">
       <input type="text" id="message" name="message" placeholder="Type Message">
       <input type="hidden" name="username" id="username">
       <button type="submit">Send</button> 
       </form>`)
    })

});

router.get('/login', ((req, res, next) => {
    res.send(`<form id="form" onSubmit="localStorage.setItem('user-name', document.getElementById('Username').value)" action="/" >
    <label for="Username">Enter your username</label><br><br>
    <input type="text" placeholder="add username" id="Username" name="username"><br><br>
    <button type="submit">Login</button>
    </form> `)

}));

module.exports = router;