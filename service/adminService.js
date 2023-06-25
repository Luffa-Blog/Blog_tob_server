const md5 = require('md5')
const { loginDao } = require('../dao/adminDao')
const {formatResponse} =require('../utils/tool')
// 登陆处理
module.exports.login = async (data) => {

    // 首先拿到密码进行md5进行加密

    data.pwd = md5(data.pwd)


    const back = await loginDao(data)
    if(back.length<=0){
        return formatResponse(200,"未查询到数据")
    }
    console.log(back[0].dataValues);
    
    const backData={
        username: back[0].dataValues.username,
        level: back[0].dataValues.level,
    }




}