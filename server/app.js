/* 設置和啟動 Express 應用服務器的主要入口點 */
const express = require('express');
const cors = require('cors');   //跨域資源共享
const  bodyParser = require('body-parser');

let app = express()  //創建一個Express應用

const router= require('./router.js');  //引入定義路由


app.use(bodyParser.json())  //解析json和urlencoded格式數據
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()) //配置跨域，要在路由之前,確保所有的API都可以處理跨域請求
app.use(router) //根據router.js中定義的路由來處理請求

app.listen(3000, () =>{
    console.log('server啟動成功,監聽3000port')
})