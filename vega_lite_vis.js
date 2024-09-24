
var vg_1 = "visualization.vl.json";


vegaEmbed("#state_map", vg_1).then(function(result) {

  console.log(result.view);
}).catch(console.error);
