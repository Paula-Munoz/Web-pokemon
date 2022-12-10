// Algoritmo para elegir tu pokemon inicial
// Autor: @brayandiazc

// Saludo inicial
let nombre = ""
nombre = prompt("¿Cómo te llamas?")
alert("Hola " + nombre + ", bienvenido al mundo Pokemon!")

// Elegir tu pokemon inicial
let trainer = 0
trainer = prompt("Elige tu pokemon inicial: 1 Charmander, 2 Squirtle, 3 Bulbasaur")

// Mostrar tu pokemon inicial
if (trainer == 1) {
  alert("Tu pokemon inicial es Charmander")
} else if (trainer == 2) {
  alert("Tu pokemon inicial es Squirtle")
} else if (trainer == 3) {
  alert("Tu pokemon inicial es Bulbasaur")
} else {
  alert("Te toco Pikachu")
}
