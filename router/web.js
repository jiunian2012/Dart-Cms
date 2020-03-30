const Router = require('koa-router');

const {
	webIndex,
	webDetill,
	webPlay,
	webType,
	webNav,
	webSearch,
	webUser,
} = require('../methods/web');
const {
	getVideoMsgList,
	submitMessage,
	userLogin,
	loginOut,
	userRegister,
	getUserInfo,
	setUserInfo,
} = require('../methods/public');

let route = new Router();

// 首页
route.get('/', webIndex);
route.get('/index.html', webIndex);
// 视频详情页
route.get('/detill/:vid.html', webDetill);
// 播放页
route.get('/play/:vid.html', webPlay);
// 单个分类页
route.get('/nav/:nid.html', webNav);
// 分类页
route.get('/type.html', webType);
// 搜索页
route.get('/search.html', webSearch);
// 用户中心
route.get('/user.html', webUser);


// 获取评价列表
route.post('/web/getVideoMsgList', getVideoMsgList);
// 提交评价内容
route.post('/web/submitMessage', submitMessage);
// 用户登录
route.post('/web/userLogin', userLogin);
// 注销登录
route.post('/web/loginOut', loginOut);
// 用户注册
route.post('/web/userRegister', userRegister);
// 获取用户信息
route.post('/web/getUserInfo', getUserInfo);
// 修改用户信息
route.post('/web/setUserInfo', setUserInfo);

module.exports = route