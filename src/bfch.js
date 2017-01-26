var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    'use strict';
    res.type('text/plain');
    res.send('bfch homepage');
});

// test start
app.get('/about/contact', function (req, res) {
    'use strict';
    res.type('text/plain');
    res.send('About/contact');
});

app.get('/about/directions', function (req, res) {
    'use strict';
    res.type('text/plain');
    res.send('About/directions');
});

app.get('/about*', function (req, res) {
    'use strict';
    res.type('text/plain');
    res.send('About*');
});
// test end

app.get('/about', function (req, res) {
    'use strict';
    res.type('text/plain');
    res.send('About bfch homepage');
});

// 커스텀 404 페이지
app.use(function (req, res) {
    'use strict';
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// 커스텀 500 페이지
app.use(function (err, req, res, next) {
    'use strict';
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    'use strict';
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+C to terminate.');
});