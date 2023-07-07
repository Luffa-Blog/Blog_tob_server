const JWT=require('jsonwebtoken')

const {JWT_SCRET}=require('../dao/ENV')
// token解密
module.exports.isToken=(token)=>{

 return   JWT.verify(token, JWT_SCRET)
    
}