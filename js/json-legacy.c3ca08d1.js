(window.webpackJsonp=window.webpackJsonp||[]).push([["json"],{"04cb":function(e,t,i){},2216:function(e,t,i){"use strict";var r=i("b011");i.n(r).a},"33a5":function(e,t,i){"use strict";var r=i("d4ec"),a=i("bee2"),n=i("99de"),l=i("7e84"),o=i("262e"),s=i("9ab4"),u=i("60a3"),c=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).labelCol={labelCol:{span:6},wrapperCol:{span:18}},e.noLabelCol={wrapperCol:{span:24}},e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"mounted",value:function(){this.form.getFieldDecorator(this.identifier,{initialValue:this.configuration.default,rules:[{required:this.configuration.required,type:"string"}]})}}]),t}(u.f);Object(s.a)([Object(u.d)(Object)],c.prototype,"configuration",void 0),Object(s.a)([Object(u.d)(String)],c.prototype,"identifier",void 0),Object(s.a)([Object(u.b)()],c.prototype,"form",void 0);var d=c=Object(s.a)([u.a],c),f=i("2877"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-item",e._b({scopedSlots:e._u([e.configuration.title?{key:"label",fn:function(){return[e._v(" "+e._s(e.configuration.title)+" "),e.configuration.desc?i("a-tooltip",{attrs:{title:e.configuration.desc}},[i("a-icon",{staticStyle:{"vertical-align":"-0.125em"},attrs:{type:"question-circle"}})],1):e._e()]},proxy:!0}:null],null,!0)},"a-form-item",e.configuration.title?e.labelCol:e.noLabelCol,!1),[e._t("type-select"),i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.identifier,{initialValue:e.configuration.default,rules:[{required:e.configuration.required,type:"string"}]}],expression:"[\n      identifier,\n      {\n        initialValue: configuration.default,\n        rules: [{\n          required: configuration.required,\n          type: 'string'\n        }]\n      }\n    ]"}],attrs:{autosize:{minRows:2}}})],2)}),[],!1,null,null,null);t.a=p.exports},4034:function(e){e.exports=JSON.parse('[{"title":"完全支持","content":[{"text":"页面标题","id":"head","icon":"icon-nav"},{"text":"标题","id":"title","icon":"icon-title"},{"text":"段落","id":"p","icon":"icon-paragraph"},{"text":"图片","id":"img","icon":"icon-image"},{"text":"列表","id":"list","icon":"icon-list"},{"text":"页脚","id":"foot","icon":"icon-foot"},{"text":"网格","id":"grid","icon":"icon-grid"},{"text":"电话","id":"phone","icon":"icon-phone"}]},{"title":"仅小程序","content":[{"text":"文档","id":"doc","icon":"icon-doc"},{"text":"公众号","id":"gzh","icon":"icon-gzh"},{"text":"介绍","id":"intro","icon":"icon-avatar"},{"text":"音频","id":"audio","icon":"icon-audio"},{"text":"视频","id":"video","icon":"icon-video"},{"text":"轮播图","id":"swiper","icon":"icon-carousel"}]}]')},"43d8":function(e,t,i){"use strict";var r=i("9000");i.n(r).a},"4af8":function(e,t,i){"use strict";i.r(t);i("d3b7");var r=i("53ca"),a=i("d4ec"),n=i("bee2"),l=i("99de"),o=i("7e84"),s=i("262e"),u=i("9ab4"),c=i("60a3"),d=i("a354"),f=i("549f"),p=i("a2d5"),b=i("bb14"),y=i("33a5"),g=i("a07a"),m=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"tag",get:function(){return"object"===Object(r.a)(this.configuration.type)?"form-union-input":this.configuration.enum?"form-enum-input":"form-".concat(this.configuration.type,"-input")}}]),t}(c.f);Object(u.a)([Object(c.d)(Object)],m.prototype,"configuration",void 0),Object(u.a)([Object(c.d)(String)],m.prototype,"identifier",void 0);var v=m=Object(u.a)([Object(c.a)({components:{FormBooleanInput:d.a,FormEnumInput:f.a,FormNumberInput:p.a,FormStringInput:b.a,FormTextareaInput:y.a,FormUrlInput:g.a,FormArrayInput:function(){return i.e("chunk-3091dd3d").then(i.bind(null,"bd06"))},FormObjectInput:function(){return i.e("chunk-2d0b610f").then(i.bind(null,"1c29"))},FormUnionInput:function(){return i.e("chunk-2d224eb3").then(i.bind(null,"e1d5"))}}})],m),h=i("2877"),j=Object(h.a)(v,(function(){var e=this.$createElement;return(this._self._c||e)(this.tag,{tag:"component",attrs:{configuration:this.configuration,identifier:this.identifier}})}),[],!1,null,null,null);t.default=j.exports},"4ea5":function(e,t,i){},"549f":function(e,t,i){"use strict";i("4160"),i("159b");var r=i("d4ec"),a=i("bee2"),n=i("99de"),l=i("7e84"),o=i("262e"),s=i("9ab4"),u=i("60a3"),c=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).labelCol={labelCol:{span:6},wrapperCol:{span:18}},e.noLabelCol={wrapperCol:{span:24}},e.enumValue=[],e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"created",value:function(){var e=[];this.configuration.enum.forEach((function(t){e.push(t.value)})),this.enumValue=e}},{key:"mounted",value:function(){this.form.getFieldDecorator(this.identifier,{initialValue:this.configuration.default,rules:[{required:this.configuration.required,type:"enum",enum:this.enumValue}]})}}]),t}(u.f);Object(s.a)([Object(u.d)(Object)],c.prototype,"configuration",void 0),Object(s.a)([Object(u.d)(String)],c.prototype,"identifier",void 0),Object(s.a)([Object(u.b)()],c.prototype,"form",void 0);var d=c=Object(s.a)([u.a],c),f=i("2877"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-item",e._b({scopedSlots:e._u([e.configuration.title?{key:"label",fn:function(){return[e._v(" "+e._s(e.configuration.title)+" "),e.configuration.desc?i("a-tooltip",{attrs:{title:e.configuration.desc}},[i("a-icon",{staticStyle:{"vertical-align":"-0.125em"},attrs:{type:"question-circle"}})],1):e._e()]},proxy:!0}:null],null,!0)},"a-form-item",e.configuration.title?e.labelCol:e.noLabelCol,!1),[e._t("type-select"),e.configuration.enum?i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.identifier,{initialValue:e.configuration.default,rules:[{required:e.configuration.required,type:"enum",enum:e.enumValue}]}],expression:"[\n      identifier,\n      {\n        initialValue: configuration.default,\n        rules: [{\n          required: configuration.required,\n          type: 'enum',\n          enum: enumValue\n        }]\n      }\n    ]"}],attrs:{name:e.identifier,options:e.configuration.enum}}):e._e()],2)}),[],!1,null,null,null);t.a=p.exports},"5d51":function(e,t,i){"use strict";i.r(t);var r=i("d4ec"),a=i("bee2"),n=i("99de"),l=i("7e84"),o=i("262e"),s=i("9ab4"),u=i("60a3"),c=i("f49e"),d=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).online=!1,e.jsonName="",e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"newJson",value:function(){this.$emit("json",""),this.$emit("next")}},{key:"getOnlineJson",value:function(){}}]),t}(u.f),f=d=Object(s.a)([u.a],d),p=(i("9807"),i("2877")),b=Object(p.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-row",[i("a-col",{attrs:{md:8,sm:24}},[i("a-upload-dragger",{attrs:{name:"file"}},[i("p",{staticClass:"ant-upload-drag-icon"},[i("a-icon",{attrs:{type:"inbox"}})],1),i("p",{staticClass:"ant-upload-text"},[e._v("上传文件")]),i("p",{staticClass:"ant-upload-hint"},[e._v("点击或拖动文件到此处以上传")])])],1),i("a-divider",{attrs:{type:"$store.state.sc"}},[i("span",{staticStyle:{"font-size":"18px"}},[e._v("或")])]),i("a-col",{attrs:{md:8,sm:24}},[i("a-button",{attrs:{block:"",icon:"plus-square",size:"large"},on:{click:e.newJson}},[e._v("新建")])],1),i("a-divider",[i("span",{staticStyle:{"font-size":"18px"}},[e._v("或")])]),i("a-col",{attrs:{md:8,sm:24}},[i("a-button",{attrs:{block:"",icon:"plus-square",size:"large"},on:{click:function(t){e.online=!0}}},[e._v("选择线上文件")]),e.online?i("div",{staticClass:"jsonNameInputCtn"},[i("a-input",{staticClass:"jsonNameInput",attrs:{placeholder:"请输入Json页面名称"},model:{value:e.jsonName,callback:function(t){e.jsonName=t},expression:"jsonName"}}),i("a-button",{attrs:{type:"primary"},on:{click:e.getOnlineJson}},[e._v("获取")])],1):e._e()],1)],1)}),[],!1,null,"416a5b84",null).exports,y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).config=[{title:"选择类型"},{title:"编辑JSON"},{title:"预览页面"},{title:"保存或上传"}],e.current=0,e.pageJson="",e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"next",value:function(){this.current+=1}},{key:"previous",value:function(){this.current-=1}}]),t}(u.f),g=y=Object(s.a)([Object(u.a)({components:{BaseSteps:c.a,JsonSelect:b}})],y),m=(i("2216"),Object(p.a)(g,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("base-steps",{attrs:{config:e.config},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),0===e.current?i("json-select",{on:{json:function(t){e.pageJson=t},next:e.next}}):e._e(),i("div",{staticClass:"footBtnCtn"},[e.current+1===e.config.length?i("a-button",{attrs:{type:"primary"},domProps:{textContent:e._s("完成")},on:{click:e.done}}):i("a-button",{attrs:{type:"primary"},domProps:{textContent:e._s("下一步")},on:{click:e.next}}),0!==e.current?i("a-button",{domProps:{textContent:e._s("上一步")},on:{click:e.previous}}):e._e()],1)],1)}),[],!1,null,"19e93dda",null));t.default=m.exports},9e3:function(e,t,i){},9807:function(e,t,i){"use strict";var r=i("04cb");i.n(r).a},a07a:function(e,t,i){"use strict";var r=i("ade3"),a=i("d4ec"),n=i("bee2"),l=i("99de"),o=i("7e84"),s=i("262e"),u=i("9ab4"),c=i("60a3"),d=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).apply(this,arguments))).labelCol={labelCol:{span:6},wrapperCol:{span:18}},e.noLabelCol={wrapperCol:{span:24}},e.prefix="https://",e.path="",e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"onUrlChange",value:function(e){this.form.setFieldsValue(Object(r.a)({},this.identifier,e))}},{key:"url",get:function(){return this.path?this.prefix+this.path:""}}]),t}(c.f);Object(u.a)([Object(c.d)(Object)],d.prototype,"configuration",void 0),Object(u.a)([Object(c.d)(String)],d.prototype,"identifier",void 0),Object(u.a)([Object(c.b)()],d.prototype,"form",void 0),Object(u.a)([Object(c.g)("url")],d.prototype,"onUrlChange",null);var f=d=Object(u.a)([c.a],d),p=i("2877"),b=Object(p.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-item",e._b({scopedSlots:e._u([e.configuration.title?{key:"label",fn:function(){return[e._v(" "+e._s(e.configuration.title)+" "),e.configuration.desc?i("a-tooltip",{attrs:{title:e.configuration.desc}},[i("a-icon",{staticStyle:{"vertical-align":"-0.125em"},attrs:{type:"question-circle"}})],1):e._e()]},proxy:!0}:null],null,!0)},"a-form-item",e.configuration.title?e.labelCol:e.noLabelCol,!1),[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.identifier,{rules:[{required:e.configuration.required,type:e.path?""===e.prefix?"string":"url":"string"}]}],expression:"[\n      identifier,\n      {\n        rules: [{\n          required: configuration.required,\n          type: path ? prefix==='' ? 'string' :'url' :'string'\n        }]\n      }\n    ]"}],attrs:{type:"hidden"}}),i("a-input",{model:{value:e.path,callback:function(t){e.path=t},expression:"path"}},[i("a-select",{staticStyle:{width:"90px"},attrs:{slot:"addonBefore",options:[{label:"https://",value:"https://"},{label:"http://",value:"http://"},{label:"无前缀",value:""}],"default-value":"https://"},slot:"addonBefore",model:{value:e.prefix,callback:function(t){e.prefix=t},expression:"prefix"}})],1)],1)}),[],!1,null,null,null);t.a=b.exports},a2d5:function(e,t,i){"use strict";var r=i("d4ec"),a=i("bee2"),n=i("99de"),l=i("7e84"),o=i("262e"),s=i("9ab4"),u=i("60a3"),c=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).labelCol={labelCol:{span:6},wrapperCol:{span:18}},e.noLabelCol={wrapperCol:{span:24}},e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"mounted",value:function(){this.form.getFieldDecorator(this.identifier,{initialValue:this.configuration.default,rules:[{required:this.configuration.required,type:"number"}]})}}]),t}(u.f);Object(s.a)([Object(u.d)(Object)],c.prototype,"configuration",void 0),Object(s.a)([Object(u.d)(String)],c.prototype,"identifier",void 0),Object(s.a)([Object(u.b)()],c.prototype,"form",void 0);var d=c=Object(s.a)([u.a],c),f=i("2877"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-item",e._b({scopedSlots:e._u([e.configuration.title?{key:"label",fn:function(){return[e._v(" "+e._s(e.configuration.title)+" "),e.configuration.desc?i("a-tooltip",{attrs:{title:e.configuration.desc}},[i("a-icon",{staticStyle:{"vertical-align":"-0.125em"},attrs:{type:"question-circle"}})],1):e._e()]},proxy:!0}:null],null,!0)},"a-form-item",e.configuration.title?e.labelCol:e.noLabelCol,!1),[e._t("type-select"),i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.identifier,{initialValue:e.configuration.default,rules:[{required:e.configuration.required,type:"number"}]}],expression:"[\n      identifier,\n      {\n        initialValue: configuration.default,\n        rules: [{\n          required: configuration.required,\n          type: 'number'\n        }]\n      }\n    ]"}],staticStyle:{width:"150px"},attrs:{step:e.configuration.step}})],2)}),[],!1,null,null,null);t.a=p.exports},a354:function(e,t,i){"use strict";var r=i("d4ec"),a=i("bee2"),n=i("99de"),l=i("7e84"),o=i("262e"),s=i("9ab4"),u=i("60a3"),c=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).labelCol={labelCol:{span:6},wrapperCol:{span:18}},e.noLabelCol={wrapperCol:{span:24}},e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"mounted",value:function(){this.form.getFieldDecorator(this.identifier,{initialValue:this.configuration.default,rules:[{required:this.configuration.required,type:"boolean"}]})}}]),t}(u.f);Object(s.a)([Object(u.d)(Object)],c.prototype,"configuration",void 0),Object(s.a)([Object(u.d)(String)],c.prototype,"identifier",void 0),Object(s.a)([Object(u.b)()],c.prototype,"form",void 0);var d=c=Object(s.a)([u.a],c),f=i("2877"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-item",e._b({scopedSlots:e._u([e.configuration.title?{key:"label",fn:function(){return[e._v(" "+e._s(e.configuration.title)+" "),e.configuration.desc?i("a-tooltip",{attrs:{title:e.configuration.desc}},[i("a-icon",{staticStyle:{"vertical-align":"-0.125em"},attrs:{type:"question-circle"}})],1):e._e()]},proxy:!0}:null],null,!0)},"a-form-item",e.configuration.title?e.labelCol:e.noLabelCol,!1),[e._t("type-select"),i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.identifier,{initialValue:e.configuration.default,rules:[{required:e.configuration.required,type:"boolean"}]}],expression:"[\n      identifier,\n      {\n        initialValue: configuration.default,\n        rules: [{\n          required: configuration.required,\n          type: 'boolean'\n        }]\n      }\n    ]"}],attrs:{name:e.identifier,options:[{label:"True",value:!0},{label:"False",value:!1}]}})],2)}),[],!1,null,null,null);t.a=p.exports},ae05:function(e){e.exports=JSON.parse('{"head":{"title":{"title":"导航栏标题","desc":"一般不超过八个字，六字以下为佳","type":"string","required":true},"desc":{"title":"标题描述文字","desc":"该描述文字仅在特定主题下展示，所以仅供补充界面主题，不可放置重要信息","type":"textarea","required":false},"action":{"title":"按钮函数名","desc":"填入左上角按钮点击时所触发的函数名称，不填时默认执行返回，设置为true来隐藏默认的返回按钮","type":["string","boolean"],"required":false},"leftText":{"title":"按钮文字","desc":"设置左上角文字，默认为上一级页面标题，一般不用填写","type":"string","required":false},"grey":{"title":"灰色背景","desc":"默认为白色背景","type":"boolean","required":false,"default":false},"hidden":{"title":"隐藏导航栏","desc":"设置后不显示导航栏","type":"boolean","required":false,"default":false},"shareable":{"title":"可被分享","desc":"设置该界面是否可以使用小程序的界面分享","type":"boolean","required":false,"default":false},"contact":{"title":"联系开发者","desc":"是否在分享弹出菜单中显示“联系开发者”按钮","type":"boolean","required":false,"default":false},"feedback":{"title":"意见反馈","desc":"是否在分享弹出菜单中显示“意见反馈”按钮","type":"boolean","required":false,"default":false},"test":{"title":"测试","desc":"是否在分享弹出菜单中显示“意见反馈”按钮","type":"object","required":false,"objectDetail":{"text":{"title":"列表文字","desc":"列表主要的描述文字","type":"string","required":true},"icon":{"title":"图标路径","desc":"填入列表图标地址，请注意在同一个列表中，要么统一添加要么都不添加","type":"url","required":false},"display":{"title":"显示该列表项","desc":"一般供内部逻辑使用","type":"boolean","required":false,"default":true},"desc":{"title":"补充描述","desc":"设置列表右侧的补充描述文字","type":"string","required":false},"aim":{"title":"链接文件名","desc":"指向的json文件名","type":"string","required":false},"url":{"title":"页面路径","desc":"小程序专用设置：指向的小程序页面路径","type":"string","required":false}}},"test2":{"title":"测试2","desc":"是否在分享弹出菜单中显示“意见反馈”按钮","type":"array","required":false,"element":"object","objectDetail":{"text":{"title":"列表文字","desc":"列表主要的描述文字","type":"string","required":true},"icon":{"title":"图标路径","desc":"填入列表图标地址，请注意在同一个列表中，要么统一添加要么都不添加","type":"url","required":false},"display":{"title":"显示该列表项","desc":"一般供内部逻辑使用","type":"boolean","required":false,"default":true}}}},"title":{"text":{"title":"文字","type":"textarea","required":true},"style":{"title":"样式","desc":"填入样式后，会对标题的默认样式进行覆盖","type":"string","required":false}},"p":{"text":{"title":"文字","type":"textarea","required":true},"head":{"title":"标题","desc":"填入true会在留空占位","type":["string","boolean"],"required":false},"align":{"title":"段落对齐方式","type":"string","enum":[{"label":"左对齐","value":"left"},{"label":"居中","value":"center"},{"label":"右对齐","value":"right"},{"label":"两端对齐","value":"justify"}],"required":false,"default":"left"},"src":{"title":"图片地址","desc":"设置后会在段落文字底部展示所选图片","type":"url","required":false},"desc":{"title":"图片描述","desc":"填入后会自动最前加入一个三角号，不填则没有描述文字","type":"string","required":false},"res":{"title":"高清图片地址","desc":"需要高清图片时设置，会在预览图片是使用","type":"url","required":false},"imgmode":{"title":"图片显示模式","desc":"小程序专用设置，默认为widthFix","type":"string","enum":[{"label":"widthFix","value":"widthFix"},{"label":"scaleToFill","value":"scaleToFill"},{"label":"aspectFit","value":"aspectFit"},{"label":"aspectFill","value":"aspectFill"},{"label":"top","value":"top"},{"label":"bottom","value":"bottom"},{"label":"left","value":"left"},{"label":"right","value":"right"},{"label":"center","value":"center"},{"label":"top left","value":"top left"},{"label":"top right","value":"top right"},{"label":"bottom left","value":"bottom left"},{"label":"bottom right","value":"bottom right"}],"required":false,"default":"widthFix"},"style":{"title":"段落文字样式","desc":"填入css样式，会对段落的默认样式进行覆盖","type":"string","required":false}},"list":{"head":{"title":"头部标题","desc":"不填会在标题所在处留空占位，设置为false来取消留空占位","type":["string","boolean"],"required":false},"content":{"title":"列表内容","desc":"依次填入每个列表项","type":"array","element":"object","objectDetail":{"text":{"title":"列表文字","desc":"列表主要的描述文字","type":"string","required":true},"icon":{"title":"图标路径","desc":"填入列表图标地址，请注意在同一个列表中，要么统一添加要么都不添加","type":"url","required":false},"display":{"title":"隐藏该列表项","desc":"一般供内部逻辑使用","type":"boolean","required":false,"default":true},"desc":{"title":"补充描述","desc":"设置列表右侧的补充描述文字","type":"string","required":false},"aim":{"title":"链接文件名","desc":"指向的json文件名","type":"string","required":false},"url":{"title":"页面路径","desc":"小程序专用设置：指向的小程序页面路径","type":"string","required":false},"swiKey":{"title":"开关Key值","desc":"小程序专用设置：开关所改变的变量在本地存储中的名称","type":"string","required":false},"Switch":{"title":"开关函数名","desc":"小程序专用设置：点击开关后触发的函数，不填仅改变storage中swiKey的值","type":"string","required":false},"color":{"title":"开关颜色","desc":"填入css颜色代码","type":"string","required":false},"pickerValue":{"title":"选择器值","desc":"小程序专用设置：选择器中包含的值使用变量表示时不支持简单界面","type":"array","element":["array","string","number"],"required":false},"key":{"title":"选择器Key","desc":"小程序专用设置：选择器所改变的变量在本地存储中的名称","type":"string","required":false},"single":{"title":"单列选择器","desc":"小程序专用设置：默认为多列选择器","type":"boolean","required":false,"default":false},"inlay":{"title":"嵌入式选择器","desc":"小程序专用设置：默认为弹出式选择器","type":"boolean","required":false,"default":false},"picker":{"title":"选择器函数名","desc":"小程序专用设置：不填仅改变界面显示值与storage中key的值","type":"string","required":false},"button":{"title":"按钮函数名","desc":"小程序专用设置：填入按钮点击后触发的函数名","type":"string","required":false},"disabled":{"title":"禁用按钮","desc":"小程序专用设置：按钮禁用后不可点击，一般仅供开发界面时使用","type":"boolean","required":false,"default":true},"slider":{"title":"滑块函数名","desc":"小程序专用设置：填入滑块滑动时出发的函数名称","type":"string","required":false},"sliKey":{"title":"滑块Key值","desc":"滑块所改变的变量在本地存储中的名称","type":"string","required":false},"min":{"title":"滑块最小值","desc":"小程序专用设置","type":"number","required":false,"default":0},"max":{"title":"滑块最大值","desc":"小程序专用设置","type":"number","required":false,"default":100},"step":{"title":"滑块步长","desc":"小程序专用设置","type":"number","required":false,"default":1}},"required":true},"foot":{"title":"尾部标题","desc":"不填即不会显示，可以敲入一个空格来展现空白页脚","type":"string","required":false}},"img":{"src":{"title":"图片地址","desc":"设置后会在段落文字底部展示所选图片","type":"url","required":true},"desc":{"title":"图片描述","desc":"填入后会自动最前加入一个三角号，不填则没有描述文字","type":"string","required":false},"res":{"title":"高清图片地址","desc":"需要高清图片时设置，会在预览图片时使用","type":"url","required":false},"lazy":{"title":"图片懒加载","desc":"小程序专用设置：默认执行lazyload，设置false取消","type":"boolean","required":false,"default":true},"imgmode":{"title":"图片显示模式","desc":"默认为widthFix","type":"string","enum":[{"label":"widthFix","value":"widthFix"},{"label":"scaleToFill","value":"scaleToFill"},{"label":"aspectFit","value":"aspectFit"},{"label":"aspectFill","value":"aspectFill"},{"label":"top","value":"top"},{"label":"bottom","value":"bottom"},{"label":"left","value":"left"},{"label":"right","value":"right"},{"label":"center","value":"center"},{"label":"top left","value":"top left"},{"label":"top right","value":"top right"},{"label":"bottom left","value":"bottom left"},{"label":"bottom right","value":"bottom right"}],"required":false,"default":"widthFix"}},"doc":{"docName":{"title":"文档名称","desc":"文档名称，需要使用“文件名.后缀”的格式，文件名不得包含“.”，后缀只支持doc、docx、ppt、pptx、xls、xlsx、pdf、jpg、jpeg、png、gif","type":"string","required":true},"url":{"title":"文档在线路径","type":"url","required":true}},"phone":{"num":{"title":"电话号码","type":"string","required":true},"fName":{"title":"名字","desc":"小程序专用设置","type":"string","required":true},"lName":{"title":"名字","desc":"小程序专用设置","type":"string","required":false},"org":{"title":"所在公司","desc":"小程序专用设置","type":"string","required":false},"remark":{"title":"备注","desc":"小程序专用设置","type":"string","required":false},"workNum":{"title":"工作电话","desc":"小程序专用设置","type":"string","required":false},"nickName":{"title":"昵称","desc":"小程序专用设置","type":"string","required":false},"head":{"title":"头像图片路径","desc":"小程序专用设置，仅限本地路径","type":"string","required":false},"wechat":{"title":"微信号","desc":"小程序专用设置","type":"string","required":false},"province":{"title":"省份","desc":"小程序专用设置","type":"string","required":false},"city":{"title":"城市","desc":"小程序专用设置","type":"string","required":false},"street":{"title":"街道","desc":"小程序专用设置","type":"string","required":false},"postCode":{"title":"邮政编码","desc":"小程序专用设置","type":"string","required":false},"title":{"title":"职位","desc":"小程序专用设置","type":"string","required":false},"hostNum":{"title":"公司电话","desc":"小程序专用设置","type":"string","required":false},"website":{"title":"网站","desc":"小程序专用设置","type":"url","required":false},"email":{"title":"电子邮件","desc":"小程序专用设置","type":"string","required":false},"homeNum":{"title":"住宅电话","desc":"小程序专用设置","type":"string","required":false}},"grid":{"head":{"title":"标题","desc":"设置后会在段落文字底部展示所选图片","type":"string","required":false},"content":{"title":"标题","desc":"设置后会在段落文字底部展示所选图片","type":"array","element":"object","objectDetail":{"text":{"title":"网格文字","desc":"九宫格文字","type":"string","required":true},"icon":{"title":"图标路径","desc":"填入列表图标地址，请注意在同一个列表中，要么统一添加要么都不添加","type":"url","required":true},"aim":{"title":"链接文件名","desc":"指向的json文件名","type":"string","required":false},"url":{"title":"页面路径","desc":"小程序专用设置：指向的小程序页面路径","type":"string","required":false}},"required":true},"foot":{"title":"尾部文字","desc":"填入后会自动最前加入一个三角号，不填则没有描述文字","type":"string","required":false}},"swiper":{"url":{"title":"标题","desc":"设置后会在段落文字底部展示所选图片","type":"array","element":"string","required":true},"Class":{"title":"轮播图容器class","desc":"默认样式为“width: 100%; height: 400rpx”","type":"string","required":false},"style":{"title":"轮播图容器样式","desc":"填入css样式","type":"string","required":false},"indicatorDots":{"title":"面板指示点","desc":"默认显示，设置false取消","type":"boolean","required":false,"default":true},"dotColor":{"title":"指示点颜色","desc":"默认为#ffffff88","type":"string","required":false},"dotActiveColor":{"title":"选中点颜色","desc":"默认为#fff","type":"string","required":false},"autoplay":{"title":"自动切换","desc":"默认开启，设置为false取消","type":"boolean","required":false,"default":true},"interval":{"title":"自动切换间隔","desc":"单位为毫秒，默认为5000","type":"number","required":false,"default":5000,"step":100},"duration":{"title":"滑动动画时长","desc":"单位为毫秒，默认为500","type":"number","required":false,"default":500,"step":100},"circular":{"title":"衔接滑动","desc":"默认开启，设置为false取消","type":"boolean","required":false,"default":true},"vertical":{"title":"纵向滑动","desc":"默认为横向滑动","type":"boolean","required":false,"default":false},"preMargin":{"title":"前一项露出边距","desc":"默认为0px，接受 px 和 rpx 值","type":"string","required":false,"default":"0px"},"nextMargin":{"title":"后一项露出边距","desc":"默认为0px，接受 px 和 rpx 值","type":"string","required":false,"default":"0px"},"change":{"title":"改变时函数名","desc":"填入轮播图刚开始改变时触发的函数名称，默认不触发函数","type":"string","required":false},"animation":{"title":"结束时函数名","desc":"填入轮播图动画结束时触发的函数名称，默认不触发函数","type":"string","required":false},"imgClass":{"title":"图片class名","desc":"默认样式为“ width: 100%!important; height: 100%!important; ”","type":"string","required":false},"imgMode":{"title":"图片显示模式","desc":"小程序默认为widthFix","type":"string","enum":[{"label":"widthFix","value":"widthFix"},{"label":"scaleToFill","value":"scaleToFill"},{"label":"aspectFit","value":"aspectFit"},{"label":"aspectFill","value":"aspectFill"},{"label":"top","value":"top"},{"label":"bottom","value":"bottom"},{"label":"left","value":"left"},{"label":"right","value":"right"},{"label":"center","value":"center"},{"label":"top left","value":"top left"},{"label":"top right","value":"top right"},{"label":"bottom left","value":"bottom left"},{"label":"bottom right","value":"bottom right"}],"required":false,"default":"aspectFill"}},"audio":{"res":{"title":"音频地址","desc":"填入音频文件的在线网址或本地路径","type":"url","required":true},"loop":{"title":"循环播放","desc":"默认关闭","type":"boolean","required":false,"default":false},"controls":{"title":"显示默认控件","desc":"默认显示，设置false取消","type":"boolean","required":false,"default":true},"name":{"title":"歌曲名称","desc":"controls为false时无效","type":"string","required":false},"author":{"title":"歌手名字","desc":"controls为false时无效","type":"string","required":false}},"video":{"res":{"title":"视频地址","desc":"填入要播放视频的资源地址","type":"url","required":true},"loop":{"title":"循环播放","desc":"默认关闭","type":"boolean","required":false,"default":false},"controls":{"title":"显示默认控件","desc":"默认显示，设置false取消","type":"boolean","required":false,"default":true},"autoplay":{"title":"自动播放","desc":"默认不自动播放","type":"boolean","required":false,"default":false},"startTime":{"title":"初始播放位置","type":"number","required":false,"default":0}},"gzh":{"url":{"title":"图文链接","type":"url","required":true},"src":{"title":"封面图片地址","type":"url","required":true},"title":{"title":"图文标题","type":"string","required":true},"desc":{"title":"图文描述","type":"string","required":true},"icon":{"title":"公众号头像地址","desc":"默认使用“东师青年”图标","type":"url","required":false},"gzhName":{"title":"公众号名称","desc":"默认使用“东师青年”","type":"string","required":false}},"intro":{"name":{"title":"主体名称","type":"string","required":true},"src":{"title":"头像图标地址","type":"url","required":true},"desc":{"title":"主体描述","type":"string","required":true}},"foot":{"author":{"title":"编辑人","type":"string","required":false},"time":{"title":"编辑时间","type":"string","required":false},"desc":{"title":"额外描述","type":"string","required":false}}}')},b011:function(e,t,i){},bb14:function(e,t,i){"use strict";var r=i("d4ec"),a=i("bee2"),n=i("99de"),l=i("7e84"),o=i("262e"),s=i("9ab4"),u=i("60a3"),c=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(n.a)(this,Object(l.a)(t).apply(this,arguments))).labelCol={labelCol:{span:6},wrapperCol:{span:18}},e.noLabelCol={wrapperCol:{span:24}},e}return Object(o.a)(t,e),Object(a.a)(t,[{key:"mounted",value:function(){this.form.getFieldDecorator(this.identifier,{initialValue:this.configuration.default,rules:[{required:this.configuration.required,type:"string"}]})}}]),t}(u.f);Object(s.a)([Object(u.d)(Object)],c.prototype,"configuration",void 0),Object(s.a)([Object(u.d)(String)],c.prototype,"identifier",void 0),Object(s.a)([Object(u.b)()],c.prototype,"form",void 0);var d=c=Object(s.a)([u.a],c),f=i("2877"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-form-item",e._b({scopedSlots:e._u([e.configuration.title?{key:"label",fn:function(){return[e._v(" "+e._s(e.configuration.title)+" "),e.configuration.desc?i("a-tooltip",{attrs:{title:e.configuration.desc}},[i("a-icon",{staticStyle:{"vertical-align":"-0.125em"},attrs:{type:"question-circle"}})],1):e._e()]},proxy:!0}:null],null,!0)},"a-form-item",e.configuration.title?e.labelCol:e.noLabelCol,!1),[e._t("type-select"),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.identifier,{initialValue:e.configuration.default,rules:[{required:e.configuration.required,type:"string"}]}],expression:"[\n      identifier,\n      {\n        initialValue: configuration.default,\n        rules: [{\n          required: configuration.required,\n          type: 'string'\n        }]\n      }\n    ]"}]})],2)}),[],!1,null,null,null);t.a=p.exports},c71c:function(e,t,i){"use strict";var r=i("4ea5");i.n(r).a},f1b6:function(e,t,i){"use strict";i.r(t);i("4160"),i("a9e3"),i("b64b"),i("ac1f"),i("1276"),i("159b"),i("277d");i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("0d03"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var i=[],r=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(i.push(l.value),!t||i.length!==t);r=!0);}catch(e){a=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}return i}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=i("d4ec"),n=i("bee2"),l=i("99de"),o=i("7e84"),s=i("262e"),u=i("9ab4"),c=i("60a3"),d=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).apply(this,arguments))).selectedText="请选择",e.visible=!1,e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"itemChange",value:function(e,t){this.selectedText=this.list[e].content[t].text,this.$emit("change",this.list[e].content[t].id),this.$emit("onChange",this.list[e].content[t].text),this.visible=!1}},{key:"mounted",value:function(){var e=this;"请选择"!==this.selected&&this.list.forEach((function(t){t.content.forEach((function(t){e.selected===t.id&&(e.selectedText=t.text)}))}))}}]),t}(c.f);Object(u.a)([Object(c.d)(Array)],d.prototype,"list",void 0),Object(u.a)([Object(c.c)("change",{type:String})],d.prototype,"selected",void 0);var f=d=Object(u.a)([c.a],d),p=(i("43d8"),i("2877")),b=Object(p.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-divider",{attrs:{orientation:"left"}},[i("a-dropdown",{on:{click:function(t){e.visible=!0}},scopedSlots:e._u([{key:"overlay",fn:function(){return[i("a-menu",{staticClass:"popMenu"},[e._l(e.list,(function(t,r){return[i("a-menu-item",{key:t.title,attrs:{disabled:""},domProps:{textContent:e._s(t.title)}}),i("a-row",{key:t.title+"-content",staticClass:"menuCtn"},e._l(t.content,(function(t,a){return i("a-col",{key:t.text,attrs:{span:"6"}},[i("a-menu-item",{staticClass:"menuItem",on:{click:function(t){return e.itemChange(r,a)}}},[t.icon&&"icon-"===t.icon.slice(0,5)?i("icon-font",{staticClass:"popMenuIcon",attrs:{type:t.icon}}):i("a-icon",{staticClass:"popMenuIcon",attrs:{type:t.icon||t.id}}),i("div",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)]})),i("a-menu-item",{attrs:{disabled:""}})],2)]},proxy:!0}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("a",{staticClass:"ant-dropdown-link"},[e._v(" "+e._s(e.selectedText)+" "),i("a-icon",{attrs:{type:"down"}})],1)])],1)}),[],!1,null,"13a50a37",null).exports,y=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).apply(this,arguments))).selectedText="请选择",e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"itemChange",value:function(e){this.selectedText=this.menu[e][0],this.$emit("change",this.menu[e][1]),this.$emit("onChange",this.menu[e][0])}},{key:"mounted",value:function(){var e=this;"请选择"!==this.selected&&this.menu.forEach((function(t){e.selected===t[1]&&(e.selectedText=t[0])}))}}]),t}(c.f);Object(u.a)([Object(c.d)(Array)],y.prototype,"menu",void 0),Object(u.a)([Object(c.c)("change",{type:String})],y.prototype,"selected",void 0);var g=y=Object(u.a)([c.a],y),m=Object(p.a)(g,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-divider",{attrs:{orientation:"left"}},[i("a-dropdown",{scopedSlots:e._u([{key:"overlay",fn:function(){return[i("a-menu",[e._l(e.menu,(function(t,r){return["TITLE"===t[1]?[0!==r?i("a-menu-divider",{key:"divider"+r}):e._e(),i("a-menu-item",{key:"title"+r,attrs:{disabled:""},domProps:{textContent:e._s(t[0])}})]:i("a-menu-item",{key:"item"+r,domProps:{textContent:e._s(t[0])},on:{click:function(t){return e.itemChange(r)}}})]}))],2)]},proxy:!0}])},[i("a",{staticClass:"ant-dropdown-link"},[e._v(" "+e._s(e.selectedText)+" "),i("a-icon",{attrs:{type:"down"}})],1)])],1)}),[],!1,null,null,null).exports,v=i("4af8"),h=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).apply(this,arguments))).pageJson="",e.tags=["head"],e.unionTypeSelect=[{}],e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"beforeCreate",value:function(){this.form=this.$form.createForm(this)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,i){if(console.log("Received values of form: ",i),!e){var a=[],n=t.form.getFieldsValue();t.tags.forEach((function(e){a.push({tag:e})})),Object.keys(n).forEach((function(e){var i=r(e.split("-"),3),l=i[0],o=i[1],s=i[2],u=Number(l),c=n[e];s||void 0===c||c===t.configuration[a[u].tag][o].default||(a[u][o]=c)})),console.log(a,JSON.stringify(a)),t.pageJson=JSON.stringify(a)}}))}},{key:"addComponent",value:function(){this.tags.push("请选择")}},{key:"configuration",get:function(){return i("ae05")}},{key:"tagList",get:function(){return i("4034")}}]),t}(c.f);Object(u.a)([Object(c.e)()],h.prototype,"form",void 0);var j=h=Object(u.a)([Object(c.a)({components:{DropdownGrid:b,DropdownTitle:m,FormInput:v.default}})],h),q=(i("c71c"),Object(p.a)(j,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[e._l(e.tags,(function(t,r){return[i("DropdownGrid",{key:r,attrs:{list:e.tagList},model:{value:e.tags[r],callback:function(t){e.$set(e.tags,r,t)},expression:"tags[partIndex]"}}),"请选择"!==t?[e._l(Object.keys(e.configuration[t]),(function(a){return[i("form-input",{key:r+"-"+a,attrs:{configuration:e.configuration[t][a],identifier:r+"-"+a}})]}))]:e._e()]})),i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[i("a-button",{staticClass:"addNewBtn",attrs:{type:"primary"},on:{click:e.addComponent}},[i("a-icon",{attrs:{type:"plus"}}),e._v("新增 ")],1)],1),i("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[i("a-button",{attrs:{"html-type":"submit",type:"primary"}},[e._v("检查JSON文件")])],1)],2)],1)}),[],!1,null,"8d938300",null));t.default=q.exports}}]);