exports.crearReserva = (req, res) => {
    const datosRecibidos = req.body;
    try {
      if (datosRecibidos) {
        console.log("Reserva recibida:", datosRecibidos);
        return res.json({ mensaje: 'Reserva procesada', datos: datosRecibidos });
      } else {
        return res.status(400).json({ error: 'No se recibieron datos' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  };