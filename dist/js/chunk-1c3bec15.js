(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c3bec15"],{"076b":function(s,t,a){s.exports=a.p+"img/alipay.jpg"},4968:function(s,t,a){s.exports=a.p+"img/wechat.jpg"},d025:function(s,t,a){s.exports=a.p+"img/手绘风格.png"},d2d5:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this;s._self._c;return s._m(0)},i=[function(){var s=this,t=s._self._c;return t("div",[t("h1",[s._v("HandDrawnLikeStyle 收费插件")]),t("blockquote",[t("p",[s._v("关于收费")]),t("p",[s._v(" mind-map 是一个 MIT 协议的开源项目，理论上只要保留 mind-map 的版权声明，无论是否商用都不收费，这个协议以后也不会改变。另外无论是在线版，还是客户端都不会考虑收费。但是为了项目的可持续发展，会通过一些方式来获取收益，比如现有的赞助方式。而收费插件是第二个方式，基本原则是基本功能、核心功能、必要功能不收费，而可有可无的附加功能可能会做成收费的。 ")]),t("p",[s._v(" 最后，收费仅针对开发者，如果仅是在线版或者客户端的思维导图用户是无需付费的，所有功能均可免费使用。 ")])]),t("p",[s._v(" HandDrawnLikeStyle 是第一个收费插件，功能是提供手绘风格的样式，也就是节点的连线、形状会变成手绘的样式，就像下面这样： ")]),t("img",{staticStyle:{width:"800px"},attrs:{src:a("d025")}}),t("p",[s._v(" 你也可以在在线版中通过【基础样式】-【是否开启手绘风格】设置来开启手绘风格样式进行尝试。 ")]),t("p",[s._v(" 内部实现是通过"),t("a",{attrs:{href:"https://github.com/rough-stuff/rough"}},[s._v("rough")]),s._v("库，所以如果你有精力，也可以自己基于这个库来实现这个插件。 ")]),t("h2",[s._v("收费")]),t("p",[s._v(" 现阶段收费方式比较原始，通过扫码转账备注你要购买的插件，以及你的邮箱地址，然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。 ")]),t("p",[s._v("价格：")]),t("p",[s._v(" 1.￥ 19.9，仅包含打包后的文件，即.cjs.min.js、.esm.min.js 两种格式的文件。 ")]),t("p",[s._v("2.￥ 29.9，包含未打包的源码和打包后的文件。")]),t("img",{staticStyle:{width:"300px"},attrs:{src:a("076b")}}),t("img",{staticStyle:{width:"300px"},attrs:{src:a("4968")}}),t("h2",[s._v("注册")]),t("p",[s._v("1.引用打包后的文件：")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" HandDrawnLikeStyle "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'handDrawnLikeStyle.cjs.min.js'")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 或 import HandDrawnLikeStyle from 'handDrawnLikeStyle.esm.min.js'")]),s._v("\n\nMindMap.usePlugin(HandDrawnLikeStyle)\n")])]),t("p",[s._v("2.引用未打包的源码")]),t("p",[s._v("可以先进入到插件目录执行：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm link\n")])]),t("p",[s._v("然后进入到你的项目根目录执行：")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm link simple-mind-plugin-handdrawnlikestyle\n")])]),t("p",[s._v("然后就可以直接导入进行使用：")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" HandDrawnLikeStyle "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'simple-mind-plugin-handdrawnlikestyle'")]),s._v("\n\nMindMap.usePlugin(HandDrawnLikeStyle)\n")])]),t("p",[s._v(" 注册完且实例化"),t("code",[s._v("MindMap")]),s._v("后可通过"),t("code",[s._v("mindMap.handDrawnLikeStyle")]),s._v("获取到该实例。 ")]),t("p",[s._v("注册该插件后，无需执行其他方法，手绘风格即可生效。")]),t("p",[s._v(" 如果你是使用 mindMap.addPlugin 方法来动态注册的组件，那么需要调用一次重新渲染的方法： ")]),t("pre",{staticClass:"hljs"},[t("code",[s._v("mindMap.addPlugin(HandDrawnLikeStyle)\nmindMap.reRender()\n")])]),t("h2",[s._v("方法")]),t("p",[s._v("以下方法你应该不太会用到。")]),t("h3",[s._v("createPath(svgPathStr)")]),t("ul",[t("li",[t("code",[s._v("svgPathStr")]),s._v("：SVG Path字符串")])]),t("p",[s._v("创建一个手绘风格的路径节点，返回SVG的Path节点。")]),t("h3",[s._v("createPolygon(points)")]),t("ul",[t("li",[t("code",[s._v("points")]),s._v("：点位数组。")])]),t("pre",{staticClass:"hljs"},[t("code",[s._v("points：[\n    [x1, y1],\n    ...\n]\n")])]),t("p",[s._v("创建一个手绘风格的多边形节点，返回SVG的Path节点。")]),t("h3",[s._v("transformPath(svgPathStr)")]),t("p",[s._v("将SVG Path字符串转换成手绘风格的SVG Path字符串。")])])}],p={},e=p,l=a("829d"),v=Object(l["a"])(e,n,i,!1,null,null,null);t["default"]=v.exports}}]);