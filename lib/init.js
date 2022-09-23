
var GDNormal = L.tileLayer.chinaProvider("GaoDe.Normal.Map", {
  maxZoom: 18,
  minZoom: 4,
});
var GDImg = L.tileLayer.chinaProvider("GaoDe.Satellite.Map", {
  maxZoom: 18,
  minZoom: 4,
});
var GDSA = L.tileLayer.chinaProvider("GaoDe.Satellite.Annotion", {
  maxZoom: 18,
  minZoom: 4,
});
var TNormal = L.tileLayer.chinaProvider("TianDiTu.Normal.Map", {
    maxZoom: 18,
    minZoom: 4,
  });
var  TTerrain = L.tileLayer.chinaProvider("TianDiTu.Terrain.Map", {
    maxZoom: 18,
    minZoom: 4,
  })
var  OpenTopoMap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
    }
  ),
  TNormalA = L.tileLayer.chinaProvider("TianDiTu.Normal.Annotion", {
    maxZoom: 18,
    minZoom: 4,
  }),
  BDNormalA = L.tileLayer.chinaProvider("TianDiTu.Satellite.Annotion", {
    maxZoom: 18,
    minZoom: 4,
  }),
  TImg = L.tileLayer.chinaProvider("TianDiTu.Satellite.Map", {
    maxZoom: 18,
    minZoom: 4,
  });
BDNormal = L.tileLayer.chinaProvider("Baidu.Normal.Map", {
  maxZoom: 18,
  minZoom: 4,
});
var osmNormalMap = L.tileLayer.chinaProvider("OSM.Normal.Map", {
  maxZoom: 18,
  minZoom: 4,
});


var overlayLayers = {
  高德标注: GDSA,
  天地图标注: TNormalA,
  百度标注: BDNormalA,
  // ...overlayLayers1
};
var baseLayers = {
  高德地图: GDNormal,
  高德影像: GDImg,
  天地图: TNormal,
  天地图地形: TTerrain,
  天地图影像: TImg,
  // 百度地图:BDNormal,
  openstreet: osmNormalMap,
  OpenTopoMap: OpenTopoMap,
  // ...baseLayers1
};
const center = [
  getQueryVariable("y")||localStorage.getItem("lat") || 30,
  getQueryVariable("x")||localStorage.getItem("lng") || 110,
];
// const center = [30,110]
var map = L.map("map", {
  center,
  zoom: getQueryVariable("z") || localStorage.getItem("zoom")||7,
  layers:   [GDImg,GDSA],
  zoomControl: false,
  // crs: L.CRS.Baidu,
});
L.control.layers(baseLayers, overlayLayers).addTo(map);
// L.marker(center).addTo(map)
L.control
  .zoom({
    zoomInTitle: "放大",
    zoomOutTitle: "缩小",
  })
  .addTo(map);
