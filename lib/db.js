//데이터베이스 커넥트
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'example',
    database : 'opentutorials',
    port: 3308
})
db.connect();

module.exports = db;    //모듈을 하나 내보낸다.
//DB 커넥트 완료