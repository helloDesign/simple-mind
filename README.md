<h1 align="center">Simple mind map</h1>

[![npm-version](https://img.shields.io/npm/v/simple-mind)](https://www.npmjs.com/package/simple-mind)
![npm download](https://img.shields.io/npm/dm/simple-mind)
[![GitHub issues](https://img.shields.io/github/issues/helloDesign/simple-mind)](https://github.com/helloDesign/simple-mind/issues)
![license](https://img.shields.io/npm/l/express.svg)
[![GitHub stars](https://img.shields.io/github/stars/helloDesign/simple-mind)](https://github.com/helloDesign/simple-mind/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/helloDesign/simple-mind)](https://github.com/helloDesign/simple-mind/network/members)

> 中文名：思绪思维导图。一个简单&强大的 Web 思维导图。

本项目包含两部分：

1.一个 js 思维导图库，不依赖任何框架，你可以使用它来快速完成 Web 思维导图产品的开发。

开发文档：[https://hellodesign.github.io/mind-map/#/doc/zh/](https://wanglin2.github.io/mind-map/#/doc/zh/)。

2.一个 Web 思维导图，基于思维导图库、Vue2.x、ElementUI 开发，可以操作电脑本地文件，所以你可以直接把它当做一个在线版思维导图应用使用，如果觉得 github 的响应速度慢，你也可以部署到你的服务器上。

在线地址：[https://hellodesign.github.io/mind-map/](https://hellodesign.github.io/mind-map/)。

另外也提供了客户端可供下载使用，支持`Windows`、`Mac`及`Linux`，下载地址：

Github：[releases](https://github.com/helloDesign/simple-mind/releases)。


> 客户端版本会落后于在线版本，尝试最新功能请优先使用在线版。

# 特性

- [x] 插件化架构，除核心功能外，其他功能作为插件提供，按需使用，减小打包体积
- [x] 支持逻辑结构图、思维导图、组织结构图、目录组织图、时间轴（横向、竖向）、鱼骨图等结构
- [x] 内置多种主题，允许高度自定义样式，支持注册新主题
- [x] 节点内容支持文本（普通文本、富文本）、图片、图标、超链接、备注、标签、概要、数学公式
- [x] 节点支持拖拽（拖拽移动、自由调整）、多种节点形状，支持使用 DDM 完全自定义节点内容
- [x] 支持画布拖动、缩放
- [x] 支持鼠标按键拖动选择和 Ctrl+左键两种多选节点方式
- [x] 支持导出为`json`、`png`、`svg`、`pdf`、`markdown`、`xmind`，支持从`json`、`xmind`、`markdown`导入
- [x] 支持快捷键、前进后退、关联线、搜索替换、小地图、水印、滚动条
- [x] 提供丰富的配置，满足各种场景各种使用习惯
- [x] 支持协同编辑

# 安装

```bash
npm i simple-mind
```

# 使用

提供一个宽高不为 0 的容器元素：

```html
<div id="mindMapContainer"></div>
```

另外再设置一下`css`样式：

```css
#mindMapContainer * {
  margin: 0;
  padding: 0;
}
```

然后创建一个实例：

```js
import MindMap from "simple-mind";

const mindMap = new MindMap({
  el: document.getElementById("mindMapContainer"),
  data: {
    data: {
      text: "根节点",
    },
    children: [],
  },
});
```

即可得到一个思维导图。

想要实现更多功能？可以查看[开发文档](https://hellodesign.github.io/mind-map/#/doc/zh/)。

# License

[MIT](./LICENSE)

保留`mind-map`版权声明的情况下可随意商用。

<p>
    <span>
        <img src="./web/src/assets/avatar/Think.jpg" style="width: 50px;height: 50px;" />
        <span>Think</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/志斌.jpg" style="width: 50px;height: 50px;" />
        <span>志斌</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/小土渣的宇宙.jpeg" style="width: 50px;height: 50px;" />
        <span>小土渣的宇宙</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/qp.jpg" style="width: 50px;height: 50px;" />
        <span>qp</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/ZXR.jpg" style="width: 50px;height: 50px;" />
        <span>ZXR</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/花儿朵朵.jpg" style="width: 50px;height: 50px;" />
        <span>花儿朵朵</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/suka.jpg" style="width: 50px;height: 50px;" />
        <span>suka</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/Chris.jpg" style="width: 50px;height: 50px;" />
        <span>Chris</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/水车.jpg" style="width: 50px;height: 50px;" />
        <span>水车</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/仓鼠.jpg" style="width: 50px;height: 50px;" />
        <span>仓鼠</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/千帆.jpg" style="width: 50px;height: 50px;" />
        <span>千帆</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/才镇.jpg" style="width: 50px;height: 50px;" />
        <span>才镇</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/小米.jpg" style="width: 50px;height: 50px;" />
        <span>小米bbᯤ²ᴳ</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/棐.jpg" style="width: 50px;height: 50px;" />
        <span>*棐</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/default.png" style="width: 50px;height: 50px;" />
        <span>Luke</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/布林.jpg" style="width: 50px;height: 50px;" />
        <span>布林</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/南风.jpg" style="width: 50px;height: 50px;" />
        <span>南风</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/蜉蝣撼大叔.jpg" style="width: 50px;height: 50px;" />
        <span>蜉蝣撼大叔</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/乙.jpg" style="width: 50px;height: 50px;" />
        <span>乙</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/敏.jpg" style="width: 50px;height: 50px;" />
        <span>敏</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/沐风牧草.jpg" style="width: 50px;height: 50px;" />
        <span>沐风牧草</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/有希.jpg" style="width: 50px;height: 50px;" />
        <span>有希</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/樊笼.jpg" style="width: 50px;height: 50px;" />
        <span>樊笼</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/达仁科技.jpg" style="width: 50px;height: 50px;" />
        <span>达仁科技</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/小逗比.png" style="width: 50px;height: 50px;" />
        <span>小逗比</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/天清如愿.jpg" style="width: 50px;height: 50px;" />
        <span>天清如愿</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/敬明朗.jpg" style="width: 50px;height: 50px;" />
        <span>敬明朗</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/default.png" style="width: 50px;height: 50px;" />
        <span>飞箭</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/戚永峰.png" style="width: 50px;height: 50px;" />
        <span>戚永峰</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/moom.jpg" style="width: 50px;height: 50px;" />
        <span>moom</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/张扬.png" style="width: 50px;height: 50px;" />
        <span>张扬</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/长沙利奥软件.jpg" style="width: 50px;height: 50px;" />
        <span>长沙利奥软件</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/HaHN.jpg" style="width: 50px;height: 50px;" />
        <span>HaHN</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/继龙.jpg" style="width: 50px;height: 50px;" />
        <span>继龙</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/欣.jpg" style="width: 50px;height: 50px;" />
        <span>欣</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/default.png" style="width: 50px;height: 50px;" />
        <span>易空小易</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/国发.jpg" style="width: 50px;height: 50px;" />
        <span>国发</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/default.png" style="width: 50px;height: 50px;" />
        <span>建明</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/汪津合.jpg" style="width: 50px;height: 50px;" />
        <span>汪津合</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/default.png" style="width: 50px;height: 50px;" />
        <span>博文</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/慕智打印-兰兰.jpg" style="width: 50px;height: 50px;" />
        <span>慕智打印-兰兰</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/default.png" style="width: 50px;height: 50px;" />
        <span>锦冰</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/旭东.png" style="width: 50px;height: 50px;" />
        <span>旭东</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/俊奇.jpg" style="width: 50px;height: 50px;" />
        <span>俊奇</span>
    </span>
    <span>
        <img src="./web/src/assets/avatar/橘半.jpg" style="width: 50px;height: 50px;" />
        <span>橘半</span>
    </span>
</p>
