const adminModule=require('./model/adminModel')

module.exports.loginDao=async(data)=>{
    return await adminModule.findAll({
        where:{
            username:data.username,
            pwd:data.pwd
        }
    })
}