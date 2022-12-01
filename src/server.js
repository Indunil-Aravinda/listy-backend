import Hapi from '@hapi/hapi';
// import { Hapi } from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let server;

const start = async() => {
    server = Hapi.server({
        port : 8000,
        host : 'localhost'
    });

    // server.route({
    //     method:'GET',
    //     path:'/hello',
    //     handler: (req,h)=>{ //callback when the correct request is received by the server for the specified path
    //         return h.response('Hello People'); //response
    //     } 
    // });

    // server.route({
    //     method:'POST',
    //     path:'/hello',
    //     handler: (req,h)=>{ 
    //         const payload = req.payload;
    //         const name = payload.name;
    //         return h.response('Hello '+name); //response
    //     } 
    // });

    // server.route({
    //     method : 'GET',
    //     path : '/api/listings',
    //     handler : (req,h) =>{
    //         return fakeListings;
    //     }
    // });

    routes.forEach(r=>server.route(r));

    db.connect();

    await server.start();
    console.log("Server runs perfectly :) on "+server.info.uri);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async ()=>{
    console.log("Stopping listy server");
    await server.stop({timeout:10000});
    db.end();
    console.log("listy Server stopped");
    process.exit(0);
});

start();