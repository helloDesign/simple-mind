# Select 插件 

`Select`插件提供鼠标多选节点的功能。

## 注册

```js
import MindMap from 'simple-mind'
import Select from 'simple-mind/src/plugins/Select.js'
// import Select from 'simple-mind/src/Select.js' v0.6.0以下版本使用该路径

MindMap.usePlugin(Select)
```

注册完且实例化`MindMap`后可通过`mindMap.select`获取到该实例。

## 方法

### toPos(x, y)

转换鼠标位置为相对于容器`el`的位置