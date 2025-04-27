const express = require('express');
const router = express.Router();

const reservaController = require('../controllers/reservaController');
const horasController = require('../controllers/horasController');

router.get('/', (req, res) => res.send("Servidor funcionando con estilo 😎"));
router.get('/horas', horasController.obtenerHoras);
router.post('/reserva', reservaController.crearReserva);

module.exports = router;