const { connect, disconnect } = require("../Config/db.config.js");
const { Causa } = require("../Model/causa.model.js");

class CausaRepository {
  constructor() {
    connect();
  }

  // Query que busca los datos donde cause._id sea el id indicado
  async getCausa(id) {
    // console.log(`Repository::getCausa(${id})`);
    let causas = {};
    try {
      causas = await Causa.find({ "cause._id": parseInt(id) });
    } catch (err) {
      console.log("Error::", err);
    }

    return causas;
  }

  // Query que agrupa _id y name de las causas para devolver una lista con causas únicas
  async getCausas() {
    // console.log("Repository::getCausas()");
    let causas = {};
    try {
      causas = await Causa.aggregate([
        { $group: { _id: { id: "$cause._id", name: "$cause.name" } } }, 	
      ]);
    } catch (err) {
      console.log("Error::", err);
    }
    return causas;
  }
}

module.exports = new CausaRepository();
