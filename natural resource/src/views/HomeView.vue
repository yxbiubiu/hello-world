<template>
  <div id="mapView">
  </div>
</template>

<script setup>
import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map.js"
import SceneView from "@arcgis/core/views/SceneView"
import TileLayer from "@arcgis/core/layers/TileLayer.js"
import { onMounted } from 'vue'
import "@arcgis/core/assets/esri/themes/light/main.css"
function initMap() {
  //esriConfig.apiKey = "AAPK35c9e3fd058b4c3fa82aa787abfa2da2kloT1gpwhNJ0kAbYSGDe-Za766YQ4oymQ-dpMSYr33lXXNs9njT34LPCAqS48Qwa"
  const layer = new TileLayer({
    /* 经典彩色版："http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer",
       国际英文版："http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer",
       低调灰色版："http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer",
       典雅蓝黑版："http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
       */
    url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
  })
  const map = new Map({
    layers: [layer]
  })
  const view = new SceneView({
    map: map,
    center: [104.060, 30.670], // Longitude, latitude
    zoom: 8, // Zoom level
    container: "mapView" // Div element
  })
  console.log(view)
}
onMounted(() => {
  initMap()
})
</script>

<style scoped>
#mapView {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/imgs/bg1.png');
  background-size: 100% 100%;
  padding: .5rem;
}
</style>
