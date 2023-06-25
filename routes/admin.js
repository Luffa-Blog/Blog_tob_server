const express = require("express")
const router = express.Router()
const {login} =require('../service/adminService')


router.post('/login', (req, res) => {

    login(req.body)
})



module.exports = router