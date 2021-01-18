// --------本地模拟数据---------
var express = require('express');
var router = express.Router();
// var request = require('request');
var data = require('../public/mydata/carData.json') //请求本地数据直接require

// 前端mock数据
/*get localData page */
console.log('my mock data::', data)
router.get('', function (req, res, next) {
    res.render('localData',{
        data:{
            data
        },
        // title:{
        //     Aaa
        // }
    })
})


//Unexpected token u in JSON at position 0  报错 JSON.parse解析了undefined

module.exports = router;