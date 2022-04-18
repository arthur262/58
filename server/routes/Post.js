var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')

const url = 'mongodb+srv://58_user1:1234567891@cluster0.ui0qo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


 /* post home page. */
router.post('/', function (req, res, next) {
	console.log(req.body)
})

module.exports = router
