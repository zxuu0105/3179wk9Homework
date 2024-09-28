// 定义地图的 Vega-Lite 规范
var vg_map = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 900,
    "height": 600,
    "projection": {"type": "mercator"},
    "data": {
      "url": "https://raw.githubusercontent.com/zxuu0105/3179wk9Homework/refs/heads/main/ne_10m.json",
      "format": {"type": "topojson", "feature": "ne_10m_admin_1_states_provinces"}
    },
    "transform": [
      {
        "lookup": "properties.name",
        "from": {
          "data": {
            "url": "https://raw.githubusercontent.com/zxuu0105/3179wk9Homework/refs/heads/main/datasource-au.csv",
            "format": {"type": "csv"}
          },
          "key": "State",
          "fields": ["2011", "2012", "2013", "2014", "2015"]
        },
        "as": ["immigration_2011", "immigration_2012", "immigration_2013", "immigration_2014", "immigration_2015"]
      },
      {
        "calculate": "datum['immigration_' + year]", 
        "as": "immigration_count"
      }
    ],
    "params": [
      {
        "name": "year",
        "value": "2015",
        "bind": {
          "input": "select",
          "options": ["2011", "2012", "2013", "2014", "2015"],
          "labels": ["2011", "2012", "2013", "2014", "2015"],
          "name": "Select Year: "
        }
      }
    ],
    "mark": "geoshape",
    "encoding": {
      "color": {
        "field": "immigration_count",
        "type": "quantitative",
        "scale": {"scheme": "blues"}
      },
      "tooltip": [
        {"field": "properties.name", "type": "nominal", "title": "State"},
        {
          "field": "immigration_count",
          "type": "quantitative",
          "title": "Immigration No"
        }
      ]
    }
  };
  
  // 定义柱状图的 Vega-Lite 规范
  var vg_bar = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 1000,
    "height": 400,
    "data": {
      "url": "https://raw.githubusercontent.com/zxuu0105/3179wk9Homework/refs/heads/main/datasource-au.csv",
      "format": {"type": "csv"}
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "State",
        "type": "nominal",
        "axis": {
          "labelAngle": 45,
          "labelFontSize": 12,
          "labelPadding": 10,
          "title": "State"
        }
      },
      "y": {
        "field": "2015",
        "type": "quantitative",
        "title": "Number of Immigrations in 2015"
      },
      "color": {
        "field": "State",
        "type": "nominal",
        "legend": null
      }
    },
    "config": {
      "axis": {
        "titleFontSize": 14,
        "labelFontSize": 12
      }
    }
  };




// 加载并嵌入地图可视化文件
vegaEmbed('#vis_map', 'wk10map.vg').then(function(result) {
    // 处理地图结果或其他逻辑
  }).catch(console.error);
  
  // 加载并嵌入柱状图可视化文件
  vegaEmbed('#vis_bar', 'wk10barchart.vg').then(function(result) {
    // 处理柱状图结果或其他逻辑
  }).catch(console.error);