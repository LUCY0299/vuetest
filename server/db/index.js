/* 資料庫連接設定和初始化
mysql2 庫來創建一個初始化資料連接MySQL */

const { createPool } = require('mysql2');

let db = createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root@iii',
  database: 'vueBarchart_data'
})

module.exports = db;  /* 導出給user.js */