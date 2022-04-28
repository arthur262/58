var express = require('express')
var router = express.Router()
var multiparty = require('multiparty')

var OSS = require('ali-oss')
var fs = require('fs')

var client = new OSS({
	region: 'oss-us-west-1',
	accessKeyId: 'LTAI5tNQsBGbaAdK5sbyGn8k',
	accessKeySecret: 'UXlbGF074BESn3HzYxheohB6oMeJLf',
	bucket: '58xiangmu'
})
const rules = [
	{
		// 指定允许的跨域请求方法，支持GET、PUT、DELETE、POST和HEAD方法。
		allowedMethod: 'GET',
		// 指定允许跨域请求的响应头。建议无特殊情况下将此项设置为通配符星号（*）。
		allowedHeader: '*'
	}
]

async function put(element) {
	try {
		const result = await client.put(element.name, element)

		console.log(result)
	} catch (e) {
		console.log(e)
	}
}

/* GET home page. */
router.post('/', (req, res, next) => {
	let form = new multiparty.Form()
	var imagelist = null
	form.parse(req, function (err, fields, file) {
		imagelist = file.file
	})
	for (let index = 0; index < imagelist.length; index++) {
        
		var lastName = imagelist[index].name.splice(0, 20)
		var fileName = Date.now() + lastName
		fs.rename(fileName, imagelist[index], err => {
			if (err) {
				console.log('出错')
			} else {
				console.log('未出错')
			}
		})
	}
})

module.exports = router
