const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Server: HttpServer } = require('http')
// const session = require('express-session');
// const passport = require('passport');

const app = express();
const dotenv = require('dotenv');
const httpServer = new HttpServer(app)
const PORT =  5050
const homeRouter = require('./routes/homeRouter')
const serviceRouter = require('./routes/serviceRouter')
const responseRouter = require('./routes/responseRouter');
// const loginRouter = require('./routes/loginRouter')
// const registerRouter = require('./routes/registerRouter');
// const apiRouter = require('./routes/apiRouter');

const io = require('socket.io')(httpServer);
global.io = io;
dotenv.config();

// app.set('view engine', 'ejs')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '..', 'client', 'assets')));


// app.use(session({ secret: 'trabajo', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/productos', homeRouter);
app.use('/service', serviceRouter);
app.use('/response', responseRouter);

io.on('connection', (socket) => {
    console.log("Se conecto")
    socket.on('message', function (data) {
        obejtoBorrar.ventas.forEach((element, i) => {
            if (element.id == data) {
                element.estado = "Aprobado"
            }
        });
    });
    let id = 3212323
    socket.emit('message', function(id){
        console.log("Emitido")
    })
})

httpServer.listen(PORT, () => { console.log("Se inicio el servidor en el puerto N° " + PORT) })



