//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectArray: [{
      "id": "1",
      "text": "谷金楼集"
    },{
     "id": "2",
    "text": "宋村"
    }, {
      "id": "3",
      "text": "韩村"
    },{
      "id": "4",
      "text": "闫李"
      }, {
        "id": "5",
        "text": "王方"
      }, {
        "id": "6",
        "text": "梁方"
      }, {
        "id": "7",
        "text": "崔方"
      }, {
        "id": "8",
        "text": "官庄"
      }, {
        "id": "9",
        "text": "孟郭"
      }, {
        "id": "10",
        "text": "南杨村"
      }, {
        "id": "11",
        "text": "东邵郭"
      }, {
        "id": "12",
        "text": "西邵郭"
      }, {
        "id": "13",
        "text": "前岳连"
      }, {
        "id": "14",
        "text": "后岳连"
      }, {
        "id": "15",
        "text": "西小楼"
      }, {
        "id": "16",
        "text": "六屯"
      }, {
        "id": "三坡",
        "text": "官庄"
      }, {
        "id": "18",
        "text": "李家屯"
      }, {
        "id": "19",
        "text": "前平邑"
      }, {
        "id": "20",
        "text": "后平邑"
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  nextPage: function() {
    wx.navigateTo({
      url: '../oddJob/oddJob',
    })
  }
})
