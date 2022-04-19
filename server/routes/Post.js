var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')

const url = 'mongodb+srv://58_user1:1234567891@cluster0.ui0qo.mongodb.net/58'

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url,connectionParams);
}

var postSchema = new mongoose.Schema({
	title: String,
	location: String,
	label: String,
	time: Date,
	phone:Number,
	description: Array,
	picture:Array,
})



// 查询mongodb里面的所有数据
var Poster = mongoose.model('poster', postSchema)

/* post home page. */
router.post('/', function (req, res, next) {
	if (req.body != undefined) {
		//当从homepage 发送的时候
		if (req.body.User_location != undefined) {
			if(req.body.User_location=="Whole Halifax"){
				Poster.find((err, docs) => {
				
				if (!err) {
					res.send(docs)
				}
			})
			}
			else{
			Poster.find({location:req.body.User_location},(err, docs) => {
			
				if (!err) {
					res.send(docs)
				}
			})
		}
		}
	}
})

module.exports = router
