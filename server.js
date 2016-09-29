var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {

 'article-one': {
    title: 'article one | harsh goyal',
    heading:'article one',
    date:'sept 5',
    content:`<p>is my first article so bere with me</p>
             <p> is what i am a plane paper with nothing on it</p>
             <p>this the extra piece of line i am writing to express things properly</p>`
},

'article-two': {
    title: 'article Two | harsh goyal',
    heading:'article two',
    date:'sept 8',
    content:`<p>is my second article so bere with me</p>
             <p> is what i am a plane paper with nothing on it</p>
             <p>this the extra piece of line i am writing to express things properly</p>`
},

'article-three': {
    title: 'article Three | harsh goyal',
    heading:'article three',
    date:'sept 13',
    content:`<p>is my three article so bere with me</p>
             <p> is what i am a plane paper with nothing on it</p>
             <p>this the extra piece of line i am writing to express things properly</p>`
}
};

function createTemplate (data)
{
    var title= data.title;
    var date= data.date;
    var heading = data.heading;
    var content= data.content;
    
    var htmlTemplate=  `<html>
                        <head><title>${title}</title>
                        
                        <link href="/ui/style.css" rel="stylesheet" />
                        
                        <meta name="viewpoint" content="width-device-width, initial-scale-1"/>
                        </head>
                        <body>
                            <div class="container">
                            <div>
                                <a href="/">home</a>
                               
                            </div>
                             <hr/>
                             <h3>${heading}</h3>
                             <div>${date}</div>
                             <div>
                                 ${content}
                             </div>
                             </div>
                            </body>
                    </html>`;
    
    return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/:article-two', function (req, res) {
//var articleName = req.params.articleName;
//res.send(createTemplate(articles[articleName]));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
