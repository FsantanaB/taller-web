exports.obtenerHoras = (req, res) => {
    res.json({
      lunes: [
        { hora_inicio: "10:00", hora_fin: "11:00", disponible: true },
        { hora_inicio: "11:00", hora_fin: "12:00", disponible: false },
        { hora_inicio: "14:00", hora_fin: "15:00", disponible: false },
        { hora_inicio: "15:00", hora_fin: "16:00", disponible: true },
        { hora_inicio: "16:00", hora_fin: "17:00", disponible: true }
      ],
      martes: [
        { hora_inicio: "10:00", hora_fin: "11:00", disponible: true },
        { hora_inicio: "11:00", hora_fin: "12:00", disponible: true },
        { hora_inicio: "14:00", hora_fin: "15:00", disponible: true },
        { hora_inicio: "15:00", hora_fin: "16:00", disponible: false },
        { hora_inicio: "16:00", hora_fin: "17:00", disponible: true }
      ],
      miercoles: [
        { hora_inicio: "10:00", hora_fin: "11:00", disponible: false },
        { hora_inicio: "11:00", hora_fin: "12:00", disponible: true },
        { hora_inicio: "14:00", hora_fin: "15:00", disponible: true },
        { hora_inicio: "15:00", hora_fin: "16:00", disponible: false },
        { hora_inicio: "16:00", hora_fin: "17:00", disponible: true }
      ],
      jueves: [
        { hora_inicio: "10:00", hora_fin: "11:00", disponible: true },
        { hora_inicio: "11:00", hora_fin: "12:00", disponible: false },
        { hora_inicio: "14:00", hora_fin: "15:00", disponible: false },
        { hora_inicio: "15:00", hora_fin: "16:00", disponible: true },
        { hora_inicio: "16:00", hora_fin: "17:00", disponible: true }
      ],
      viernes: [
        { hora_inicio: "10:00", hora_fin: "11:00", disponible: true },
        { hora_inicio: "11:00", hora_fin: "12:00", disponible: true },
        { hora_inicio: "14:00", hora_fin: "15:00", disponible: true },
        { hora_inicio: "15:00", hora_fin: "16:00", disponible: false },
        { hora_inicio: "16:00", hora_fin: "17:00", disponible: true }
      ]
    });
  };