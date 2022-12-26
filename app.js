const concesionaria = require("./concecionaria");

let compradores = [
      {
            nombre: "Juan",
            capacidadDePagoEnCuotas: 20000,
            capacidadDePagoTotal: 100000,
      },
      {
            nombre: "Maria",
            capacidadDePagoEnCuotas: 15000,
            capacidadDePagoTotal: 150000,
      },
      {
            nombre: "Carlos",
            capacidadDePagoEnCuotas: 10000,
            capacidadDePagoTotal: 115000,
      },
      {
            nombre: "Ana",
            capacidadDePagoEnCuotas: 13000,
            capacidadDePagoTotal: 130000,
      },
      {
            nombre: "Ana",
            capacidadDePagoEnCuotas: 13000,
            capacidadDePagoTotal: 170000,
      },
];

console.log(concesionaria.autosQuePuedeComprar(compradores[1]));