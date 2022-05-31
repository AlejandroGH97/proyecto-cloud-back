const mongoose = require("mongoose");

// Estructura los documentos de causa
const causaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cause: { _id: Number, name: String },
  date: Date,
  count: Number,
});

// Especificamos en que colección buscar
const Causa = mongoose.model("causa_muerte", causaSchema);

module.exports = { Causa };
