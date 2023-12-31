// 引入sequelize
const { DataTypes } = require('sequelize')
const seqs = require('../dbContent')

module.exports = seqs.define('article', {//这里是连接数据库以后调用define方法 去创建一张表并且添加字段
    // 这张表有哪些字段
 
    title: {//文章名称
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {//文章内容
        type: DataTypes.STRING,
        allowNull: false
    },
    createDate: {//创建时间
        type: DataTypes.STRING,
        allowNull: false
    },
    class: {//分类
        type: DataTypes.BOOLEAN,//生活(fasle)or技术（true）
        allowNull: false
    },
    img: {//封面图片
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,//这个是设置是否在表名称后面+s  默认为false +s  设置true就不加s
    createdAt: false,//是否需要createdAt字段，默认为true，需要
    updatedAt: false,//是否需要这个时间字段，默认为true，需要
})

