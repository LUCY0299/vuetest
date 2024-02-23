/* 資料庫連接設定和初始化
mysql2 庫來創建一個 MySQL createPool */

const { createPool } = require('mysql2');

let db = createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '#Lucy910129',
  database: 'vueBarchart_data'
})

module.exports = db;