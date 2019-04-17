var express = require('express');
var router = express.Router();


const kisiler = {'Gökhan':{job:'Öğrenci'},'Oğuz':{job:'Öğrenci'},
'Zülfikar':{job:'Prof'},'Emre':{job:'Serbest Meslek'}}



/* GET home page. */
router.get('/', function(req, res) {

  res.render('./index.ejs', {
		title: 'selam'
	})
})



router.post('/a',function(req,res){
		const kisiAdlari=Object.keys(kisiler)
		res.send(kisiAdlari)
})


module.exports = router;
