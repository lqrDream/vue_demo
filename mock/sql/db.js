// 用mockjs模拟生成数据
var Mock = require('mockjs');

let rm = Mock.Random;

let mapData = n => {

  let data = [];

  for (var i = 0; i <= n; i++) {
    data.push({
      "id": 1000 + i + new Array(20).fill('0').join(''),
      "_id": 1000 + i + new Array(20).fill('0').join(''),
      title: "@ctitle(8,12)",
      des: "@csentence(10,12)",
      time: "@integer(1511197952100,1611197952100)",
      img: rm.image('100x100', rm.color(), rm.cword(1)),
      detail: {
        auth_icon: rm.image('50x50', rm.color(), rm.cword(1)),
        auth: "@cname",
        content: function () {
          let result = '';
          for (var i = 0; i < (Math.random() + 1) * 10; i++) {
            result += '<p>' + Mock.Random.cparagraph(3, 5) + '</p>'
          }
          return result;
        }
      }
    })
  }

  return data;
}

let mapData2 = n => {

  let data = [];

  for (var i = 0; i <= n; i++) {
    data.push({
      "id": 1000 + i + new Array(20).fill('0').join(''),
      "_id": 1000 + i + new Array(20).fill('0').join(''),
      title: '@ctitle(10,15)',
      sub_title: "@csentence(15,18)",
      banner: rm.image('800x745', rm.color(), rm.cword(4, 10)),
      time: '@integer(1511197952100,1611197952100)',
      detail: {
        auth_icon: rm.image('50x50', rm.color(), rm.cword(1)),
        auth: "@cname",
        content: function () {
          let result = '';
          for (var i = 0; i < (Math.random() + 1) * 10; i++) {
            result += '<p>' + Mock.Random.cparagraph(3, 5) + '</p>'
          }
          return result;
        }
      }
    })
  }

  return data;
}



let mapData3 = n => {

  let data = [];

  for (var i = 0; i <= n; i++) {
    data.push({
      "id": 1000 + i + new Array(20).fill('0').join(''),
      "_id": 1000 + i + new Array(20).fill('0').join(''),
      title: '@ctitle(10,15)',
      img: rm.image('1680x745', rm.color(), rm.cword(1, 4)),
      content: function () {
        let result = []
        for (var i = 0; i < 7; i++) {
          result.push(Mock.Random.integer(100, 300))
        }
        return result;
      }
    })
  }

  return data;
}

let mapData4 = n => {

  let data = [];

  for (var i = 0; i <= n; i++) {
    data.push({
      "id": 1000 + i + new Array(20).fill('0').join(''),
      "_id": 1000 + i + new Array(20).fill('0').join(''),
      title: '@ctitle(10,15)',
      img: rm.image('100x100', rm.color(), rm.cword(4, 10)),
      read: rm.boolean(0, 1),
      detail: {
        auth_icon: rm.image('100x100', rm.color(), rm.cword(1)),
        auth: "@cname",
        time: '@integer(1511197952100,1611197952100)',
        content: function () {
          let result = '';
          for (var i = 0; i < (Math.random() + 1) * 10; i++) {
            result += '<p>' + Mock.Random.cparagraph(3, 5) + '</p>'
          }
          return result;
        }
      }
    })
  }

  return data;
}


//编程型(app.js) 需要的是一个对象
module.exports = Mock.mock({
  'banner': mapData2(10),
  "show": mapData3(90),
  "profile": mapData(80),
  "message": mapData4(60),
  "home": mapData(60),
  "user": {
    "_id": 1000 + new Array(20).fill('0').join(''),
    auth_icon: rm.image('50x50', rm.color(), rm.cword(1)),
    nikename: '@cname',
    sex: rm.boolean(0, 1),
    iphone: '@integer(100,10000)',
    date: '@integer(1511197952100,1611197952100)'
  }
})