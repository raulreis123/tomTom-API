// Configuração de aplicação
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORTA_APP = 3333;
const HOST_APP = 'localhost';

// Configurações de servidor (Tráfego de dados e acesso ao site)
app.use(express.json()); // Dados transmitidos em JSON
app.use(express.urlencoded({ extended : false })); // Tradução dos dados de HTML para JS
app.use(cors()); // Permitindo diferentes origens
app.use(express.static(path.join(__dirname, "public"))); // Entrypoint de site

// Abertura de servidor
app.listen(PORTA_APP, ()=>{
    console.info("Servidor operando!");
})

// Provendo arquivo HTML específico para o usuário
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})