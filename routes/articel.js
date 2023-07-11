const { articelServer, addServer, removeServer, updateServer } = require("../service/articelServer");
const { formatResponse } = require("../utils/tool");
var express = require("express");
var router = express.Router();
// 查询
router.post("/select", async (req, res) => {
   const data = await articelServer(req.body);

   if (data.length === 0) {
      return res.send(formatResponse((code = 201), "未查询到数据"));
   }
   if (data === "dateError") {
      return res.send(formatResponse((code = 202), "时间戳为空或者时间戳不对"));
   }

   return res.send(
      formatResponse(
         (code = 200),
         "请求成功",
         data.map((item) => item.dataValues)
      )
   );
});

// 新增
router.post("/add", async (req, res) => {
   const data = await addServer(req.body);
   if (data === "dataError") {
      return res.send(
         formatResponse(201, "传输的数据有问题，请检查数据是否有空🈯️或未传")
      );
   }

   if (data.dataValues) {
      return res.send(formatResponse(200, "添加成功", data.dataValues));
   }
   returnres.send(formatResponse(202, "添加失败！"));
});

// 修改
router.post("/update", async (req, res) => {

   const data = await updateServer(req.body)

   if (data === "dataError") {
      return res.send(
         formatResponse(201, "失败,id可能有问题")
      );
   }
   res.send(
      formatResponse(200, "成功", data[0])
   );

});
// 删除
router.post("/remove", async (req, res) => {
   const data = await removeServer(req.body.id)
   if (data === "dataError") {
      return res.send(
         formatResponse(201, "失败,id可能有问题")
      );
   }
   res.send(
      formatResponse(200, "成功", data)
   );

});

module.exports = router;
