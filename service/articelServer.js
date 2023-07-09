const { loginDao } = require('../dao/articelDao')

const { isTimestamp } = require('../utils/isDate')

const {  Op } = require('sequelize');  //这里是进行模糊查询
module.exports.articelServer = async (data = {}) => {

    // await if(token.data)

    !data.title ? delete data.title : data.title = { [Op.substring]: data.title }
    
  


    !isTimestamp(data.createDate)  ? data.createDate = 0 : data.createDate




  


    return await loginDao(data)
}