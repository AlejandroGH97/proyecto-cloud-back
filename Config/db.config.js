const mongoose = require("mongoose");

const connect = () => {
  const url = process.env.DB_CONNECTION_STRING;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Abrimos la conexión solo una vez
  mongoose.connection.once("open", async () => {
    console.log("Conexión a db exitosa.");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error al conectar a la db.  ", err);
  });
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once("close", async () => {
    console.log("Desconexión exitosa.");
  });
};

module.exports = {
  connect,
  disconnect,
};
