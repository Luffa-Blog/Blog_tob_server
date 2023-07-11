const {
  selectDao,
  addDao,
  removeModel,
  updataModel,
} = require("../dao/articelDao");

const { isTimestamp } = require("../utils/isDate");

const { Op } = require("sequelize"); //这里是进行模糊查询
// 查询
module.exports.articelServer = async (data = {}) => {
  !data.title
    ? delete data.title
    : (data.title = { [Op.substring]: data.title });

  !isTimestamp(data.createDate) ? delete data.createDate : data.createDate;

  return await selectDao(data);
};

// 新增
module.exports.addServer = async (data) => {
  // 要传进来的数据模型的基本信息（工具）
  const dataModel = {
    title: "",
    content: "",
    createDate: "",
    class: false,
    img: "",
  };
  // // 检测传进来的数据是否没传或者为空
  if (typeof data.class !== "boolean") {
    return "dataError";
  }
  for (const key in dataModel) {
    if (!data[key] && key !== "class") {
      return "dataError";
    }
  }

  return await addDao(data);
};
// 删除

module.exports.removeServer = async (data) => {
  data = parseInt(data);
  if (isNaN(data)) {
    return "dataError";
  }

  const ss = await selectDao(data);
  if (ss.length === 0) {
    return "dataError";
  }
  return await removeModel(data);

  // return await addDao(data)
};

// 修改
module.exports.updateServer = async (data) => {
  // 要传进来的数据模型的基本信息（工具）
  const dataModel = {
    title: "",
    content: "",
    createDate: "",
    class: false,
    img: "",
  };
  // // 检测传进来的数据是否没传或者为空

  if (typeof data.newdata.class !== "boolean") {
    return "dataError";
  }
  for (const key in dataModel) {
    if (!data.newdata[key] && key !== "class") {
      return "dataError";
    }
  }
// 查询数据是否存在
  data.id = parseInt(data.id);
  if (isNaN(data.id)) {
    return "dataError";
  }

  const ss = await selectDao(data.id);
  if (ss.length === 0) {
    return "dataError";
  }

//   修改
  return await updataModel(data);
};
