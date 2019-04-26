var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET computer homepage. */
router.get('/', function(req, res) {
  var sql="Select * From GorselHaber where bolumID=0;select * from Duyurular where bolumID=0"
  db.query(sql,function (err, result, fields) {
    if (err) res.send(err);
    res.render('./mainpage.ejs', {
      title: 'bilgisayar',data: result[0],duyuru: result[1]
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