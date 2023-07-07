const articleModel = require('./model/articleModel')

module.exports.loginDao = async (data) => {
    return await articleModel.findAll({
        where: data
    })
}