const express = require('express');
const router = express.Router();
const { pool } = require('../db');  

router.get('/test', (_req, res) => {
  res.json({ message: 'API is working!' });
});

/*	
Devuelve una lista de tours limitada por el limit y offset.Ambos parámetros tienen un valor por defecto:
Limit 10
Offset 0*/
router.get("/tours" ,async (req, res) =>{
  const limit= parseInt(req.query.limit) || 10;
  const offset= parseInt(req.query.offset) || 0;

  try{
    const sql=await pool.query("select * from tourapp.tours limit $1 offset $2",[limit, offset]);
    res.json(sql.rows);
  }catch(err){
    res.status(500).json("Eroor al listar los tours");
  }
} );
/*	
Devuelve la disponibilidad de los tours en base a la fecha actual, solamente de fechas 
futuras.Tampoco devuelve las horas que ya han sido reservadas.*/
router.get("/tours/availability" ,async (req, res) =>{
  const id= req.body;
  try{
    const sql=await pool.query("select tour_id,seats_available,schedule_time from tourapp.tour_schedules where tour_id=$1 and schedule_time>=now() and seats_available<=20",[id]);
    res.json(sql.rows);
  }catch(err){
    res.status(500).json("Eroor al devolver los tours");
  }
} );


module.exports = router;
