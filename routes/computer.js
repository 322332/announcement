var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET computer homepage. */
router.get('/', function(req, res) {

    res.render('./mainpage.ejs', {
          title: 'bilgisayar'
      })
  })


  const kisiler = {'bilga':{job:'Öğrenci'},'bilgb':{job:'Öğrenci'},
  'bilgc':{job:'Prof'},'bilgd':{job:'Serbest Meslek'}}
  



  router.post('/a',function(req,res){
    var sql="Select * From Persons"
    db.query(sql,function (err, result, fields) {
      if (err) res.send(err);
      res.json(result)
    });
})


module.exports = router;