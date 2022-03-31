//1.引入刚建的express文件
const { json } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
     response.send('Hello,Ajax-2');
});
//JS响应
app.all('/json-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //自定义请求头需要的设置
    response.setHeader("Access-Control-Allow-Headers",'*')
    //响应一个数据
    const data = {
        name:'FeiFei'
    };
    //对对象进行字符串转化
    let str = JSON.stringify(data);
    //设置响应体
     response.send(str);//只接收字符串
});
//IE缓存
app.get('/ie',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
     response.send('Hello,IE1');
});
//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
     setTimeout(()=>{
         response.send('延时响应')
     },3000)
});
//JQuery服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader("Access-Control-Allow-Headers",'*');
    //设置相应
    const data = {name:'李孟飞'};
    //  response.send('Hello,JQuery,AJAX');
    
    response.send(JSON.stringify(data));//json转化为对象
});
//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader("Access-Control-Allow-Headers",'*');
    //设置相应
    const data = {name:'李孟飞'};
    //  response.send('Hello,JQuery,AJAX');
    
    response.send(JSON.stringify(data));//json转化为对象
});
//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader("Access-Control-Allow-Headers",'*');
    //设置相应
    const data = {name:'李孟飞'};
    //  response.send('Hello,JQuery,AJAX');
    
    response.send(JSON.stringify(data));//json转化为对象
});

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
   response.send(console.log('Hello,JSONP'));
    
});

//jsonp JQuery
app.all('/jquery-jsonp-serve',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader("Access-Control-Allow-Headers",'*');
    //设置响应
       const data ={
           name:"李孟飞",
           wife:['杨幂','娜扎','热巴']
       }
       response.send(data);
    //将数据转化为数组
    //  let str =JSON.stringify(data);
      //接收callback参数
    //   let cb = request.query.callback
      //返回结果
    //   response.end(`${cb}({str})`)
    });
 //CORS
 app.all('/cors-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader("Access-Control-Allow-Headers",'*');
    //设置响应
       response.send('Hello,CORS');
    });


// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务器已经启动,8000端口监听中...');
})