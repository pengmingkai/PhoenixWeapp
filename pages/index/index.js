Page({
  data: {
    logo: "/images/logo.png",
    titleName: "凤鸣班",
    funLogo: [{
      a: "articles",
      b: "pictures"
    }, {
      a: "map",
      b: "calendar"
    }]
  },
  articles: function () {
    wx.navigateTo({
      url: '/pages/articles/index'
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