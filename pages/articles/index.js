var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Component({
  properties: {
    // 这里定义了tabs属性，属性值可以在组件使用时指定，类似于react的props和proptype
    tabs: {
      type: [],
      value: ["分类视图", "时间视图"],
    }
  },
  data: {
    // 初始化一些默认值ß
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 150,
    currentTab: 0,
    arts: [{
      page: '180226-1',
      name: '我们的六分之一',
    }, {
      page: '180116',
      name: '期末冲刺主题班会',
    }, {
      page: '180109',
      name: '小组积分榜',
    }, {
      page: '171224',
      name: '正能量主题班会——好心态',
    }, {
      page: '171219',
      name: '我们的一百天(2)',
    }, {
      page: '171218',
      name: '小二班的的一百天',
    }, {
      page: '171217',
      name: '我们的一百天(1)',
    }, {
      page: '171216',
      name: '我们的一百天观后感',
    }, {
      page: '171213',
      name: '运动会',
    }, {
      page: '171207',
      name: '体育节开幕啦！',
    }, {
      page: '171123',
      name: '奔跑吧，少年！',
    }, {
      page: '171111',
      name: '勇士归来&nbsp;&nbsp;&nbsp;军训Day5',
    }, {
      page: '171110',
      name: '军训初体验Day4',
    }, ],
    list: [{
      id: 'goodarts',
      name: '美文',
      open: false,
      pages: [{
          page: '180226-1',
          name: '我们的六分之一',
        },
        {
          page: '171219',
          name: '我们的一百天(2)',
        },
        {
          page: '171218',
          name: '小二班的一百天',
        },
        {
          page: '171217',
          name: '我们的一百天(1)',
        },
        {
          page: '171216',
          name: '我们的一百天观后感',
        }
      ]
    }, {
      id: 'meeting',
      name: '班会',
      open: false,
      pages: [{
          page: '180116',
          name: '期末主题班会',
        },
        {
          page: '171224',
          name: '正能量系列主题班会--好心态',
        },
      ]
    }, {
      id: 'playing',
      name: '活动',
      open: false,
      pages: [{
          page: '171213',
          name: '运动会',
        },
        {
          page: '171207',
          name: '体育节开幕啦！',
        },
        {
          page: '171111',
          name: '勇士归来&nbsp;&nbsp;&nbsp;军训Day5',
        },
        {
          page: '171110',
          name: '军训初体验Day4',
        }
      ]
    }, {
      id: 'others',
      name: '其他',
      open: false,
      pages: [{
          page: '180109',
          name: '小组积分榜(1)',
        },
        {
          page: '171123',
          name: '奔跑吧，少年！',
        }
      ]
    }]
  },
  created: function () {
    //空间被创建时触发
    console.log('--->navbar Component created')
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  methods: {
    // 按钮行为触发状态机变化
    tabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    },
    kindToggle: function (e) {
      var id = e.currentTarget.id,
        list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      };
      this.setData({
        list: list
      })
    },
    myNavigator: function (e) {
      wx.navigateTo({
        url: '/pages/articles/articles?id='+e.currentTarget.id
      });
    }
  }
});