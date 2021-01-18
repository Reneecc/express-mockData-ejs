//----------请求网络数据尝试------------
var express = require('express');
var router = express.Router();
var request = require('request')

/* GET lagouTest page. */
router.get('', function (req, res, next) {
  //自己放上去的数据 或者公开的数据 https://m.lagou.com/listmore.json
  request('http://m.lagou.com/listmore.json',function (error,response,body) {
    const result=JSON.parse(body).content.data.page.result
    //render提交，将数据提交给后端渲染
    res.render('lagouData',{
      data:{
        result
      }
    })
  })

});

module.exports = router;
