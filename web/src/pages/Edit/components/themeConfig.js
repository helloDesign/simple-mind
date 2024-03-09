/**
 * 产业链相关皮肤配置
 */
const fontFamily = "Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
export default {
  backgroundColor: "#fff",
  lineColor: "rgba(199,204,215,0.5)",
  lineWidth: 3,
  lineStyle: 'curve',
  paddingX: 30,
  paddingY: 15,
  nodeAttr: ['uuid', 'label', 'level'],
  // nodeUseLineStyle: true,
  root: {
    shape: 'roundedRectangle',
    fillColor: "#2c57e7",
    fontFamily,
    color: "#fff",
    fontSize: 16,
    lineHeight: 2.5,
    borderWidth: 0,
  },
  second: {
    shape: 'roundedRectangle',
    fillColor: "#8694ae",
    fontFamily,
    color: "#fff",
    fontSize: 14,
    borderWidth: 0,
    // marginY: 50
  },
  node: {
    shape: 'roundedRectangle',
    fillColor: "none",
    fontFamily,
    color: "#647490",
    fontSize: 12,
    borderWidth: 2,
    borderColor: 'none'
  }
}