var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleone = {
    title: 'article one | harsh goyal',
    heading:'article one',
    date:'sept 5',
    content:"<p>is my second article so bere with me</p><p> is what i am a plane paper with nothing on it</p>"
    
};

function createTemplate (data)
{
    var title= data.title;
    var date= data.date;
    var content= data.content;
    
    var template=
    <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
    <body>
            <div class="container">
            <div>
                <a href="/">home</a>
               
            </div>
             <hr/>
             <h3>article two</h3>
             <div>${date}</div>
             <div>
                ${content}
             </div>
             </div>
            </body>
    </html>
    
    ;
    return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleone));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
