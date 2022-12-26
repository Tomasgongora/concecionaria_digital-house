let fs = require("fs");
ruta = "data/cars.json";
const escribirJSON = function (data) {
      fs.writeFileSync("./" + ruta, JSON.stringify(data), "utf-8");
};

const concesionaria = {
      autos: JSON.parse(fs.readFileSync("./" + ruta, "utf-8")),

      buscarAuto: function (patente) {
            let result = this.autos.find((car) => car.patente === patente);
            if (result === undefined) {
                  return null;
            }
            return result;
      },
      venderAuto: function (patente) {
            let result = this.buscarAuto(patente);
            if (result !== null && result.vendido !== true) {
                  result.vendido = true;
                  escribirJSON(this.autos);
            }
      },
      autosParaLaVenta: function () {
            return this.autos.filter((car) => !car.vendido);
      },
      autosNuevos: function () {
            return this.autosParaLaVenta().filter((car) => car.km < 100);
      },
      listaDeVentas: function () {
            return this.autos.filter((car) => car.vendido).map((car) => car.precio);
      },
      totalDeVentas: function () {
            return this.listaDeVentas().reduce((Total, precio) => Total + precio, 0);
      },
      puedeComprar: function (car, people) {
            return people.capacidadDePagoTotal > car.precio && people.capacidadDePagoEnCuotas * car.cuotas > car.precio;
      },
      autosQuePuedeComprar: function (people) {
            return this.autosParaLaVenta().filter((car) => this.puedeComprar(car, people));
      },
};

module.exports = concesionaria;