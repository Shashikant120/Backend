let mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Sharpener10',
});

module.exports=pool.promise();