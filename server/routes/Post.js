var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')

const url =
'mongodb+srv://58_user1:1234567891@cluster0.ui0qo.mongodb.net/58'

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

var postSchema = new mongoose.Schema({
	title: String,
})

mongoose
	.connect(url, connectionParams)
	.then(() => {
		console.log('Connected to database ')
	})
	.catch(err => {
		console.error(`Error connecting to the database. \n${err}`)
	})

// 查询mongodb里面的所有数据
var Poster = mongoose.model('Poster', postSchema)

/* post home page. */
router.post('/', function (req, res, next) {
	if(req.body!=undefined){
		console.log(req.body.User_location);
	}
	

    Poster.find((err, docs) => {
	if (!err) {
		res.send(docs);
	}
})
})

module.exports = router
