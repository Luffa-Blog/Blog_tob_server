const { articelServer } = require('../service/articelServer')
const { formatResponse } = require('../utils/tool')
var express = require('express');
var router = express.Router();



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// 获取文章接口

// 查询
router.post("/select", async (req, res) => {

    const data = await articelServer(req.body)
    console.log(data);

    if (data.length === 0) {
       return res.send(formatResponse(code = 201, "未查询到数据", ))
    }
    if (data==="dateError") {
      return  res.send(formatResponse(code = 202, "时间戳为空或者时间戳不对", ))
    }

   return  res.send(formatResponse(code = 200, "请求成功", data.map(item => item.dataValues)));



})


router.post('/modify',async()=>{

})

module.exports = router;
