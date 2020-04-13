const express = require('express');
const app = new express();
const path = require('path');

const  http = require('http').Server(app);



let port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.redirect('login.html');
});

app.get('/transfer',(req,res)=>{
  res.redirect('transfer.html');
});
app.get('/dash',(req,res)=>{
  res.redirect('dash.html');
});

app.post('/dash',(req,res)=>{
  res.redirect('dash.html');
});


app.use(express.static(path.join(__dirname, '../public/')));



app.set('view engine', '.hbs');



http.listen(port,()=>{
       console.log('Servidor escuchando %s ',port);
});