var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET computer homepage. */
router.get('/', function(req, res) {
  var d = new Date();
  var today = d.getDay()-1
  var sql="Select * From GorselHaber where bolumID=0;"+
  "select * from Duyurular where bolumID=0;"+
  "select gunAdi,dersSaati,dersSinifi,dersAdi,derslik from dersProgrami,dersProgramiGunler where dersProgrami.gunID=dersProgramiGunler.gunID and bolumID=0 and dersProgrami.gunID=0;" 
 db.query(sql,function (err, result, fields) {
    if (err) res.send(err);
    res.render('./mainpage.ejs', {
      title: 'bilgisayar',data: result[0],duyuru: result[1],dersProg: result[2]
     
  })
 
  });

  })



  router.post('/a',function(req,res){
    var sql="Select * From Duyurular where bolumID=0"
    db.query(sql,function (err, result, fields) {
      if (err) res.send(err);
      res.json(result)
    });
})


module.exports = router;