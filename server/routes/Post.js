var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')

const url = 'mongodb+srv://58_user1:1234567891@cluster0.ui0qo.mongodb.net/58'

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}
main().catch(err => console.log(err))

async function main() {
	await mongoose.connect(url, connectionParams)
}

var postSchema = new mongoose.Schema({
	title: String,
	location: String,
	label: String,
	time: Date,
	phone: Number,
	description: Array,
	picture: Array
})

// 查询mongodb里面的所有数据
var Poster = mongoose.model('poster', postSchema)

/* post home page. */
router.post('/', function (req, res, next) {
	if (req.body != undefined) {
		//当从homepage 发送的时候
		if (req.body.Current_page == 'Home') {
			if (req.body.User_location == 'Whole Halifax') {
				Poster.find( (err, docs) => {
					if (!err) {
						res.send(docs)
					}
				}).sort({"time": 1}).limit(10);
			}else {
			Poster.find({ location: req.body.User_location }, (err, docs) => {
				if (!err) {
					res.send(docs)
				}
			}).sort({"time": 1}).limit(10);
		}
		}
		else if (req.body.Current_page == 'Home/Card') {
			if (req.body.User_location == 'Whole Halifax') {
				Poster.find( (err, docs) => {
					if (!err) {
						res.send(docs)
					}
				}).sort({"time": 1}).limit(10);
			}else {
			Poster.find({ location: req.body.User_location }, (err, docs) => {
				if (!err) {
					res.send(docs)
				}
			}).sort({"time": 1}).limit(10);
		}
		}
		//为了 
		else if (req.body.Current_page=="Poster"){
			Poster.find({ "_id": req.body.user_id }, (err, docs) => {
				if (!err) {
					res.send(docs);
				}
			})
			
		}
	}
})


module.exports = router
