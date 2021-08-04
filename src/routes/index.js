import express from "express";
const rutas = express.Router();

import {verifyToken} from '../auth/'
import {protegida} from '../controller'

rutas.get("/", (req, res) => {
  console.log(req.body);
  res.json({ success: "El  MicroServicio esta disponible", body: req.body });
});

rutas.get("*", (req, res) => {
  res.status(404).json({ success: "oppss esta pagina no existe" });
});

//rutas protegidad
rutas.post("/protegida", verifyToken, protegida);

module.exports = rutas;
