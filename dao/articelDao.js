const articleModel = require("./model/articleModel");
const { addModel, removeModel,updataModel } = require("./model/DataModule");

// 查询数据
module.exports.selectDao = async (data) => {
  return await articleModel.findAll({
    where: data,
  });
};
// 添加数据
module.exports.addDao = async (data) => {
    return await addModel(articleModel,data);
};
// 删除数据
module.exports.removeModel=async(data)=>{
    return await removeModel(articleModel,data)
}

// 修改数据
module.exports.updataModel = async (data) => {
    return await updataModel(articleModel, data)
}
