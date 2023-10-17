const express = require("express");
const handlebars = require('express-handlebars')
const app = express();
const session = require("express-session");
const main = require("./routes/main");
require('dotenv').config();

//CONFIG
    //SESSION
    app.use(session({

        secret: "estacao_metereologica",
        resave: true,
        saveUninitialized: true

    }))

//HANDLEBARS    
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main', runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true, }, }))
    app.set('view engine', 'handlebars')  
//STATICS

    app.use(express.static(__dirname+'/public'));
    app.use(express.static(__dirname+'/controllers'));

//ROUTES

    app.use(main);

//OTHERS

app.listen(process.env.PORT || 8000, () => {

    console.log('Server on'); 

})