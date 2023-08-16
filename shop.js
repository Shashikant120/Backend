let express = require('express');
let path = require('path');
let shoproute = express.Router();
let rootDir = require('../util/path');
shoproute.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = shoproute;
