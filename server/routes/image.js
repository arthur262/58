var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    if (req.body != undefined) {
        if(req.body.imageList!=undefined) {
            const imageList = req.body.imageList;

            console.log(imageList);
        }
    }
});

module.exports = router;
