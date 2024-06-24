/* 設置和啟動 Express 應用服務器的主要入口點 */
const express = require('express');
const cors = require('cors');   //跨域資源共享
const bodyParser = require('body-parser');
const { createPool } = require('mysql2');  

/* 資料庫連接設定和初始化 */
const db = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root@iii',
    database: 'vueBarchart_data'
})

/* 處理來自客戶端的HTTP GET請求 
根據客戶端請求的tableName,從資料庫中查詢並返回相應的數據  */
function userGet(req, res){    /* req請求對象,res響應對象 */
    // 從請求的查詢參數中獲取表名
    const tableName = req.query.table;

    // 根據請求的表名來構造SQL查詢語句
    let sql;
    if (tableName === 'Parking') {
        sql = 'SELECT * FROM Parking';
    } else if (tableName === 'HotelInfo') {
        sql = 'SELECT * FROM HotelInfo';
    } else {
        // 如果沒有提供表名或提供了不支持的表名
        return res.status(400).send('錯誤: 請求的表名無效或未提供');
    }

    // 執行查詢
    db.query(sql, (err,data)  =>{  /* 引入db模塊來執行構造好的SQL查詢語句;err錯誤對象,data查詢結果*/
        if(err){
            return res.status(500).send('錯誤: ' + err.message);
        }
        console.log(data);
        res.send(data)   /* 用res參數發送數據 */
    })
}

//創建一個Express應用
let app = express()  
// 中間件配置
app.use(bodyParser.json())  //解析json和urlencoded格式數據
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()) //配置跨域，要在路由之前,確保所有的API都可以處理跨域請求

/* 定義路由規則 */
app.get('/user', userGet) 

// 啟動服務器
app.listen(3000, () =>{
    console.log('server啟動成功,監聽3000port')
})