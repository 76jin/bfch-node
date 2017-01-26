/*jshint unused:true */
/*jshint undef:true */

var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

var app = express();

// 포트 설정
app.set('port', process.env.PORT || 3000);

// 핸들바 뷰 엔진 설정
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    'use strict';
    res.render('home');
});

app.get('/about', function (req, res) {
    'use strict';
    res.render('about');
});

// 커스텀 404 페이지
app.use(function (req, res, next) {
    'use strict';
    res.status(404);
    res.render('404');
});

// 커스텀 500 페이지
app.use(function (err, req, res, next) {
    'use strict';
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    'use strict';
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+C to terminate.');
});