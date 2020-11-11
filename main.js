/* import modules */
const calcModel = require('./function/calculator.js');

/* server */
var http = require('http')
var fs = require('fs')
var app = http.createServer(function(request, response){
    var url = request.url;    
    console.log(url);
    if(request.method === 'GET'){
        if(url === '/')
            url = '/index.html';        
        else if(url === '/favicon.ico')
            return response.writeHead(404);                
        if(url.includes('.mjs'))
            response.writeHead(200,{'Content-Type':'text/javascript'});                    
        else
            response.writeHead(200);   
        response.end(fs.readFileSync(__dirname + url));
    }else if(request.method === 'POST'){
        console.log(url);
        if(url === '/calc'){
            let body = '';            
            request.on('data', (data)=>{
                body += data;
                //get Body
            });
            /* finish read Data then */
            return request.on('end', ()=>{
                const {data} = JSON.parse(body);
                const result = calcModel.calculate(data); 
                console.log(result);               
                response.writeHead(201);
                response.end(JSON.stringify({result,}));                
            })
        }
    }
});
app.listen(80);