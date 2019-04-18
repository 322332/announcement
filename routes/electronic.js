var express = require('express');
var router = express.Router();


/* GET electronic homepage. */
router.get('/', function(req, res) {

    res.render('./mainpage.ejs', {
          title: 'elektronik'
      })
  })



  const kisiler = {'ssss':{job:'Öğrenci'},'dddd':{job:'Öğrenci'},
  'zzzzzz':{job:'Prof'},'eeee':{job:'Serbest Meslek'}}
  



  router.post('/a',function(req,res){
  
    const kisiAdlari=Object.keys(kisiler)
    res.send(kisiAdlari)
})




module.exports = router;