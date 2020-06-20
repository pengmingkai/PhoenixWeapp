Page({
  data: {
  },
  onLoad: function (option) {
    console.log(option.id)
    this.setData({
      id: option.id,
      "pictures.id": option.id
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592680251109&di=d9730632bed802d95ac3ebcd4065da7b&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9f510fb30f2442a7a12ca319d443ad4bd113026f.jpg"]
    })
  },
})