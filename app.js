var createError = require('http-errors');
var express = require('express'); //加载express模块
var path = require('path'); //路径模块
var cookieParser = require('cookie-parser'); //解析cookie的工具，通过req.cookies可以取到传过来的cookie，并把它们转成对象
var logger = require('morgan'); //日志中间件，能够在控制台中，显示req请求的信息
// var request = require('request')

//路由信息（接口地址），存放在routes的根目录
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopcarRouter = require('./routes/shopcar');
var lagouRouter = require('./routes/lagou');
var localRouter = require('./routes/localData');
var ssrdemoRouter = require('./routes/ssrdemo')

var app = express();

// view engine setup 注册模版引擎 ejs
app.set('views', path.join(__dirname, 'views')); //设置视图根目录 __dirname指向被执行文件的绝对路径
app.set('view engine', 'ejs'); //设置视图格式

//载入中间件
app.use(logger('dev')); //日志中间件
app.use(express.json()); //解析json的中间件
app.use(express.urlencoded({ extended: false })); //解析urlencoded请求体的中间件
app.use(cookieParser()); //解析cookie的中间件

//设置public文件夹为存放静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));//引入静态文件

//配置路由 （'自定义路径',上面设置的接口地址）
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shopcar', shopcarRouter);
app.use('/lagouTest', lagouRouter);
app.use('/localTest',localRouter);
app.use('/ssrdemo',ssrdemoRouter)

// catch 404 and forward to error handler  错误处理
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
