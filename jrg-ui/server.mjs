import serve from 'koa-static';
import Koa from 'koa';
import cors from "@koa/cors";


var app = new Koa();
// app.use(cors());
app.use(serve("target"));
app.on('error', err => {
    console.log.error('server error', err)
});
// app.use(ctx => {
//     ctx.body = 'Hello World';
// });
app.listen("4001", ()=>{
    console.log("Server listening on port 4001")
});