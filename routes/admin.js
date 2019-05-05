var express = require('express');
const db= require('../db');
var router = express.Router();


/* GET admin homepage. */
router.get('/', function(req, res) {
    db.query("select * from GorselHaber;select * from Duyurular;",function(a,b,c){
        res.render('./adminpage.ejs', {
            title: 'Yönetim Paneli',
            gorsel: b[0],duyuru: b[1]
        })
    })
  
  })


router.post('/gkaydet',function(req,res){
    const resim = req.body.resim
    const bas = req.body.baslik
    const hab = req.body.haber

    db.query("insert into GorselHaber(resim,bolumID,baslik,haber) value(?,?,?,?)",[resim,'0',bas,hab],function(a,b,c){
      
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    })

})

router.post('/dkaydet',function(req,res){
    const bas = req.body.dbaslik
    const ic = req.body.dicerik
    const tar = req.body.dtarih

    db.query("insert into Duyurular(bolumID,duyuruBaslik,duyuruIcerik,duyuruTarihi) values(?,?,?,?);",
    [0,bas,ic,tar],function(a,b,c){
      
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    })

})




router.post('/dduzenle',function(req,res){
    const bas = req.body.dbaslik
    const ic = req.body.dicerik
    const tar = req.body.dtarih
    const duz = req.body.duzenlenen
console.log(bas +" - "+ic+" - "+tar+"--"+duz)
db.query("update Duyurular set bolumID=?,duyuruBaslik=?,duyuruIcerik=?,duyuruTarihi=? where duyuruID=?",['0',bas,ic,tar,duz],function(a,b,c){
    res.end('{"success" : "Updated Successfully", "status" : 200}');
})

})
router.post('/gduzenle',function(req,res){
    const resim = req.body.resim
    const bas = req.body.baslik
    const hab = req.body.haber
    const duz = req.body.duzenlenen
console.log(resim +" - "+hab+" - "+bas)
    db.query("update GorselHaber set resim=?,bolumID=?,baslik=?,haber=? where gHaberID=?",[resim,'0',bas,hab,duz],function(a,b,c){
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    })

})





router.post('/gsil',function(req,res){

const silinecek=req.body.sil
db.query("delete from GorselHaber where gHaberID=?",[silinecek],function(a,b,c){
    console.log(silinecek)
    res.end('{"success" : "Updated Successfully", "status" : 200}');
})

})
router.post('/dsil',function(req,res){

    const silinecek=req.body.sil
    db.query("delete from Duyurular where duyuruID=?",[silinecek],function(a,b,c){
        console.log(silinecek)
        res.end('{"success" : "Updated Successfully", "status" : 200}');
    })
    
    })



module.exports = router;