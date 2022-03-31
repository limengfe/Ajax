// 1.引入express
const express = require('express'); 
// 2.创建应用对象
const app = express();


// 3.创建路由规则
app.get('/server',(request,response)=>{
  //设置请求额头 因为需要跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  response.send('Hello,Ajax.')
})

app.all('/server',(request,response)=>{
  //设置请求额头 因为需要跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应头允许自定义请求头
  response.setHeader('Access-Control-Allow-Headers','*');
  //设置响应体
  response.send('Hello,Ajax.Post')
})




// 4.监听窗口打开
app.listen(8000,()=>{
  console.log("服务器已经启动，8000端口已经打开。")
})