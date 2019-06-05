//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myText: '程序好像出错了'
  },
  confirmEvent: function(e) {
    console.log(e);
    this.setData({
      myText: e.detail.value
    })
  },
  inputEvent: function() {
    console.log('inputEvent');
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
