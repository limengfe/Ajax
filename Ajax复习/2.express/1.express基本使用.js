// 1.引入express
const express = require('express'); 
// 2.创建应用对象
const app = express();
// 3.创建路由规则
app.get('/',(request,response)=>{
  response.send('Hello,Ajax.')
})
// 4.监听窗口打开
app.listen(8000,()=>{
  console.log("服务器已经启动，8000端口已经打开。")
})