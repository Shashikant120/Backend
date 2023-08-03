
let http = require('http');
let fs = require('fs');
const server = http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;

    if (url === '/') {
        try {
            res.write('<html>');
            let read = fs.readFileSync('message.txt', (err, data) => {
                res.write(read);
            })
            res.write(read);
            res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');

        } catch {
            res.write('<html>');
            res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');

        }

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
})
server.listen(3000);