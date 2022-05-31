const causaService = require("../Service/causa.service.js");

/*
 * Controller encargado de llamar a los servicios necesarios para las necesidades de las rutas de causas
 */
class CausaController {

  // Ruta: /api/causas/:id
  async getCausa(id) {
    // console.log(`Controller::getCausa(${id})`);
    return causaService.getCausa(id);
  }

  // Ruta /api/causas
  async getCausas() {
    // console.log("Controller::getCausas()");
    return causaService.getCausas();
  }
}

module.exports = new CausaController();
