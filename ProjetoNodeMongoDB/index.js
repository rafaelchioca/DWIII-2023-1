const express = require('express');
const mongoose = require('mongoose');
const server = express();

const funcionarioRoutes = require('./routes/funcionarioRoutes');

// Middleware
server.use(
    express.urlencoded({
        extended: true,
    }),
)

server.use(express.json());

// Criando o endpoint e rotas da minha API
server.use('/funcionario', funcionarioRoutes);

// Conexão com MongoDB atlas
const DB_USER = 'user'
const DB_PASSWORD = encodeURIComponent('password')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vo0fhaq.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((err) => {
        console(err);
    })

server.listen(3000);
