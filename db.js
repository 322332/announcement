var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "web_db",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MySql'e Bağlandı");
});




module.exports = con;