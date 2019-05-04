var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET admin homepage. */
router.get('/', function(req, res) {
    db.query("select * from GorselHaber",function(a,b,c){
        res.render('./adminpage.ejs', {
            title: 'Yönetim Paneli',
            data: b
        })
    })
  
  })



router.post('/kaydet',function(req,res){
    const resim = req.body.resim
    const bas = req.body.baslik
    const hab = req.body.haber

    db.query("insert into GorselHaber(resim,bolumID,baslik,haber) value(?,?,?,?)",[resim,'0',bas,hab],function(a,b,c){
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    })

})

module.exports = router;