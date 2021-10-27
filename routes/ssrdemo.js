// //模拟一个最简单的服务器渲染，只需要向页面返回我们需要的html文件

var express = require('express')
var router = express.Router()

router.get('', function (req, res) {
    res.send(`
    <html>
    <head>
        <title>SSR</title>
    </head>
    <body>
        <p>hello world</p>
    </body>
    </html>
    `);
})

module.exports = router;













