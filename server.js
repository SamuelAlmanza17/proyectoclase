const express = require('express')
const app = express()

//Puerto de nube o estático
const port = process.env.PORT || 3000;

//Middleware para servir public:
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Hola, este es mi primer servidor')
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});