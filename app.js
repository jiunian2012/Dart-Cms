const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const Router = require('koa-router');
const body = require('koa-body');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const views = require('koa-views');
const ejs = require('ejs');
const tokenStore = require('./utils/token/koa-token-store');
const cookieStore = require('./utils/cookie/koa-cookie-store');

const app = new Koa();

const tokenConfig = require('./utils/config').sessToken;
const cookieConfig = require('./utils/config').sessCookie;
const sessionConfig = require('./utils/config').project;


// 后台管理系统-接口
const manageRouter = require('./router/manage');
// 前台页面系统-路由
const webRouter = require('./router/web');


// 前置中间件-获取用户ip，并且加工成可以使用的ipv4
const filterUserIp = require('./middleware/userIp');
// 后置中间件-路径纠错，处理用户访问路径
const routerCorrect = require('./middleware/router');
// 前置中间件-检测是否关闭了网站
const webService = require('./middleware/service');

// gzip
app.use(compress({
	threshold: 1024
}));
// 检测是否关闭网站
app.use(webService())
// 加工用户IP
app.use(filterUserIp())
// 模板引擎ejs
app.use(views(
	path.resolve(__dirname, './static/template'),
	{ map: {html: 'ejs' }}
));
// 静态文件
app.use(static(
  	path.join( __dirname,  './static'),
  	{
  		maxage: 2592000000
  	}
))
// 参数解析
app.use(bodyParser());
// session cookie
app.use(cookieStore({
    host: cookieConfig.host,
	port: cookieConfig.port,
	dbName: cookieConfig.dbName,
	collection: cookieConfig.collection,
	maxAge: cookieConfig.maxAge,
}))
// session token
app.use(tokenStore({
	host: tokenConfig.host,
	port: tokenConfig.port,
	dbName: tokenConfig.dbName,
	collection: tokenConfig.collection,
	maxAge: tokenConfig.maxAge,
}))


// 页面系统 路由
app.use(webRouter.routes());
// 管理系统 路由
app.use(manageRouter.routes());


// url矫正
app.use(routerCorrect())
// 静态文件 - 处理矫正后的文件访问路径
app.use(static(
  	path.join( __dirname,  './static')
))
// 静态文件没有找到
app.use(async (ctx, next) => {
	// 错啦，没加模板模板路径
	if(ctx.request.method === 'GET'){
		ctx.request.url = '/404/index.html';
	}
	if(ctx.request.method === 'POST'){
		ctx.status = 403;
		ctx.body = '';
	}
	return next()
})
// 接404页面
app.use(static(
  	path.join( __dirname,  './static')
))

app.listen(9999, () => {
	console.log('运行成功，端口 9999');
})