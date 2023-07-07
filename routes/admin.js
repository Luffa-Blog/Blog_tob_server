const express = require("express")
const router = express.Router()
const { login } = require('../service/adminService')
const { formatResponse } = require("../utils/tool")





router.post('/login',async (req, res) => {
    console.log(req.session.qrcode);
    
    console.log(req.body.qrcode.toLowerCase() !== req.session.qrcode.toLowerCase());

    if (req.body.qrcode == undefined || req.body.qrcode.toLowerCase() !== req.session.qrcode.toLowerCase()){

      return  res.send(formatResponse(202, `验证码有误`, -1))
    }

    const data =await login(req.body)
    if(data===-1){
        res.send(formatResponse(201,"账号或密码错误",data))
    }else{
        res.send(formatResponse(200, "数据获取成功", data))
    }

})





module.exports = router