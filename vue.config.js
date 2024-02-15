const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  /* 告訴 Vue CLI 轉譯所有來自 node_modules 的依賴,確保能在舊版瀏覽器上運行*/
})
