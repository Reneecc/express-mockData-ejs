var express = require('express')
var router =express.Router()
// const request = require('request')

router.get('/',function(req,res,next){
    res.render('testcar', { title: 'car' });
    // 不会引入本地json文件
    // request('../public/mydata/carData.json',function (error,response,body) {
    //     console.log(body)
    //     // const mydata = JSON.parse(body);
    //     // console.log(mydata)
    // })
})

module.exports=router;