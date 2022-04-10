const express = require('express')
const app = express()

//使用bodyParser，安装方法一查就有
//（不必纠结其原理，有效就好）
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



//获取前端发来的json数据
app.post('/login.js', function(req, res) {
	//用req.body就能获取到json格式的数据
	console.log(req.body)
	
})

//在localhost:3000端口启动服务器
app.listen(3000, function() {
	console.log('服务器已启动')
})
