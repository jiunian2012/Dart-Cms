(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["write"],{"0d52":function(t,e,i){"use strict";var a=i("ef93"),s=i.n(a);s.a},2681:function(t,e,i){"use strict";var a=i("41cb"),s=i.n(a);s.a},"41cb":function(t,e,i){},5182:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pb20 pt20 pl20 pr20"},[i("div",{staticClass:"box pr"},[i("div",{ref:"tip-box",staticClass:"tip-box"},[i("div",{staticClass:"tip-btn btn-warning",on:{click:t.showDrawerInfo}},[i("div",[t._v("点")]),i("div",[t._v("击")]),i("div",[t._v("预")]),i("div",[t._v("览")])]),i("div",{staticClass:"tip-btn btn-primary mt10",on:{click:function(e){return t.remindDialog({type:"reset",text:"此操作将清空当前数据, 是否继续?"})}}},[i("div",[t._v("新")]),i("div",[t._v("增")]),i("div",[t._v("视")]),i("div",[t._v("频")])])]),i("div",[i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("视频标题：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.videoTitle,callback:function(e){t.$set(t.info,"videoTitle",e)},expression:"info.videoTitle"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("封面图片：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex"},[i("div",{staticClass:"pub-flex1"},[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.videoImage,callback:function(e){t.$set(t.info,"videoImage",e)},expression:"info.videoImage"}})],1),i("div",{staticClass:"pub-flex",staticStyle:{width:"130px","justify-content":"flex-end"}},[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return t.$Bus.$emit("changePickerCover",{showState:!0})}}},[t._v("从资源库中选取")])],1)])])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("是否置顶：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex"},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.info.popular,callback:function(e){t.$set(t.info,"popular",e)},expression:"info.popular"}}),i("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("置顶视频需要上传海报图片，请注意！")])],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("海报图片：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex"},[i("div",{staticClass:"pub-flex1"},[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.poster,callback:function(e){t.$set(t.info,"poster",e)},expression:"info.poster"}})],1),i("div",{staticClass:"pub-flex",staticStyle:{width:"130px","justify-content":"flex-end"}},[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return t.$Bus.$emit("changePickerPoster",{showState:!0})}}},[t._v("从资源库中选取")])],1)])])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("导演：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.director,callback:function(e){t.$set(t.info,"director",e)},expression:"info.director"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("主演：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"英文逗号隔开,"},model:{value:t.info.performer,callback:function(e){t.$set(t.info,"performer",e)},expression:"info.performer"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("类型：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-select",{attrs:{size:"small",filterable:"",placeholder:"请选择"},model:{value:t.info.video_type,callback:function(e){t.$set(t.info,"video_type",e)},expression:"info.video_type"}},t._l(t.restaurants,(function(t){return i("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("评分：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex",staticStyle:{height:"32px","justify-content":"flex-start"}},[i("el-rate",{attrs:{max:10,"allow-half":!1,"show-text":!1},model:{value:t.info.video_rate,callback:function(e){t.$set(t.info,"video_rate",e)},expression:"info.video_rate"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("语言：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.language,callback:function(e){t.$set(t.info,"language",e)},expression:"info.language"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("发行地区：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.sub_region,callback:function(e){t.$set(t.info,"sub_region",e)},expression:"info.sub_region"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("发行时间：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.rel_time,callback:function(e){t.$set(t.info,"rel_time",e)},expression:"info.rel_time"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("更新时间：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-date-picker",{attrs:{size:"small","value-format":"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择日期时间"},model:{value:t.info.update_time,callback:function(e){t.$set(t.info,"update_time",e)},expression:"info.update_time"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("影片介绍：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.info.introduce,callback:function(e){t.$set(t.info,"introduce",e)},expression:"info.introduce"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("更新状态：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.info.remind_tip,callback:function(e){t.$set(t.info,"remind_tip",e)},expression:"info.remind_tip"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("允许留言：")]),i("div",{staticClass:"row-con"},[i("div",[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.info.allow_reply,callback:function(e){t.$set(t.info,"allow_reply",e)},expression:"info.allow_reply"}})],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("是否显示：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex"},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.info.display,callback:function(e){t.$set(t.info,"display",e)},expression:"info.display"}}),i("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("默认新建视频显示状态，请注意！")])],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("播放源是否排序：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex"},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.info.scource_sort,callback:function(e){t.$set(t.info,"scource_sort",e)},expression:"info.scource_sort"}}),i("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("默认走系统排序，请注意！")])],1)])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("播放源：")]),i("div",{staticClass:"row-con"},[i("div",[i("div",{staticClass:"pub-flex"},[i("div",{staticStyle:{width:"140px"}},[i("el-select",{staticClass:"pr20",attrs:{size:"small",placeholder:"请选择"},model:{value:t.curSourceType,callback:function(e){t.curSourceType=e},expression:"curSourceType"}},t._l([{k:"内置播放器",v:"player"},{k:"外链播放器",v:"iframe"}],(function(t){return i("el-option",{key:t.v,attrs:{label:t.k,value:t.v}})})),1)],1),i("div",{staticClass:"pr20 pub-flex",staticStyle:{width:"200px"}},[i("span",{staticClass:"row-label"},[t._v("源名称：")]),i("div",{staticClass:"pub-flex1"},[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},on:{change:t.addOneSource},model:{value:t.curSourceName,callback:function(e){t.curSourceName=e},expression:"curSourceName"}})],1)]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addOneSource}},[t._v("新增一组源")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.source.length,expression:"source.length"}],staticClass:"pub-flex pub-flex1",staticStyle:{"justify-content":"flex-end"}},[i("span",{staticClass:"row-label",staticStyle:{width:"90px"}},[t._v("移动当前源：")]),i("el-button-group",[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.moveCurSourcePos("left")}}},[i("i",{staticClass:"fa fa-arrow-left",staticStyle:{"margin-right":"5px"},attrs:{"aria-hidden":"true"}}),i("span",[t._v("向左移动")])]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.moveCurSourcePos("right")}}},[i("span",[t._v("向右移动")]),i("i",{staticClass:"fa fa-arrow-right",staticStyle:{"margin-left":"5px"},attrs:{"aria-hidden":"true"}})])],1)],1)],1),i("div",{staticClass:"tabs mt20"},[i("div",{staticClass:"bar pub-flex"},t._l(t.source,(function(e,a){return i("div",{class:t.curTabIndex===a?"active":"",on:{click:function(e){t.curTabIndex=a}}},[t._v(" "+t._s(e.name)+" "),i("i",{staticClass:"el-icon-close ml10",on:{click:function(e){return e.stopPropagation(),t.removeCurSource(a,e)}}})])})),0),i("div",{staticClass:"pr20 pl20",staticStyle:{border:"1px solid #ddd","border-radius":"4px"}},[i("div",{staticClass:"address pub-flex pt20"},[i("div",{staticClass:"pr20 pub-flex",staticStyle:{width:"200px"}},[i("span",{staticClass:"row-label"},[t._v("名称：")]),i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.target.name,callback:function(e){t.$set(t.target,"name",e)},expression:"target.name"}})],1),i("div",{staticClass:"pub-flex1 pub-flex pr20"},[i("span",{staticClass:"row-label"},[t._v("地址：")]),i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.target.value,callback:function(e){t.$set(t.target,"value",e)},expression:"target.value"}})],1),i("div",[i("el-button",{attrs:{size:"small",type:"success"},on:{click:t.curListAddItem}},[t._v("确定")])],1),i("div",{staticClass:"pl20"},[i("el-button",{attrs:{type:"warning",size:"small"},on:{click:t.showSourceEditDialog}},[t._v("批量添加")])],1)]),i("div",{staticClass:"mt20",staticStyle:{height:"400px","overflow-y":"auto"}},t._l(t.source,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.curTabIndex===a,expression:"curTabIndex === index1"}],key:e.z_name},[e.list.length?i("div",t._l(e.list,(function(e,s){return i("div",{staticClass:"pub-flex source-item"},[i("i",{staticClass:"el-icon-close ml20 pointer",on:{click:function(e){return t.removeCurItem(a,s)}}}),i("div",{staticClass:"pl20"},[i("span",[t._v("名称：")]),i("span",{staticStyle:{color:"#67C23A"}},[t._v(t._s(e.split("$")[0]))])]),i("div",{staticClass:"pl20"},[i("span",[t._v("地址：")]),i("span",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(e.split("$")[1]))])])])})),0):i("div",{staticClass:"text-center pt20 pb20"},[i("p",[t._v("暂无源")])])])})),0)])])])])]),i("div",{staticClass:"row-item clearfix"},[i("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("提交选择：")]),i("div",{staticClass:"row-con"},[i("div",{staticClass:"pub-flex"},[t.isEdit?i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.remindDialog({type:"edit",text:"此操作将更新一条数据, 是否继续?"})}}},[t._v("确认更新")]):i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return t.remindDialog({type:"add",text:"此操作将添加一条数据, 是否继续?"})}}},[t._v("确认添加")])],1)])])])]),i("drawer-cover",{on:{select:t.setDataValue}}),i("drawer-poster",{on:{select:t.setDataValue}}),i("drawer-info"),i("dialog-player"),i("dialog-source",{on:{select:t.deliveryResult}})],1)},s=[],o=(i("66af"),i("e8ce"),i("252c"),i("f775"),i("0448"),i("bcf7"),i("0d15"),i("c41e"),i("6004"),i("79fd"),i("f95f"),i("e910"),i("4236"),i("5228"),i("2ff6")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video-drawer-cover",attrs:{time:"1577962209700"}},[i("el-drawer",{staticClass:"cat_info",attrs:{title:"查看所有封面图片",direction:"rtl",size:"550px",modal:!0,"append-to-body":!0,"close-on-press-escape":!1,"destroy-on-close":!0,visible:t.showState},on:{close:function(e){t.showState=!1},"update:visible":function(e){t.showState=e}}},[i("div",{staticClass:"moreInfo pub-flex pub-column",staticStyle:{overflow:"hidden"}},[i("div",{staticClass:"pub-flex",staticStyle:{width:"100%"}},[i("el-upload",{staticClass:"upload-demo",attrs:{action:t.getUpLoadUrl(),"before-upload":t.authFile,headers:t.getHeaderConf(),data:{catName:"cover"},"show-file-list":!1,multiple:!1,"on-success":t.uploadSuccess}},[i("el-button",{staticStyle:{width:"100%",display:"block"},attrs:{type:"primary"}},[t._v("点击上传图片")])],1),i("div",{staticClass:"pub-flex1"},[i("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("点击图片选择图片")])])],1),i("div",{staticStyle:{width:"100%",height:"20px"}}),i("div",{staticClass:"pub-flex1 cover-row ov-x-h ov-y-a",staticStyle:{width:"100%"}},[i("el-row",{attrs:{gutter:20}},t._l(t.list,(function(e){return i("el-col",{key:e.path,attrs:{span:8}},[i("div",{staticClass:"row-img-item",staticStyle:{padding:"3px"}},[i("div",{staticClass:"pr"},[i("img",{attrs:{src:t.createFilePath(e.path,"/api"),alt:""},on:{click:function(i){return t.selectCoverResult(e.path)}}}),i("i",{staticClass:"el-icon-close pa icon-close-btn",on:{click:function(i){return i.stopPropagation(),t.remindDialog(e.name)}}}),e.occupt?i("p",{staticClass:"occupy-tip"},[t._v("该图片正在被使用中")]):t._e()])])])})),1)],1),i("div",{staticStyle:{width:"100%",height:"20px"}})])])],1)},n=[],l=(i("3be6"),i("093a")),c=i("b893"),u={data:function(){return{showState:!1,list:[]}},methods:{selectCoverResult:function(t){this.$emit("select",t,"videoImage"),this.showState=!1},remindDialog:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.deleteData(t)})).catch((function(){}))},deleteData:function(t){var e=this;Object(l["i"])({catName:"cover",fileName:t},{loading:!0}).then((function(t){e.ajaxMsgTips(t),200===t.data.code&&e.pullData({remind:!1})}))},getUpLoadUrl:function(){var t=Object(l["n"])();return Object(c["d"])()?"/api".concat(t):t},authFile:function(t){for(var e=[".jpg",".png",".jpeg",".gif"],i=t.name.lastIndexOf("."),a=t.name.substring(i).toLocaleLowerCase(),s=0,o=e;s<o.length;s++){var r=o[s];if(r===a)return!0}return this.$message({type:"warning",message:"该上传文件类型不符合要求！"}),!1},uploadSuccess:function(t,e,i){this.ajaxMsgTips({data:{code:t.code,text:t.text}}),200===t.code&&this.pullData({remind:!1})},getHeaderConf:function(){return{Token:Object(c["b"])("token").value}},pullData:function(t){var e=this;Object(l["d"])().then((function(i){t.remind&&e.ajaxMsgTips(i),200===i.data.code&&(e.list=i.data.value,t.cb&&"function"===typeof t.cb&&t.cb())}))}},created:function(){var t=this;this.$Bus.$off("changePickerCover"),this.$Bus.$on("changePickerCover",(function(e){e.showState&&t.pullData({cb:function(){t.showState=e.showState},remind:!0})}))}},d=u,f=(i("7dbc"),i("e1d6"),i("5511")),p=Object(f["a"])(d,r,n,!1,null,"004863a1",null),v=p.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video-drawer-poster",attrs:{time:"1578021849735"}},[i("el-drawer",{staticClass:"cat_info",attrs:{title:"查看所有海报图片",direction:"rtl",size:"550px",modal:!0,"append-to-body":!0,"close-on-press-escape":!1,"destroy-on-close":!0,visible:t.showState},on:{close:function(e){t.showState=!1},"update:visible":function(e){t.showState=e}}},[i("div",{staticClass:"moreInfo pub-flex pub-column",staticStyle:{overflow:"hidden"}},[i("div",{staticClass:"pub-flex",staticStyle:{width:"100%"}},[i("el-upload",{staticClass:"upload-demo",attrs:{action:t.getUpLoadUrl(),"before-upload":t.authFile,headers:t.getHeaderConf(),data:{catName:"poster"},"show-file-list":!1,multiple:!1,"on-success":t.uploadSuccess}},[i("el-button",{staticStyle:{width:"100%",display:"block"},attrs:{type:"primary"}},[t._v("点击上传图片")])],1),i("div",{staticClass:"pub-flex1"},[i("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("点击图片选择图片")])])],1),i("div",{staticStyle:{width:"100%",height:"20px"}}),i("div",{staticClass:"pub-flex1 poster-row ov-y-a ov-x-h",staticStyle:{width:"100%"}},[i("el-row",t._l(t.list,(function(e){return i("el-col",{key:e.path,staticStyle:{padding:"4px"},attrs:{span:24}},[i("div",{staticClass:"row-img-item",staticStyle:{padding:"3px"}},[i("div",{staticClass:"pr"},[i("img",{attrs:{src:t.createFilePath(e.path,"/api"),alt:""},on:{click:function(i){return t.selectCoverResult(e.path)}}}),i("i",{staticClass:"el-icon-close pa icon-close-btn",on:{click:function(i){return i.stopPropagation(),t.remindDialog(e.name)}}}),e.occupt?i("p",{staticClass:"occupy-tip"},[t._v("该图片正在被使用中")]):t._e()])])])})),1)],1),i("div",{staticStyle:{width:"100%",height:"20px"}})])])],1)},m=[],g={data:function(){return{showState:!1,list:[]}},methods:{selectCoverResult:function(t){this.$emit("select",t,"poster"),this.showState=!1},remindDialog:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.deleteData(t)})).catch((function(){}))},deleteData:function(t){var e=this;Object(l["i"])({catName:"poster",fileName:t},{loading:!0}).then((function(t){e.ajaxMsgTips(t),200===t.data.code&&e.pullData({remind:!1})}))},getUpLoadUrl:function(){var t=Object(l["n"])();return Object(c["d"])()?"/api".concat(t):t},authFile:function(t){for(var e=[".jpg",".png",".jpeg",".gif"],i=t.name.lastIndexOf("."),a=t.name.substring(i).toLocaleLowerCase(),s=0,o=e;s<o.length;s++){var r=o[s];if(r===a)return!0}return this.$message({type:"warning",message:"该上传文件类型不符合要求！"}),!1},uploadSuccess:function(t,e,i){this.ajaxMsgTips({data:{code:t.code,text:t.text}}),200===t.code&&this.pullData({remind:!1})},getHeaderConf:function(){return{Token:Object(c["b"])("token").value}},pullData:function(t){var e=this;Object(l["e"])().then((function(i){t.remind&&e.ajaxMsgTips(i),200===i.data.code&&(e.list=i.data.value,t.cb&&"function"===typeof t.cb&&t.cb())}))}},created:function(){var t=this;this.$Bus.$off("changePickerPoster"),this.$Bus.$on("changePickerPoster",(function(e){e.showState&&t.pullData({cb:function(){t.showState=e.showState},remind:!0})}))}},b=g,x=(i("0d52"),i("82cf"),Object(f["a"])(b,h,m,!1,null,"91e35356",null)),y=x.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-edit-cource",attrs:{time:"1578144601505"}},[i("el-dialog",{attrs:{title:"批量添加播放源",visible:t.showState,"close-on-click-modal":!1,width:"800px"},on:{"update:visible":function(e){t.showState=e}}},[i("div",{staticClass:"pb20"},[i("p",{staticStyle:{color:"#F56C6C"}},[t._v("注意：例如 HD高清$http://xxx.xxx.com/xxx/xxx/xxx/xxx/xxx.m3u8")]),i("p",{staticStyle:{color:"#F56C6C"}},[t._v("注意：多行回车换行，标题和url中间使用 "),i("span",{staticStyle:{color:"#409EFF"}},[t._v("$")]),t._v(" 隔开")])]),i("div",{},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},placeholder:"请输入内容"},model:{value:t.sourceVal,callback:function(e){t.sourceVal=e},expression:"sourceVal"}})],1),i("div",{staticClass:"pt20 text-right"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.createList}},[t._v("确定")])],1)])],1)},C=[],_=(i("4861"),{data:function(){return{showState:!1,sourceVal:"",curSource:[]}},methods:{createList:function(){var t=this,e=this.sourceVal.split("\n").filter((function(t){return t&&t.trim()}));e.length?this.$confirm("您输入了 ".concat(e.length," 条记录，是否确认？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$emit("select",e),t.showState=!1})).catch((function(){})):this.$message({type:"warning",message:"您没有输入任何记录！"})}},watch:{showState:function(t,e){t||(this.sourceVal="",this.curSource=[])}},created:function(){var t=this;this.$Bus.$off("changeEditSource"),this.$Bus.$on("changeEditSource",(function(e){t.showState=e}))}}),S=_,$=(i("2681"),Object(f["a"])(S,w,C,!1,null,"01dd0fa4",null)),T=$.exports,k=i("c24f7"),I=i("71b7"),j=i("cc69"),D={components:{DrawerCover:v,DrawerPoster:y,DrawerInfo:k["a"],DialogPlayer:I["a"],DialogSource:T},data:function(){return{isEdit:!1,_id:"",infos:{videoTitle:"",director:"",performer:"",video_type:"",video_rate:0,language:"",sub_region:"",rel_time:"",introduce:"",remind_tip:"",videoImage:"",video_tags:"",update_time:"",poster:"",allow_reply:!1,popular:!1,display:!0,scource_sort:!1},info:{},source:[],target:{name:"",value:""},curSourceName:"",curSourceType:"player",curTabIndex:0,restaurants:[]}},methods:{showSourceEditDialog:function(){this.source.length?this.$Bus.$emit("changeEditSource",!0):this.$message({type:"warning",message:"没有播放源可供添加，请先添加一组播放源！",duration:1e3})},deliveryResult:function(t){this.source[this.curTabIndex].list=this.source[this.curTabIndex].list.concat(t)},showDrawerInfo:function(){var t=this.createInfoData({getType:!0});t&&this.$Bus.$emit("changeVideoDrawerState",{showState:!0,is_pull:!1,data:t})},remindDialog:function(t){var e=this;this.$confirm(t.text,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){"add"===t.type?e.insertVideoInfo():"edit"===t.type?e.updateVideoInfo():"reset"===t.type&&e.$router.push({path:"/main/write",query:{time:(new Date).getTime()}})})).catch((function(){}))},searchTypeVal:function(){var t=this.info.video_type,e=!0,i=!1,a=void 0;try{for(var s,o=this.restaurants[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var r=s.value;if(r._id===t)return r.name.replace("┣━━━━━","")}}catch(n){i=!0,a=n}finally{try{e||null==o.return||o.return()}finally{if(i)throw a}}},createInfoData:function(t){var e=t.getType,i=void 0!==e&&e;if(this.info.videoTitle.trim())if(this.info.videoImage.trim()){if(this.info.video_type.trim()&&24===this.info.video_type.length){var a={videoTitle:this.info.videoTitle.trim(),director:this.info.director.trim(),videoImage:this.info.videoImage.trim(),poster:this.info.poster.trim(),video_tags:this.info.video_tags.trim()?this.info.video_tags.trim().split(","):[],performer:this.info.performer.trim(),video_type:i?this.searchTypeVal():this.info.video_type.trim(),video_rate:this.info.video_rate,update_time:this.info.update_time,language:this.info.language.trim(),sub_region:this.info.sub_region.trim(),rel_time:this.info.rel_time.trim(),introduce:this.info.introduce.trim(),remind_tip:this.info.remind_tip.trim(),popular:this.info.popular,allow_reply:this.info.allow_reply,display:this.info.display,scource_sort:this.info.scource_sort};return{info:a,source:this.source}}this.$message({type:"warning",message:"视频分类必填！",duration:1e3})}else this.$message({type:"warning",message:"封面图片必填！",duration:1e3});else this.$message({type:"warning",message:"视频标题必填！",duration:1e3})},updateVideoInfo:function(){var t=this,e=this.createInfoData({getType:!1});e&&(e["_id"]=this._id,Object(l["l"])(e).then((function(e){t.ajaxMsgTips(e),setTimeout((function(){t.$router.push({path:"/main/video"})}),500)})))},insertVideoInfo:function(){var t=this,e=this.createInfoData({getType:!1});e&&Object(l["b"])(e).then((function(e){t.ajaxMsgTips(e),setTimeout((function(){t.$router.push({path:"/main/video"})}),500)}))},setDataValue:function(t,e){this.info[e]=t},resetSourceItemIndex:function(){var t=!0,e=!1,i=void 0;try{for(var a,s=this.source.entries()[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var r=Object(o["a"])(a.value,2),n=r[0],l=r[1];l["index"]=n}}catch(c){e=!0,i=c}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}},moveCurSourcePos:function(t){if("left"===t){if(0===this.curTabIndex)return;var e=this.source[this.curTabIndex-1],i=this.source[this.curTabIndex];return this.$set(this.source,this.curTabIndex-1,i),this.$set(this.source,this.curTabIndex,e),this.curTabIndex--,void this.resetSourceItemIndex()}if("right"===t){if(this.curTabIndex===this.source.length-1)return;var a=this.source[this.curTabIndex+1],s=this.source[this.curTabIndex];this.$set(this.source,this.curTabIndex+1,s),this.$set(this.source,this.curTabIndex,a),this.curTabIndex++,this.resetSourceItemIndex()}},removeCurSource:function(t){this.source.splice(t,1)},curListAddItem:function(){this.source.length?this.target.name?this.target.value?(this.source[this.curTabIndex].list.push("".concat(this.target.name,"$").concat(this.target.value)),this.target={name:"",value:""}):this.$message({type:"warning",message:"请输入链接",duration:1e3}):this.$message({type:"warning",message:"请输入名称",duration:1e3}):this.$message({type:"warning",message:"请先添加一组源",duration:1e3})},addOneSource:function(){this.curSourceName?(this.source.push({index:this.source.length,name:this.curSourceName,z_name:(new Date).getTime()+"",type:this.curSourceType,list:[]}),this.curSourceName=""):this.$message({type:"warning",message:"请输入源名称",duration:1e3})},removeCurItem:function(t,e){this.source[t].list.splice(e,1)},pullAllTypes:function(){var t=this;Object(j["b"])({},{loading:!0}).then((function(e){if(200===e.data.code){var i=[],a=!0,s=!1,o=void 0;try{for(var r,n=e.data.value[Symbol.iterator]();!(a=(r=n.next()).done);a=!0){var l=r.value;if(i.push({name:l.name,_id:l._id}),l.children&&l.children.length){var c=!0,u=!1,d=void 0;try{for(var f,p=l.children[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var v=f.value;i.push({name:"┣━━━━━"+v.name,_id:v._id})}}catch(h){u=!0,d=h}finally{try{c||null==p.return||p.return()}finally{if(u)throw d}}}}}catch(h){s=!0,o=h}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}t.restaurants=i}}))},pullCurVideoInfo:function(t){var e=this;Object(l["f"])({_id:t}).then((function(t){if(200===t.data.code&&t.data.value.length){var i=t.data.value[0],a=i.video_tags.join(",");e.source=i.source,e.info=Object.assign({},i,{video_tags:a})}}))},setTipBtnStyle:function(t){var e=this.$refs["tip-box"],i=0;t&&(i=t.target.scrollTop),e&&e.style&&(e.style.top=document.body.clientHeight/2+i-45+"px")},initEvent:function(){var t=document.getElementsByClassName("cpt-con")[0];this.setTipBtnStyle(),t.onscroll=this.setTipBtnStyle},initSetting:function(){var t=this.$route.query._id;this.isEdit=!(!t||24!==t.length),this._id=this.isEdit?t:"",this.isEdit?this.pullCurVideoInfo(t):(this.info=Object.assign({},this.infos),this.source=[]),this.pullAllTypes()}},created:function(){this.initSetting()},watch:{$route:function(t,e){this.initSetting()}},mounted:function(){this.$nextTick(this.initEvent)},beforeDestroy:function(){var t=document.getElementsByClassName("cpt-con")[0];t.onresize=null}},O=D,z=(i("91eb"),Object(f["a"])(O,a,s,!1,null,"e67a84ae",null));e["default"]=z.exports},5257:function(t,e,i){},"7dbc":function(t,e,i){"use strict";var a=i("5257"),s=i.n(a);s.a},"7de5":function(t,e,i){},"82cf":function(t,e,i){"use strict";var a=i("da7e"),s=i.n(a);s.a},"91eb":function(t,e,i){"use strict";var a=i("7de5"),s=i.n(a);s.a},bcf7:function(t,e,i){"use strict";var a=i("0e6f"),s=i("06de"),o=i("6037"),r=i("af3a"),n=i("7243"),l=i("d88a"),c=i("7dd2"),u=i("9d72"),d=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var i,a,u,h,m,g,b=n(this),x=r(b.length),y=s(t,x),w=arguments.length;if(0===w?i=a=0:1===w?(i=0,a=x-y):(i=w-2,a=f(d(o(e),0),x-y)),x+i-a>p)throw TypeError(v);for(u=l(b,a),h=0;h<a;h++)m=y+h,m in b&&c(u,h,b[m]);if(u.length=a,i<a){for(h=y;h<x-a;h++)m=h+a,g=h+i,m in b?b[g]=b[m]:delete b[g];for(h=x;h>x-a+i;h--)delete b[h-1]}else if(i>a)for(h=x-a;h>y;h--)m=h+a-1,g=h+i-1,m in b?b[g]=b[m]:delete b[g];for(h=0;h<i;h++)b[h+y]=arguments[h+2];return b.length=x-a+i,u}})},cc69:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return o})),i.d(e,"d",(function(){return r})),i.d(e,"e",(function(){return n})),i.d(e,"c",(function(){return l}));var a=i("b775");function s(t,e){return Object(a["a"])({url:"/manage/nav/getNavList",method:"GET",params:t||{}},e||{})}function o(t,e){return Object(a["a"])({url:"/manage/nav/addNav",method:"POST",data:t||{}},e||{})}function r(t,e){return Object(a["a"])({url:"/manage/nav/removeNav",method:"POST",data:t||{}},e||{})}function n(t,e){return Object(a["a"])({url:"/manage/nav/updateNav",method:"POST",data:t||{}},e||{})}function l(t,e){return Object(a["a"])({url:"/manage/nav/navSort",method:"POST",data:t||{}},e||{})}},da7e:function(t,e,i){},dbf3:function(t,e,i){},e1d6:function(t,e,i){"use strict";var a=i("dbf3"),s=i.n(a);s.a},ef93:function(t,e,i){},f95f:function(t,e,i){"use strict";var a=i("8e10"),s=i("91cf"),o=i("7243"),r=i("af3a"),n=i("6037"),l=i("350f"),c=i("c87c"),u=i("be52"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,i,a){return[function(i,a){var s=l(this),o=void 0==i?void 0:i[t];return void 0!==o?o.call(i,s,a):e.call(String(s),i,a)},function(t,o){if(a.REPLACE_KEEPS_$0||"string"===typeof o&&-1===o.indexOf("$0")){var l=i(e,t,this,o);if(l.done)return l.value}var p=s(t),v=String(this),h="function"===typeof o;h||(o=String(o));var b=p.global;if(b){var x=p.unicode;p.lastIndex=0}var y=[];while(1){var w=u(p,v);if(null===w)break;if(y.push(w),!b)break;var C=String(w[0]);""===C&&(p.lastIndex=c(v,r(p.lastIndex),x))}for(var _="",S=0,$=0;$<y.length;$++){w=y[$];for(var T=String(w[0]),k=d(f(n(w.index),v.length),0),I=[],j=1;j<w.length;j++)I.push(m(w[j]));var D=w.groups;if(h){var O=[T].concat(I,k,v);void 0!==D&&O.push(D);var z=String(o.apply(void 0,O))}else z=g(T,v,k,I,D,o);k>=S&&(_+=v.slice(S,k)+z,S=k+T.length)}return _+v.slice(S)}];function g(t,i,a,s,r,n){var l=a+t.length,c=s.length,u=h;return void 0!==r&&(r=o(r),u=v),e.call(n,u,(function(e,o){var n;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,a);case"'":return i.slice(l);case"<":n=r[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===s[d-1]?o.charAt(1):s[d-1]+o.charAt(1):e}n=s[u-1]}return void 0===n?"":n}))}}))}}]);