// jsx编译之后会用到React对象, 所以需要引入
import Koa from 'koa';
import routes from './router';
import templating from './templating';

const app = new Koa();
app.use(templating);
app.use(routes.routes(),routes.allowedMethods());

app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`)
})