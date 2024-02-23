/* 處理來自客戶端的HTTP GET請求 
根據客戶端請求的tableName,從資料庫中查詢並返回相應的數據  */

const db = require('../db/index.js');

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
    db.query(sql, (err,data)  =>{
        if(err){
            return res.status(500).send('錯誤: ' + err.message);
        }
        res.send(data)
    })
}
module.exports = { userGet };