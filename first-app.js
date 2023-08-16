let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyparser = require('body-parser');
const app = express();
let adminrouter = require('./routes/admin');
let shoprouter = require('./routes/shop');
let rootDir = require('./util/path');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin', adminrouter);
app.use('/admin', shoprouter);
app.use('/', (req, res, next) => {
   res.status(404).sendFile(path.join(rootDir, 'views', 'page_not_found.html'));
})
app.listen(3000);
