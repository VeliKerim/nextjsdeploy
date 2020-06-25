const express = require('express'); //sehifeye express daxil edilmish
//const {parse} = require ('url');
const next =require ('next'); //sehifeye next daxil edilmish
const { join } = require('path');
const { parse } = require('url');
const dev = process.env.NODE_ENV!=='production'; //gelishme ortaminin development ya production olmasini yoxlamaq meqsedile yazilib
const app = next({dev}); //app next i ayaga qaldirmaqcun yeni run etmek ucun daxil edilmish
const handle = app.getRequestHandler(); //bu servere gelen istekleri handle eden bir metod var o burda istifade edilib

app.prepare().then(()=> {
    const server = express(); //server olaraq express istifade edilir.

    //Custom routes go here
        server.get('/user/:name',(req,res)=>{
            const mergedQuery = Object.assign({},req.query,req.params)
            return app.render(req,res,'/User',mergedQuery); // 3 cu gonderdiyimiz parametr href olan hissedir eyni olmali yeni esas url
        })

    //This is the default route, don`t edit this.
    server.get('*',(req,res)=>{ //bu tum gelen istekleri qarshilayir gorunduyu kimi deyishmememizi qeyd edir.
       // return handle(req,res);
       const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
 
      // handle GET request to /service-worker.js
      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname)
 
        app.serveStatic(req, res, filePath)
      } else {
        handle(req, res, parsedUrl)
      }
    });
    const port = process.env.PORT || 3000;// elaqeli (istifade edilecek port) portu mueyyenleshdirir.


    //server dinlenilmeye bashliyir
    server.listen(port,err=>{
        if(err) throw err;
        console.log(`>Ready on port ${port}...`);
    });
});