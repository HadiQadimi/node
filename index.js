//console.log('hi hadi you are a programming , you are a good man');
//create express js
const express=require('express');
//use express function
const app=express();
const datajson=require('./data/data.json');
//console.log(datajson);
//support ejs extention
app.set('view engine','ejs');
//read css , image ,... files
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('bicycles', {
        obj1:datajson
    });
})
app.get('/bicycle',(req,res)=>{
    const datajson2=datajson.find((b)=> b.id === req.query.id);
    console.log(datajson2);
    res.render('overview', {
        obj:datajson2
    });
})
app.listen(3000,console.log('server is running at port 3000'));

