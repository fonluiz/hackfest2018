var mysql = require("mysql");

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    port     : '3306',
    password : 'hackfest',
    database : 'hackfest_db',
    charset: 'latin1'
})

module.exports = pool;