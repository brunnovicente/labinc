const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h3 style="text-align: center; font-family: Verdana;">Site Labinc em Construção</h3>')
})

app.listen(3000, function (){
    console.log('Servidor rodando em http://localhost:3000');
});