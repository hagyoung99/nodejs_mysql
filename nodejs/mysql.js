var mysql      = require('mysql');  //mysql 모듈을 사용하고 mysql 이라는 변수를 통해 사용하겠다.
var connection = mysql.createConnection({   //mysql를 통해 createConnection 을 호출하는데 변수로 host, user, password, database 이름을 넣어준다.
    host     : '127.0.0.1',
    user     : 'root',
    password : 'example',
    database : 'opentutorials',
    port: 3308
});

connection.connect();

connection.query('SELECT * FROM TOPIC', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();