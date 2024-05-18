let express = require('express');
let app = express();

app.set('view engine', 'ejs' );

app.get('/', (req,res) =>{
    res.render('pages/home');
});

app.get('/', (req,res) =>{
    res.render('pages/home');
});

app.listen(4000);