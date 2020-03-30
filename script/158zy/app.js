const getDB = require('../../utils/baseConnect');
const path = require('path');
const fse = require('fs-extra');
const axios = require('axios');
const iconv = require('iconv-lite');
const { ObjectID } = require('mongodb');
const to_json = require('xmljson').to_json;
const Entities = require('html-entities').XmlEntities;
const entitiesCode = new Entities();
const { mixinsScriptConfig, getBjDate } = require('../../utils/tools')

// 封装一手request方法
async function http(url){
	return new Promise((resolve, reject) => {
		axios({
			method: 'GET',
			url: url,
			timeout: 3000,
		})
		.then(res => {
			if(res && res.status === 200){
				resolve(res.data)
			}else{
				resolve(undefined)
			}
		})
		.catch(err => {
			resolve(undefined)
		})
	})
	.catch(err => {
		console.log(url);
	})
}
// 源管理
let sourceManage = async (v_info, videoListColl, pid) => {
	let sourceNameArr = v_info.vod_play.split('$$$');
	let sourceListArr = v_info.vod_url.split('$$$');

	for(let [index, arg] of sourceNameArr.entries()){
		let playList = sourceListArr[index].split(/\r\n/g);
		let isExistSource = await videoListColl.findOne({vid: pid, z_name: arg});
		if(isExistSource){
			let updateSource = {
			    "list" : playList
			}
			await videoListColl.updateOne({vid: pid, z_name: arg}, {$set: updateSource})
		}else{
			let curSourceLen = await videoListColl.find({vid: pid}).count();
			let sourceInfo = {
			    "index" : curSourceLen + 1,
			    "name" : arg,
			    "z_name" : arg,
			    "type" : !index ? "player" : "iframe",
			    "list" : sourceListArr[index].split(/\r\n/g),
			    "vid" : pid,    // insertResult.insertedId
			}
			await videoListColl.insertOne(sourceInfo);
		}
	}
}
// 每一条数据
let getCurVideoData = async (v_info, conf, videoInfoColl, videoListColl, confColl, otherColl) => {

	let config = confColl.findOne({});
	// 找到数据
	let isExist = await videoInfoColl.findOne({videoTitle: v_info.vod_name});

	if(isExist){  // 更新

		let updateInfo = {
		    "videoImage" : v_info.vod_pic,
		    "update_time" : v_info.vod_addtime,
		    "remind_tip" : v_info.vod_continu,
		}
		// 更新信息
		await videoInfoColl.updateOne({_id: isExist._id}, {$set: updateInfo});
		// 源管理
		await sourceManage(v_info, videoListColl, isExist._id);

	}else{  // 新增

		let type_id = await otherColl.findOne({name: v_info.list_name, type: 'nav_type', display: true});
		if(!type_id){
			return
		}
		let v_dir = v_info.vod_director && typeof v_info.vod_director === 'string' ? v_info.vod_director.split(/\/|\s|,|·/g) : [];
		let newV_dir = [];
		for(let arg of v_dir){
			let val = arg.trim();
			if(val){
				newV_dir.push(val)
			}
		}
		let v_actor = v_info.vod_actor && typeof v_info.vod_actor === 'string' ? v_info.vod_actor.split(/\/|\s|,|·/g) : [];
		let newV_actor = [];
		for(let arg of v_actor){
			let val = arg.trim();
			if(val){
				newV_actor.push(val)
			}
		}

		let insertInfo = {
			"videoTitle" : v_info.vod_name.trim(),
		    "director" : newV_dir.join(','),
		    "videoImage" : v_info.vod_pic,
		    "poster" : "",
		    "video_tags" : [],
		    "performer" : newV_actor.join(','),
		    "video_type" : type_id._id,
		    "video_rate" : 0,
		    "update_time" : v_info.vod_addtime,
		    "language" : v_info.vod_language,
		    "sub_region" : v_info.vod_area,
		    "rel_time" : testYear(v_info.vod_year, config),
		    "introduce" : v_info.vod_content,
		    "remind_tip" : v_info.vod_continu,
		    "popular" : false,
		    "allow_reply" : false,
		    "display" : true,
		    "scource_sort" : false
		}

		let insertResult = await videoInfoColl.insertOne(insertInfo);
		if(!insertResult || insertResult.result.ok !== 1){
			return
		}
		// 源管理
		await sourceManage(v_info, videoListColl, insertResult.insertedId);
	}

}
let testYear = (yStr, config) => {
	if(typeof yStr !== 'string'){
		return ''
	}
	if(yStr.length !== 4){
		return ''
	}
	let numYear = Number(yStr);
	let curYear = config.isBjTime ? getBjDate(new Date().getTime()).getFullYear() : new Date().getFullYear();
	let lastYear = 1895;
	if(numYear < lastYear || numYear > curYear){
		return ''
	}
	return yStr
}
let getVideoListData = async (len, conf, videoInfoColl, videoListColl, confColl, otherColl) => {

	for(var i=0; i<=len; i++){

		let bool = true;

		while(bool){

			let body = await http(`${conf.domain}?p=${i+1}`);
			if(!body || body.status !== 200){
				console.log(`列表页无内容，地址：${conf.domain}?p=${i+1}`);
				continue;
			}
			try{
				let list = body.data || [];
				for(let [index, arg] of list.entries()){
					await getCurVideoData(arg, conf, videoInfoColl, videoListColl, confColl, otherColl);
					console.log(`第 ${i+1} 页，共 ${len} 页，第 ${index+1} 条，名称： ${arg.vod_name.trim()}`);
				}
			}catch(err){
				continue;
			}
			break;
		}
	}
}
// 导出
let mainFn = async () => {
	// 如果正在运行，直接退出，确保安全
	let curConfPath = path.resolve(__dirname, './config.json');
	let runConf = fse.readJsonSync(curConfPath);
	if(runConf.state){
		process.exit();
	}
	// 箭头函数 与 promise = 狗币
	return new Promise(async (resolve, reject) => {
		// 开始采集
		mixinsScriptConfig('158zy', {state: true});
		// 获取脚本的配置 域名
		let confPath = path.resolve(__dirname, './config.json')
		let config = await fse.readJson(confPath).catch(err => {
			reject(new Error('发生错误，位置：读取当前教程config文件'))
		})
		// 采集源 首页
		let httpResult = await http(config.domain).catch(err => {
	   		reject(new Error('发生错误，位置：首页'))
	   	});
	   	// 获取总页码
	   	if(!httpResult){
	   		return reject()
	   	}
	   	// 最大采集时间
	   	setTimeout(() => {
	   		reject();
	   	}, config.timeout);
	   	// 正常
	   	let videoInfoColl = getDB().collection('video_info');
	   	let videoListColl = getDB().collection('video_list');
	   	let otherColl = getDB().collection('other');
	   	let confColl = getDB().collection('config');
	   	let maxPage = httpResult.page.pagecount;

	   	await getVideoListData(maxPage, config, videoInfoColl, videoListColl, confColl, otherColl);
	   	console.log('采集完成！');

		resolve();
	}).then(res => {
		// 把采集状态 改成 停止
		mixinsScriptConfig('158zy', {state: false});
		// 停止
		process.exit();
	}).catch(err => {
		console.log(err);
		// 把采集状态 改成 停止
		mixinsScriptConfig('158zy', {state: false});
		// 停止
		process.exit();
	})
}
mainFn();