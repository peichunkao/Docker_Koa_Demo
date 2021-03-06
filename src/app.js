const Koa = require('koa');  
const Logger = require('koa-logger')
const Router = require('koa-router')
var port = process.env.PORT || 3000
const app = new Koa(); 
const router = Router();

router.get('/', async(ctx) => {     
  ctx.body = 'Hello Koa'; 
});  

router.get('/hello', async(ctx) => {     
  ctx.body = 'world'; 
});  

app.use(Logger())
app.use((ctx, next) => {   
  const start_time = Date.now();   
  return next().then(() => {     
      const ms = Date.now() - start_time; 
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);  
  }); 
});

app.use(router.routes());  
const server = app.listen(port).on("error", err => {
  console.error(err);
});

module.exports = server;