// pages/map/map.js
Page({
  data: {
    marker: [{
      iconPath: "/images/marker.png",
      longitude: 114.090217,
      latitude: 22.549858,
      width: 15,
      height: 20
    }],
    scale: 17,
    longitude: 114.090217,
    latitude: 22.549858,
    button: "/images/region.png"
  },
  mapDirect: function () {
    wx.openLocation({
      latitude: 22.549858,
      longitude: 114.090217,
      scale: 15,
      name: "深圳实验学校初中部",
    })
  }
})