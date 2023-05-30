var db = require('./db');
var template = require('./template.js');
exports.home = function(response){ //여러개의 함수를 제공할거기 때문에 export 만 사용한다. 한개일 경우 module.export
    db.query(`SELECT * FROM topic`, function(error,topics){
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}