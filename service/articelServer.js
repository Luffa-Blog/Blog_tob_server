const { loginDao } = require('../dao/articelDao')

const { isTimestamp } = require('../utils/isDate')
module.exports.articelServer = async (data = {}) => {


    // await if(token.data)

    data.title ? delete data.title : data.title
    data.createDate == undefined ? data.createDate = 0 : data.createDate
    if (!isTimestamp(data.createDate)) {

        return 'dateError'
    }
    console.log(data,"><><");

    return await loginDao(data)
}