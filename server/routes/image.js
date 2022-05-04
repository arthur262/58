var express = require('express')
var router = express.Router()
var multiparty = require('multiparty')

var OSS = require('ali-oss')

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
		const result = await client.put(
			'/image/' + element.originalFilename,
			element.path,
			{ rules }
		)
		return result.res.requestUrls[0]
	} catch (e) {
		console.log(e)
	}
}

router.post('/', async (req, res, next) => {
	let form = new multiparty.Form()
	var url_list = []
	await function(){
		form.parse(req, async function (err, fields, file) {
			const imagelist = file.file
			for (let index = 0; index < imagelist.length; index++) {
				await put(imagelist[index]).then(function (url) {
					url_list.push(url)
				})
			}
		})
	}
	console.log(url_list);

})

module.exports = router
