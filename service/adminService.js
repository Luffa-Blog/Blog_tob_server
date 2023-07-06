const md5 = require('md5')
const { loginDao } = require('../dao/adminDao')

const jwt = require('jsonwebtoken')
const ENV = require('../dao/ENV')
// 登陆处理
module.exports.login = async (data) => {

    // 首先拿到密码进行md5进行加密

    data.pwd = md5(data.pwd)

    // 调用数据访问层 将从客户端传递上来的值传递给dao层进行查询
    const back = await loginDao(data)
    // 这里判断是否查询到数据
    if (back.length <= 0) {
        return -1
    }
    // 将需要返回的值进行一个处理
    data.level = back[0].dataValues.level//将登等级添加一下

    let duration = null//设置用户登陆的过期时常
    // 这里判断用户传上来的值必须是正整数
    if (Math.sign(data.rember) > 0) {

        duration = Math.trunc(data.rember)
    } else {
        duration = 1
    }

    // 利用jwt对数据加密形成token
    const token = jwt.sign({
        //用户信息
        username: back[0].dataValues.username,
        level: back[0].dataValues.level,

    },
        md5(ENV.JWT_SCRET),//加密一下解密token的加密名称
        { expiresIn: 60 * 60 * 24 * duration }//过期时间进行加密
    )
    // 然后将token和用户的信息返回给路由
    
    return {
        token,
        data,
    }









}