//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myText: '程序好像出错了',
    inputValue: null
  },
  confirmEvent: function(e) {
    console.log(e);
    this.setData({
      myText: e.detail.value
    })
  },
  clearText: function(e) {
    this.setData({
      'inputValue': ''
    })
  },
  setClipboard: function() {
    var previewText = this.data.myText;
    var showText = '';
    for(var i=0; i<previewText.length; i++) {
      showText += previewText.charAt(i) + '\n';
    }
    console.log(showText);
    wx.setClipboardData({
      data: showText,
      success(res) {
        wx.getClipboardData({
          success(res) {
          }
        })
      }
    })
  }
})
