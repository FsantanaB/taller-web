
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');

//set

const PORT = 5000;
//middles
app.use(express.json());

//routes
app.get('/',(req,res) =>{
  res.send(
      "AH, ....."
  )
});

app.get('/horas',(req,res) =>{
    res.json(
        {
            "lunes": [
              {"hora_inicio": "10:00", "hora_fin": "11:00", "disponible": true},
              {"hora_inicio": "11:00", "hora_fin": "12:00", "disponible": false},
              {"hora_inicio": "14:00", "hora_fin": "15:00", "disponible": false},
              {"hora_inicio": "15:00", "hora_fin": "16:00", "disponible": true},
              {"hora_inicio": "16:00", "hora_fin": "17:00", "disponible": true}
            ],
            "martes": [
              {"hora_inicio": "10:00", "hora_fin": "11:00", "disponible": true},
              {"hora_inicio": "11:00", "hora_fin": "12:00", "disponible": true},
              {"hora_inicio": "14:00", "hora_fin": "15:00", "disponible": true},
              {"hora_inicio": "15:00", "hora_fin": "16:00", "disponible": false},
              {"hora_inicio": "16:00", "hora_fin": "17:00", "disponible": true}
            ],
            "miercoles": [
              {"hora_inicio": "10:00", "hora_fin": "11:00", "disponible": false},
              {"hora_inicio": "11:00", "hora_fin": "12:00", "disponible": true},
              {"hora_inicio": "14:00", "hora_fin": "15:00", "disponible": true},
              {"hora_inicio": "15:00", "hora_fin": "16:00", "disponible": false},
              {"hora_inicio": "16:00", "hora_fin": "17:00", "disponible": true}
            ],
            "jueves": [
              {"hora_inicio": "10:00", "hora_fin": "11:00", "disponible": true},
              {"hora_inicio": "11:00", "hora_fin": "12:00", "disponible": false},
              {"hora_inicio": "14:00", "hora_fin": "15:00", "disponible": false},
              {"hora_inicio": "15:00", "hora_fin": "16:00", "disponible": true},
              {"hora_inicio": "16:00", "hora_fin": "17:00", "disponible": true}
            ],
            "viernes": [
              {"hora_inicio": "10:00", "hora_fin": "11:00", "disponible": true},
              {"hora_inicio": "11:00", "hora_fin": "12:00", "disponible": true},
              {"hora_inicio": "14:00", "hora_fin": "15:00", "disponible": true},
              {"hora_inicio": "15:00", "hora_fin": "16:00", "disponible": false},
              {"hora_inicio": "16:00", "hora_fin": "17:00", "disponible": true}
            ]
          }
    )
});
app.post('/reserva', (req, res) => {
    const datosRecibidos = req.body;
    try {
        if (datosRecibidos) {
            console.log(datosRecibidos)
            return res.send(datosRecibidos)
        } else {
            return res.status(400).json({ error: 'No se recibieron datos' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});
// server run

app.listen(PORT, (req,res)=> {
        console.log("Aqui funcionando de mala gana en el puerto:",PORT);
})
 /*const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
  },
  app
 );

 
 sslServer.listen(PORT,(req,res)=> {
    console.log("Aqui funcionando de mala gana en el puerto:",PORT);
    })*/
