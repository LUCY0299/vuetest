/* 定義路由規則 */
const express = require('express');
const { userGet } = require('./API/user');

const router = express.Router()
router.get('/user', userGet)

module.exports = router;