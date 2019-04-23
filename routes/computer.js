var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET computer homepage. */
router.get('/', function(req, res) {
  var sql="Select * From GorselHaber"
  db.query(sql,function (err, result, fields) {
    if (err) res.send(err);
    res.render('./mainpage.ejs', {
      title: 'bilgisayar',data: result
  })
 
  });

  
  })




  router.post('/a',function(req,res){
    var sql="Select * From GorselHaber"
    db.query(sql,function (err, result, fields) {
      if (err) res.send(err);
      res.json(result)
    });
})


module.exports = router;