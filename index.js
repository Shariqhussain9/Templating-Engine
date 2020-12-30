const express=require('express');
const app=express();
const path=require('path');
const exphbs=require('express-handlebars');
const controller=require('./controller/controller');

//set path statically
app.use(express.static(path.join(__dirname,'public')));
//
app.engine('handlebars', exphbs({layoutsDir:__dirname+"/views/layouts",partialsDir:__dirname+"/views/helpers"}));
app.set('view engine', 'handlebars');

app.use('/',controller);

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{console.log(`Server Started at ${PORT}`);});