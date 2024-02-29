/* 定義路由規則 */
const express = require('express');
const { userGet } = require('./API/user');  /* user.js */

const router = express.Router()
router.get('/user', userGet)  /* 當客戶端(router/index.js)向路徑/user發送GET請求時,將會執行userGet函數 */

module.exports = router;  /* 導出給app.js */