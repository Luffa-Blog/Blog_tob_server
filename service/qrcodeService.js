const svg = require('svg-captcha')//加载能形成code图片的插件

module.exports.createQrCode = () => {
    return svg.create()
}