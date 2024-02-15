import serve from 'koa-static';
import Koa from 'koa';
import cors from "@koa/cors";
import mount from 'koa-mount';

var app = new Koa();
app.use(cors());
app.use(mount('/js', serve('target')));
app.use(serve("../jrg-site"));
app.on('error', err => {
    console.log.error('server error', err)
});
app.listen("4001", ()=>{
    console.log("Server listening on port 4001")
});