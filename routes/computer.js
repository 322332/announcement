var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET computer homepage. */
router.get('/', function(req, res) {

    res.render('./mainpage.ejs', {
          title: 'bilgisayar'
      })
  })




  router.post('/a',function(req,res){
    var sql="Select * From haberler"
    db.query(sql,function (err, result, fields) {
      if (err) res.send(err);
      res.json(result)
    });
})


module.exports = router;