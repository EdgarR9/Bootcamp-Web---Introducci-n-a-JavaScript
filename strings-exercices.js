// concatena 2 cadenas de texto
let myName = "Edgar", dougtherName = "Elena"
console.log(`Mi nombre es ${myName} y mi hija es ${dougtherName}`)


// Muestra la longitud de una cadena de texto
console.log(myName.length)


//Muestra el priemer y ultimo caracter de un string
console.log(myName[0], myName[4])


//Convierte a mayusculas y minusculas un string
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())


//crea una cadena de texto en varias lineas
let lineasDeTexto = `Estoy aprendiendo
JavaScript`
console.log(lineasDeTexto)


// interpola el valor de una variable en un string
let saludo = `Hola, ${myName}`
console.log(saludo)


// Reemplaza todos los espacios en blanco por guiones en un string
let textoUno = "Soy un texto a modificar y/o evaluar"
let resultado = textoUno.replace(/ /g, "-")
console.log(resultado)


//comprueba si una cadena de texto contiene una palabra concreta
console.log(textoUno.includes("texto"))


//Comprueba si dos strings son iguales
if (myName === dougtherName) {
    console.log('los strings son iguales')
} else {
    console.log('los strings no son iguales')
}

// comprueba si dos strings tienen la misma longitud
if (myName.length === dougtherName.length) {
    console.log('los strings tienen el mismo numero de caracteres')
} else {
    console.log('los strings no tienen el mismo numero de caracteres')
}