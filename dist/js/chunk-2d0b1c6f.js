(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1c6f"],{"20fa":function(v,s,e){"use strict";e.r(s);var i=function(){var v=this;v._self._c;return v._m(0)},_=[function(){var v=this,s=v._self._c;return s("div",[s("h1",[v._v("AssociativeLine 插件")]),s("blockquote",[s("p",[v._v("v0.4.5+")])]),s("blockquote",[s("p",[v._v("调整关联线控制点的功能从v0.4.6+开始支持")])]),s("blockquote",[s("p",[v._v("关联性支持文本编辑从v0.5.11+开始支持")])]),s("p",[v._v("该插件用于支持添加关联线。")]),s("h2",[v._v("注册")]),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-keyword"},[v._v("import")]),v._v(" MindMap "),s("span",{staticClass:"hljs-keyword"},[v._v("from")]),v._v(" "),s("span",{staticClass:"hljs-string"},[v._v("'simple-mind'")]),v._v("\n"),s("span",{staticClass:"hljs-keyword"},[v._v("import")]),v._v(" AssociativeLine "),s("span",{staticClass:"hljs-keyword"},[v._v("from")]),v._v(" "),s("span",{staticClass:"hljs-string"},[v._v("'simple-mind/src/plugins/AssociativeLine.js'")]),v._v("\n"),s("span",{staticClass:"hljs-comment"},[v._v("// import AssociativeLine from 'simple-mind/src/AssociativeLine.js' v0.6.0以下版本使用该路径")]),v._v("\n\nMindMap.usePlugin(AssociativeLine)\n")])]),s("p",[v._v(" 注册完且实例化"),s("code",[v._v("MindMap")]),v._v("后可通过"),s("code",[v._v("mindMap.associativeLine")]),v._v("获取到该实例。 ")]),s("h2",[v._v("配置")]),s("p",[v._v("支持修改关联线的粗细和颜色，分为默认状态和激活状态。配置如下：")]),s("ul",[s("li",[s("p",[s("code",[v._v("associativeLineWidth")]),v._v("：关联线默认状态的粗细，默认值为"),s("code",[v._v("2")])])]),s("li",[s("p",[s("code",[v._v("associativeLineColor")]),v._v("：关联线默认状态的颜色，默认值为"),s("code",[v._v("rgb(51, 51, 51)")])])]),s("li",[s("p",[s("code",[v._v("associativeLineActiveWidth")]),v._v("：关联线激活状态的粗细，默认值为"),s("code",[v._v("8")])])]),s("li",[s("p",[s("code",[v._v("associativeLineActiveColor")]),v._v("：关联线激活状态的颜色，默认值为"),s("code",[v._v("rgba(2, 167, 240, 1)")])])])]),s("p",[v._v(" 配置以主题的方式提供，所以如果想要修改这四个属性，可以通过"),s("code",[v._v("mindMap.setThemeConfig(config)")]),v._v("方法进行修改。 ")]),s("h2",[v._v("属性")]),s("h3",[v._v("mindMap.associativeLine.lineList")]),s("p",[v._v("当前所有连接线数据，数组类型，数组的每一项也是一个数组：")]),s("pre",{staticClass:"hljs"},[s("code",[v._v("[\n    path, "),s("span",{staticClass:"hljs-comment"},[v._v("// 连接线节点")]),v._v("\n    clickPath, "),s("span",{staticClass:"hljs-comment"},[v._v("// 不可见的点击线节点")]),v._v("\n    node, "),s("span",{staticClass:"hljs-comment"},[v._v("// 起始节点")]),v._v("\n    toNode "),s("span",{staticClass:"hljs-comment"},[v._v("// 目标节点")]),v._v("\n]\n")])]),s("h3",[v._v("mindMap.associativeLine.activeLine")]),s("p",[v._v(" 当前激活的连接线，数组类型，同"),s("code",[v._v("lineList")]),v._v("数组的每一项的结构。 ")]),s("h2",[v._v("方法")]),s("h3",[v._v("renderAllLines()")]),s("p",[v._v("重新渲染所有关联线。")]),s("h3",[v._v("removeAllLines()")]),s("p",[v._v("移除所有关联线。")]),s("h3",[v._v("createLineFromActiveNode()")]),s("p",[v._v("从当前激活节点开始创建关联线，如果有多个激活节点，默认为第一个节点。")]),s("p",[v._v(" 调用该方法后，会从第一个激活节点到当前鼠标实时位置渲染一条关联线，当点击某个目标节点后则代表创建完成，会在第一个激活节点和点击节点之间渲染一条关联线。 ")]),s("h3",[v._v("createLine(fromNode)")]),s("p",[v._v("从指定节点开始创建关联线。")]),s("p",[v._v(" 调用该方法后，会从指定节点到当前鼠标实时位置渲染一条关联线，当点击某个目标节点后则代表创建完成，会在指定节点和点击节点之间渲染一条关联线。 ")]),s("h3",[v._v("addLine(fromNode, toNode)")]),s("p",[v._v("直接添加一条关联线。")]),s("p",[v._v(" 调用该方法，会直接创建一条从"),s("code",[v._v("fromNode")]),v._v("到"),s("code",[v._v("toNode")]),v._v("节点的关联线。 ")]),s("h3",[v._v("removeLine()")]),s("p",[v._v("删除当前激活的关联线。点击某条关联线则视为激活。")]),s("h3",[v._v("clearActiveLine()")]),s("p",[v._v("清除当前激活的关联线的激活状态。")]),s("h3",[v._v("front()")]),s("blockquote",[s("p",[v._v("v0.8.0+")])]),s("p",[v._v("关联线顶层显示。")]),s("h3",[v._v("back()")]),s("blockquote",[s("p",[v._v("v0.8.0+")])]),s("p",[v._v("关联线回到原有层级。")])])}],o={},n=o,t=e("829d"),a=Object(t["a"])(n,i,_,!1,null,null,null);s["default"]=a.exports}}]);