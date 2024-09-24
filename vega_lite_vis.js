// 引用外部的 Vega-Lite JSON 文件
var vg_1 = "visualization.vl.json";

// 使用 vegaEmbed 函数将 JSON 文件嵌入到指定的 div 中
vegaEmbed("#state_map", vg_1).then(function(result) {
  // 可选：访问 Vega 的视图实例进行进一步的交互
  console.log(result.view);
}).catch(console.error);