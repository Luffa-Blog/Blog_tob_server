// 引入模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

// 对于token库的引入和处理
const { expressjwt: expressJWT } = require('express-jwt')
const md5 = require('md5')
const ENV = require('./dao/ENV')
const { formatResponse } = require('./utils/tool')

// 引入数据库
require('./dao/db')

// 引入路由
const articelRouter = require('./routes/articel');
const adminRouter = require('./routes/admin');
const qrcodeRouter = require('./routes/qrcode');









// 创建服务器实例
var app = express();


// 使用各种中间件
app.use(session({// 引入session 用来保存验证码的信息
  secret: ENV.SESSION_SCRE,
  resave: false,
  saveUninitialized: true,
  cookie: false
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// JWT验证必须放在路由之前
  

const expJWT = expressJWT({
  secret: md5(ENV.JWT_SCRET),
  // getToken:"Access-Token",//指定请求头具体是哪个字段携带token
  algorithms: ["HS256"],
}).unless({
  path: ['/api/qrcode', "/api/admin/login"]
})
app.use(expJWT)
// 使用路由

app.use('/api/qrcode', qrcodeRouter);
app.use('/api/admin', adminRouter);
app.use('/api/articel', articelRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler  错误处理，一旦发生错误就会到这里
app.use(function (err, req, res, next) {

  // 这里处理token验证未通过的问题
  if (err.name === 'UnauthorizedError') {

    res.send(formatResponse(204, "token过期或者未发送", {}))



  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
