import express from 'express';
const servidor = express();

import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";
import session from "express-session";
import flash from "connect-flash"
import passport from "passport"
//import auth from "./config/auth.js";
//auth(passport)

///////////////////////////////
//CONFIGURAÇÕES
///////////////////////////////
const PORTA = 3000
//Sessão
servidor.use(session({
    secret: "iambatman",
    resave: true,
    saveUninitialized: true,
}))
servidor.use(passport.initialize())
servidor.use(passport.session())
servidor.use(flash());

servidor.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.usuario = req.user || null
    next()
});

servidor.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))

servidor.set('view engine', 'handlebars');

//Body Parser
servidor.use(bodyParser.urlencoded({ extended: false }));
servidor.use(bodyParser.json());

//Pasta de Arquivos Estásticos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
servidor.use(express.static(path.join(__dirname, 'public')));


/////////////////////
/// ROTAS DO SISTEMA
///////////////////////

servidor.get('/', (req, res) => {
    res.redirect('/home')
})

import home from './routes/home.js'
servidor.use('/home', home)

import usuario from './routes/usuario.js'
servidor.use('/usuario', usuario)


servidor.listen(3000, function (){
    console.log('Servidor rodando em http://localhost:3000');
});