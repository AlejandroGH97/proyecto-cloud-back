const causaRepository = require("../Repository/causa.repository.js");

/*
 * Servicio encargado de comunicarse con el repositorio de causas y arreglar datos
 */
class CausaService {
  constructor() {}

  // Retorna datos de la causa con id indicado
  async getCausa(id) {
    // console.log(`Service::getCausas(${id})`);
    return await causaRepository.getCausa(id);
  }

  // Pide lista de causas al repositorio y arregla el formato de los datos
  async getCausas() {
    // console.log("Service::getCausas()");
    let causas = await causaRepository.getCausas();
    causas = causas.map((causa) => {
      return { ...causa["_id"] };
    });
    return causas;
  }
}

module.exports = new CausaService();
