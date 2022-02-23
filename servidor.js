// Ejemplo de servidor de node
// los parametros de escucha estan embebidos en el codigo 
//

const express = require('express');
const app = express();

app.get('/datos1', (req, res) => {
    res.send('Hola mundo');
})


app.use(express.static(__dirname+'/vistas_html'));

console.log('escuchando en el puerto 4000');
app.listen(4000);


