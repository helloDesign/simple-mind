<template>
  <div>
    <h1>修改鼠标滚轮的行为</h1>
<p>鼠标滚轮的行为支持放大缩小画布和上下移动画布，可以在实例化时通过配置指定：</p>
<pre class="hljs"><code><span class="hljs-keyword">new</span> MindMap({
    <span class="hljs-comment">// ...</span>
    <span class="hljs-attr">mousewheelAction</span>: <span class="hljs-string">&#x27;move&#x27;</span><span class="hljs-comment">// zoom（放大缩小）、move（上下移动）</span>
    <span class="hljs-comment">// 当mousewheelAction设为move时，可以通过该属性控制鼠标滚动一下视图移动的步长，单位px</span>
    <span class="hljs-attr">mousewheelMoveStep</span>: <span class="hljs-number">100</span>,
    <span class="hljs-comment">// 鼠标缩放是否以鼠标当前位置为中心点，否则以画布中心点</span>
    <span class="hljs-attr">mouseScaleCenterUseMousePosition</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-comment">// 当mousewheelAction设为zoom时，或者按住Ctrl键时，默认向前滚动是缩小，向后滚动是放大，如果该属性设为true，那么会反过来</span>
    <span class="hljs-attr">mousewheelZoomActionReverse</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-comment">// 禁止鼠标滚轮缩放，你仍旧可以使用api进行缩放</span>
    <span class="hljs-attr">disableMouseWheelZoom</span>: <span class="hljs-literal">false</span>,
})
</code></pre>
<p>如果需要动态的切换行为可以使用<code>updateConfig</code>方法：</p>
<pre class="hljs"><code>mindMap.updateConfig({
    <span class="hljs-attr">mousewheelAction</span>: <span class="hljs-string">&#x27;zoom&#x27;</span>
})
</code></pre>
<p>此外也支持让你自行处理鼠标滚轮事件：</p>
<pre class="hljs"><code><span class="hljs-keyword">new</span> MindMap({
    <span class="hljs-comment">// ...</span>
    <span class="hljs-attr">customHandleMousewheel</span>: <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
        <span class="hljs-comment">// 你的自定义逻辑</span>
    }
})
</code></pre>
<p>当传了<code>customHandleMousewheel</code>选项，<code>mousewheelAction</code>选项将不生效。</p>
<h2>完整示例</h2>
<iframe style="width: 100%; height: 455px; border: none;" src="https://wanglin2.github.io/playground/#eNrFVU+P20QU/ypPRshZlNipxCkkpeXPAYlFqNedFXLsSTJlPGM842SXyBKqkFpKK4FAQiqXLZcWCXFCiO628GU2yfIteOPxON6QAzciOZp57/fe7828P7P0bmdZMC+oN/CGKs5ZpkFRXWQ3iWBpJnMNS8jppAtSHMpCaJp0Qc0izuXiDp1ACZNcpuCjB7+xOGQiOYwyqyKeQjGnvRSlvTTKiEcEABGcajAygxyBKDi38jCE1avvVl89Xv/1xfq3i82TL68e3tvce7F68MPV0+dExFIoDVGs2Zx+JBOq0HobUefo+IAIh4qLPKdC30awFIjDk3T8z6VM/QpkqB7cXz/+6e+XZ+uz++uLJ1evfr16+ujyj3PnQcvplFM8uqKLGaW8cdU5gNFNWJqYr7EE84gXFAF7paMRWH54G/xUzqkPg1piPNX3ERRZEmn6rhQTNu1UHKjbiWGwjwFPpUs8W2mO16Ss0wq2deV04VLlOCgfQCLjIkW3wZTq9zk1y3dOP0g6fm2JUemICZr7B11rhbFGA+vd/IhnBMRriaxY0xNtxMRbn72wSbXFYH5l7cwA4xnjCR7NgI+2Pnbc7WXZZbo8f7Q5f7ZLdp1wD+nxVtfG/U8RuGUtc3ZMMH1HSm264GOpmK2KI5/Tifa74MeYOkzTcQUvD96y/QWAZb/58dvVN7/YoGyfXZ5/fXnxe7sIpej4Al1/YnsNPXbMtgvm/0Om9LaooN2PTQc4nKXHosRvGNopg/MFN5riaMBKxx3AMGFziHmk1Ih4dRDv0VQSr1LXAJZstU0pImQYorYNdJ60lHwcGYhVEj0cF1pjE9+KOYs/rSD7mhwtlsvdEXKtge3wwGmxeXaxevi86uWt7OXP6+//9KEsh6EldNE1kbrVMGxdBG6VPuX2Tm7VI5V4QWjnaN2xAVVpECtFvCatQevOXFoWLNGzAdzo91+vcABZUyg5RUZMWqWoasx8r+3erXO1NYzGSvJCW0MAU24D6Nc7LbPt5t/0M8qmM4S/2e9nJ455P+8bjjmN8ilDXuc1i5KEiakTNKEHdar/Y8Q3XAR10M0eHWKZVjnwup7NgHm5grtKCnwoK/ekVmAGmgFAPHwHbdcHIS6DHMcvS6lJVm+cy4WiOTohXt3Ae95GYzvTOlODMOQnnwl1qgKpVC8WvTFld/HYQcTZaSFiFcQyDbHGqVZ7asPQ1IcpvfIftRG5qQ==" />

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>