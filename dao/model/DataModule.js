

//向表中添加一条数据
module.exports.addModel = async (table, data) => {
    return await table.create(data)
}
//向表中删除一条数据
module.exports.removeModel = async (table, data) => {
    return await table.destroy({
        where: {
            id: data
        }
    })
}
//向表中修改一条数据
module.exports.updataModel = async (table, data) => {


    newdata = data.newdata
    return await table.update({ ...newdata }, {
        where: {
            id: data.id
        }
    })
}

