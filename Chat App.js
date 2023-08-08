let express = require('express');
let fs = require('fs');
let bodyparser = require('body-parser');
const app = express();
let router = require('./routes/Chat_App_Router');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(router);
app.listen(3000);