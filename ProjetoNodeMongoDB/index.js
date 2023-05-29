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
const DB_USER = 'fatec_franca'
const DB_PASSWORD = encodeURIComponent('2KTAO4YCkJJc2p2R')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vo0fhaq.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((err) => {
        console(err);
    })

// const cursos  = ['Node JS', 'JavaScript', 'PHP', 'React Show', 'VueJS'];

// // Middleware Global
// server.use((req, res, next) =>{
//     console.log(`URL CHAMADA: ${req.url}`);

//     return next();
// });

// // Middleware Local (especifico para tratar do INSERT de novos cursos)
// function checkCurso(req, res, next){
//     if(!req.body.novo_curso){
//         return res.status(400).json({error: "Nome do curso é obrigatório nesse formato {'novo_nome': 'Lua'}"});
//     }

//     return next();
// };

// // Middleware Local (especifico para cursos que não existem)
// function checkIDCurso(req, res, next){
//     const curso = cursos[req.params.index];
//     if(!curso){
//         return res.status(400).json({ error: "O curso não existe no ID solicitado"});
//     }

//     return next();
// }

// // Middleware Local (especifico para request body existente)
// function checkReqBody(req, res, next){
//     if(!req.body.curso){
//         return res.status(400).json({error: "Obrigatório informar curso nesse formato {'curso': 'Node JS Avançado'}"});
//     }

//     return next();
// };

// // Middleware Local (console.log lista curso)
// function checkInsert(req, res, next){
//     if(cursos.push){
//         console.log(cursos);
//     }

//     return next();
// };

// // Middleware Local (especifico para mensagem no delete)
// function checkDelete(req, res, next){
//     if(cursos.splice){
//         return res.status(200).json({message: "Curso deletado com sucesso"});
//     }

//     return next();
// };


// // Criando meu SELECT
// server.get('/curso', (req, res) => {
//     return res.json(cursos);
// });

// // Query params = ?nome=NodeJS
// // Route params = /curso/2
// //Request Body = { nome: 'Node JS', tipo: 'Backend'}
// // localhost:3000/curso

// //Criando meu SELECT passando ID
// server.get('/curso/:index', checkIDCurso, (req, res) => {
//     // const nome = req.query.nome;
//     // const id = req.params.id;
//     // return res.json({ curso: `${id}`, nome: `${nome}`});
//     const { index } = req.params;
//     return res.json(cursos[index]);
// });

// // Permitindo INSERIR dados via API
// server.post('/curso', checkCurso, checkInsert, (req, res) => {
//     const { novo_curso } = req.body;
//     cursos.push(novo_curso);

//     return res.json(cursos)
// })

// // Permitindo UPDATE de um curso
// server.put('/curso/:index', checkIDCurso, checkReqBody, (req, res) => {
//     const { index } = req.params;
//     const { curso } = req.body;

//     cursos[index] = curso;

//     return res.json(cursos);
// })

// // Permitindo o DELETE de um curso
// server.delete('/curso/:index', checkDelete, (req, res) => {
//     const { index } = req.params;

//     cursos.splice(index, 1);
// })

server.listen(3000);
