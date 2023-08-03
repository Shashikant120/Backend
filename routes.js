const exp = require('constants');
const fs=require('fs');
const requestHandler=(req,res)=>{
    let url = req.url;
    let method = req.method;
    if (url === '/') {
        fs.readFile('message.txt', { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write('<html>');
            res.write(`<body><h1>${data}</h1></body>`);
            res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');

        })

    }

    if (url === '/message' && method === "POST") {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            let val = Buffer.concat(body).toString();
            let arr = val.split('=');
            fs.writeFileSync('message.txt', arr[1]);
            res.statusCode = 302;
            res.setHeader('location', '/');
            return res.end();
        })


    }
}

//method 1
module.exports=requestHandler;

//method2
// module.exports={
//     handler:requestHandler,
//     sometext:"Some hard quoted text";
// }

//method 3
// module.exports.handler=requestHandler;
// module.exports.sometext="some hard quoted text"

//shortcut
// exports.handler=requestHandler;
// exports.sometext="some hard quoted text";

