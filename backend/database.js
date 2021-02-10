var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'WMS'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("------ DB connected -------")
});

module.exports = connection;
