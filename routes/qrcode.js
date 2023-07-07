const express = require('express')
const router = express.Router()
const { createQrCode } = require("../service/qrcodeService")
const { formatResponse } =require('../utils/tool')

router.post('/', async (req, res) => {

    const code = await createQrCode()
    
    // 然后把货渠道的text保存到express-session(插件) 本地保存 在app.use 植入这个插件
    req.session.qrcode = code.text;
    console.log(req.session);
    res.setHeader('Content-Type', "image/svg+xml")
    // formatResponse(200, "请求成功", code.data)
    res.send(code.data);

})
module.exports = router