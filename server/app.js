/* 設置和啟動 Express 應用服務器的主要入口點 */
const express = require('express');
const cors = require('cors');
const  bodyParser = require('body-parser');

let app = express()

const router= require('./router.js');


app.use(bodyParser.json())  //配置解析，解析json和urlencoded格式數據
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()) //配置跨域，要在路由之前
app.use(router)

app.listen(3000, () =>{
    console.log('server啟動成功,監聽3000port')
})