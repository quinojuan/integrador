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

// Comprando muebles

var botonComprar = document.getElementById("comprar");
var botonSacarProducto = document.getElementById("sacarItem");
var circulo = document.getElementById("circulo");
var silla = document.getElementById("valorSilla");
var valorSilla = 2500;
silla.innerHTML = valorSilla;
var total = document.getElementById("total");
var valorCirculo = 0;
circulo.innerHTML = valorCirculo;

botonComprar.addEventListener("click", () => {
  valorCirculo++;
  circulo.innerHTML = valorCirculo;

  total.innerHTML = valorSilla * valorCirculo;
});

botonSacarProducto.addEventListener("click", () => {
  if (valorCirculo > 0) {
    // con este if evito que se me generen numeros negativos en la cantidad
    valorCirculo--;
    circulo.innerHTML = valorCirculo;
    total.innerHTML = valorSilla * valorCirculo;
  }
});

var buttonthree = document.getElementById("llamar3");
buttonthree.addEventListener("click", () => {
  let productos = [
    {
      nombre: "remera",
      precio: 2500,
      stock: 40,
    },
    {
      nombre: "buzo",
      precio: 5750,
      stock: 32,
    },
  ];

  let usuarioAdministrador = "cosme";
  let passwordAdmin = "admin";

  let agregarProducto = () => {
    let nombre = prompt("Ingrese el nombre de un producto: ");
    let precio = prompt("Ingrese el precio que quiere asignarle: ");
    let stock = prompt("Ingrese la cantidad de la que dispone: ");

    let nuevoProducto = {
      nombre,
      precio,
      stock,
    };

    productos.push(nuevoProducto);
  };

  let verificarUsuario = () => {
    let usuario = prompt("ingrese el nombre de usuario: ");
    let password = prompt("ingrese su contraseña");

    if (usuario === usuarioAdministrador && password === passwordAdmin) {
      agregarProducto();
      console.log(productos);
    } else {
      alert("no tiene permiso para agregar productos");
    }
  };

  verificarUsuario();

  // mejorar la funcion para que se pueda agregar mas de un producto y que se repita el ciclo hasta que el
  // usuario diga que quiere salir.
});

// EJERCICIO 4

let cancionActual = ["mi", "barba", "tiene", "tres", "pelos"];
var cancion = document.getElementById("cancion");
var buttonSacarPalabra = document.getElementById("quitarPalabra");
var palabraAQuitar = document.getElementById("palabraFuera");

cancion.innerHTML = cancionActual.join(" ");

function eliminarPalabra() {
  console.log(palabraAQuitar.value);
  let laPalabraExiste = cancionActual.includes(palabraAQuitar.value);

  if (cancionActual.length > 0 && laPalabraExiste) {
    cancionActual.splice(cancionActual.indexOf(palabraAQuitar.value), 1);
    cancion.innerHTML = cancionActual.join(" "); // Mostrar los resultados actualizados
  }
}

buttonSacarPalabra.addEventListener("click", eliminarPalabra);

// EJERCICIO 5

var noche = document.getElementById("noche");
var tema2 = document.getElementById("tema2");

let generarImagen = () => {
  const imagen = document.createElement("img");

  imagen.src = "./imagenes/murcielago.png";
  imagen.alt = "murcielago";
  imagen.id = "murci"


  tema2.style.backgroundColor = "darkblue"

  tema2.appendChild(imagen);
};

let eliminarImagen = () => {
  const imagen = document.getElementById("murci")

  if (imagen) {
    tema2.style.backgroundColor = ""
    imagen.remove()
  }
}

noche.addEventListener("mouseover", generarImagen);
noche.addEventListener("mouseout", eliminarImagen);
