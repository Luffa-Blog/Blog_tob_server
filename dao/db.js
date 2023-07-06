const dbContent = require('./dbContent')
const md5=require('md5')
const articleModel = require('./model/articleModel')
const adminModel=require('./model/adminModel')
const  userModel=require('./model/userModel')

const article = { model: articleModel, name: "articleModel" }
const admin={model:adminModel,name:'adminModel'}
const user={model:userModel,name:"userModel" }

const addModuleData = async (title, data) => {// 添加数据表模型的数据 对表进行一条数据的初始化   //然后这个方法本身也是异步的
    await dbContent.sync({ alter: true }); //这里就是将数据库模型同步到真正的数据库当中
    console.log("数据库模型同步完毕");
    // 同步完成之后，有一些表，是需要初始化数据
    // 我们需要先查询这张表有没有内容，没有内容才会初始化数据


    if (!await title.model.count()) {
        // 进入这里，说明没有数据，此时我们应该给这张表添加数据
        await title.model.create(data);

    }
    console.log(`${title.name}模型表已经完成初始化`);
}
// 文章添加数据
addModuleData(article, {
    title: '测试1',
    content: `<h1>测试<h1>`,
    createDate: new Date().toString(),
    class: false,
    img: '/static/uploads/logo.png'
})
// 添加个人信息数据

addModuleData(user, {
   name:'邓子需',
   codeName:"Luffa",
    introduce:"<h1>你好，我叫邓子需，是一名前端工程师，你可以叫我Luffa(“路法”),译为：“丝瓜” :当丝瓜老去，留下的的丝瓜络，每一个节点，每一条脉络，就如同当今的互联网一样</h1>",
    sex:1,
    birthday: new Date().toString(),
    slogan:"真正的勇士，敢于直面惨淡的人生，敢于正视淋漓的鲜血"
})

// 登陆用户信息添加数据
addModuleData(admin, {
    username: 'admin',
    pwd: md5(`sk8sigua`),
    level: 3,
   
})
