// Diccionario

let diccionario = [
  {
    palabra: "peregrino",
    definicion:
      "Persona Que anda o viaja por tierras extrañas que presentan dificultades.",
  },
  {
    palabra: "berenjena",
    definicion:
      "planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas",
  },
  {
    palabra: "bucle",
    definicion:
      "secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en forma de rizo que se forma en determinadas cosas. ",
  },
  {
    palabra: "estetoscopio",
    definicion:
      "Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen.",
  },
  {
    palabra: "recoleccion",
    definicion:
      "Acción o actividad de recolectar los frutos de la tierra. //Conjunto de frutos recolectados.",
  },
];

var input = document.getElementById("palabra");
var button = document.getElementById("definicion");
var recuadro = document.getElementById("recuadroCeleste");

function buscarPalabra(palabra) {
  for (let i = 0; i < diccionario.length; i++) {
    if (diccionario[i].palabra === palabra) {
      return (recuadro.innerHTML = diccionario[i].definicion);
    }
  }
  return (recuadro.innerHTML =
    "lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento");
}

button.addEventListener("click", () => {
  var valorInput = input.value;
  buscarPalabra(valorInput);
});
