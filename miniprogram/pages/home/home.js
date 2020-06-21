Page({
  data: {
    logo: "/images/logo.png",
    titleName: "凤鸣班",
    funLogo: [{
      a: "comments",
      b: "pictures"
    }, {
      a: "map",
      b: "calendar"
    }]
  },
  comments: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  map: function () {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },
  pictures: function () {
    wx.navigateTo({
      url: '/pages/pictures/pictures'
    })
  },
  calendar: function () {
    wx.navigateTo({
      url: '/pages/calendar/calendar'
    })
  }
})