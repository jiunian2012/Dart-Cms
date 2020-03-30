const { ObjectID } = require('mongodb');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const getDB = require('../utils/baseConnect');
const { setResponse, makeArrObjectID, mixinsScriptConfig, encryption, createTokenID, getBjDate, dirCatImgs, placeUploadImg } = require('../utils/tools');
const { createNavType, getVideoDetill, getTypesData, getSearchData, getCurNavData } = require('./public');

// 首页
let webIndex = async (ctx, next) => {

	let confColl = getDB().collection('config');
	let videoInfoColl = getDB().collection('video_info');
	let otherColl = getDB().collection('other');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;


	let isSwiperLen = 0;
	if(config.openSwiper){
		isSwiperLen = await videoInfoColl.find({popular: true, display: true}).count();
	}
	let tabList = [];

	let allNav = await otherColl.find({type: 'nav_type', parent_id: false, display: true}).sort({index: 1}).toArray();
	let createNavResult = createNavType(allNav, '0');
	let navData = createNavResult.arr;

	for(let arg of allNav){
		let curNavChildren = await otherColl.find({parent_id: arg._id, display: true}).toArray();
		let queryArr = [arg._id];
		for(let arg of curNavChildren){
			queryArr.push(arg._id)
		}
		tabList.push({
			left: {
				title: arg.name,
				_id: arg._id,
				list: await videoInfoColl.find({display: true, video_type: {$in: queryArr}}).sort({rel_time: -1, video_rate: -1, update_time: -1}).limit(12).toArray()
			},
			right: {
				title: '最新' + arg.name,
				list: await videoInfoColl.find({display: true, video_type: {$in: queryArr}}).sort({update_time: 1, rel_time: -1}).limit(12).toArray()
			}
		})
	}

	let data = {
		meta: {
			title: config.websiteName,
			keywords: config.keywords,
			description: config.description,
			hostName: ctx.protocols + '://' + ctx.host,
		},
		isLogin: JSON.stringify(ctx.session1) !== '{}' ? true : false,
		isOpenSwiper: !!isSwiperLen,
		swiperList: (!!isSwiperLen) ? await videoInfoColl.find({display: true, popular: true}).toArray() : [],
		footer: config.footerInfo.replace(/\n/, '<br />'),
		nav: navData,
		//
		tabList: tabList,
		links: await otherColl.find({type: 'link'}).toArray()
	}

	await ctx.render(`${curTempPath}/index`, data)

}
// 视频详情
let webDetill = async (ctx, next) => {

	let confColl = getDB().collection('config');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;

	let data = await getVideoDetill(config, ctx, next);
	// 如果false => 404
	if(!data){
		return next();
	}

	await ctx.render(`${curTempPath}/detill`, data)

}
// 播放页面
let webPlay = async (ctx, next) => {

	let confColl = getDB().collection('config');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;

	let data = await getVideoDetill(config, ctx, next);
	// 如果false => 404
	if(!data){
		return next();
	}

	await ctx.render(`${curTempPath}/player`, data)

}
// 单个分类页面
let webNav = async (ctx, next) => {

	let confColl = getDB().collection('config');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;

	let data = await getCurNavData(config, ctx, next);
	// 如果false => 404
	if(!data){
		return next();
	}

	await ctx.render(`${curTempPath}/nav`, data)

}
// 分类页面
let webType = async (ctx, next) => {

	let confColl = getDB().collection('config');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;

	let data = await getTypesData(config, ctx);

	await ctx.render(`${curTempPath}/type`, data)

}
// 搜索页面
let webSearch = async (ctx, next) => {

	let confColl = getDB().collection('config');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;

	let data = await getSearchData(config, ctx);

	await ctx.render(`${curTempPath}/search`, data)

}
// 用户中心
let webUser = async (ctx, next) => {

	// 未登录
	if(JSON.stringify(ctx.session1) === '{}'){
		return next();
	}

	let confColl = getDB().collection('config');
	let otherColl = getDB().collection('other');

	let config = await confColl.findOne({});
	let curTempPath = config.curTempPath;

	// 全部分类
	let allNav = await otherColl.find({type: 'nav_type', parent_id: false, display: true}).sort({index: 1}).toArray();
	let createNavResult = createNavType(allNav, '0');
	let navData = createNavResult.arr;

	let data = {
		meta: {
			title: config.websiteName,
			keywords: config.keywords,
			description: config.description,
			hostName: ctx.protocols + '://' + ctx.host,
		},
		isLogin: true,
		footer: config.footerInfo.replace(/\n/, '<br />'),
		nav: navData
	}
	await ctx.render(`${curTempPath}/user`, data);

}

module.exports = {
	webIndex,
	webDetill,
	webPlay,
	webNav,
	webType,
	webSearch,
	webUser,
}