var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET admin homepage. */
router.get('/', function(req, res) {
    db.query("select * from haberler",function(a,b,c){
        res.render('./adminpage.ejs', {
            title: 'Yönetim Paneli',
            data: b
        })
    })
  
  })



router.post('/kaydet',function(req,res){
    const bas = req.body.baslik
    const hab = req.body.haber

    db.query("insert into haberler value(?,?)",[bas,hab],function(a,b,c){
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    })

})

module.exports = router;