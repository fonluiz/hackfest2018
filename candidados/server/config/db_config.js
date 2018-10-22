var mysql = require("mysql");

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    port     : '3306',
    password : 'root',
    database : 'hackfest_db',
    charset: 'latin1'
})

module.exports = pool;