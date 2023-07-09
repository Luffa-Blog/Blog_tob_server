const articleModel = require('./model/articleModel')

module.exports.loginDao = async (data) => {

    console.log(data,">>>><<<<<");
    return await articleModel.findAll({
        where: data
    })
}