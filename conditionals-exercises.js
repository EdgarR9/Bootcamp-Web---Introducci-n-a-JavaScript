// 1 imprime por consola tu nombre si una variable toma su valor
let myName = 'Edgar'

myName === `Edgar` ? console.log(`Mi nombre es ${myName}`) : null


// 2 Imprime por consola un mensaje si el usuario y contrasena coincide con uno establecido

let usuario1 = `Edgar`
let contrasena = `1234`

let usuarioCorrecto = `Edgar`
let contrasenaCorrecta = `1234`

if (usuario1 === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    console.log("Acceso concedido. Bienvenido, Edgar")
} else {
    console.log("Acceso denegado. Usuario o contrasena incorrescots.")
}

// 3 Verifica si un numero es positivo, negativo o cero e imprime un mensaje

let numeroEvaluar = 5

if (numeroEvaluar > 0) {
    console.log("El numero es positivo")
} else if (numeroEvaluar < 0) {
    console.log("El numero es negativo")
} else if (numeroEvaluar === 0) {
    console.log("El numero es 0")
} else {
    console.log("No es numero entero, negativo o 0")
}

// 4 Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let edad = 16

if (edad >= 18) {
    console.log("La persona ya puede votar")
} else if (edad < 18) {
    let faltan = 18 - edad
    console.log(`La persona aún no puede votar, tiene ${edad} años, le faltan ${faltan} años`)
}

// 5 Usa el operador ternario para asignar el valor "adulto" o menor a una variable dependiendo la edad
edad >= 18 ? console.log("Es adulto") : console.log("Es menor de edad")


// 6 Muestra en que estación del año nos encontramos dependiendo el valor de una variable mes
let mes = "mayo"

const verano = ["junio", "julio", "agosto"]
const otono = ["septiembre", "octubre", "noviembre"]
const invierno = ["diciembre", "enero", "febrero"]
const primavera = ["marzo", "abril", "mayo"]

if (verano.includes(mes)) {
    console.log("Estamos en verano")
} else if (otono.includes(mes)) {
    console.log("Estamos en otoño")
} else if (invierno.includes(mes)) {
    console.log("Estamos en invierno")
} else if (primavera.includes(mes)) {
    console.log("Estamos en primavera")
} else {
    console.log ("Mes incorrecto")
}


// 7 Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

/*
enero, marzo, mayo, julio, agosto, octubre, diciembre tienen 31 dias
febrero 28 dias
abril, junio, septiembre, noviembre tienen 30 dias
*/

const mesesDe31Dias = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembr"]
const mesesDe30Dias = ["abril", "junio", "septiembre", "noviembre"]
const mesDe28Dias = "febrero"

if (mesesDe31Dias.includes(mes)) {
    console.log("El mes tiene 31 días")
} else if (mesesDe30Dias.includes(mes)) {
    console.log("El mes tiene 30 días")
} else if (mesDe28Dias.includes(mes)) {
    console.log("El mes tiene 28 o 29 días dependiendo si el año es biciesto")
} else {
    console.log("El mes es incorrecto")
}


// switch

// 8 Usa un switch para imprimir un mensaje de saludo diferente dependeindo del idioma
let idioma = "Portugues"
let saludo

switch (idioma) {
    case "Ingles":
        saludo = "Hello"
        break
    case "Japones":
        saludo = "Konichiwa"
        break
    case "Aleman":
        saludo = "Hallo"
        break
    case "Espanol":
        saludo = "Hola"
        break
    case "Portugues":
        saludo = "Oi"
        break

    default:
        saludo = "Idioma incorrescto"
        break;
}

console.log(saludo)

// 9 Usa un switch para hacer de nuevo el ejercicio 6
// Muestra en que estación del año nos encontramos dependiendo el valor de una variable mes

let month = "mayo"


switch (month) {
    case "diceimbre":
    case "enero":
    case "febrero":
        console.log("Estamos en invierno")
        break

    case "marzo":
    case "abril":
    case "mayo":
        console.log("Estamos en primavera")
        break

    case "junio":
    case "julio":
    case "agosto":
        console.log("Estamos en verano")
        break

    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Estamos en otoño")
        break

    default:
        saludo = "Mes incorrescto"
        break;
}



// 10 Usa un switch para hacer de nuevo el ejercicio 7
// Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
/*
enero, marzo, mayo, julio, agosto, octubre, diciembre tienen 31 dias
febrero 28 dias
abril, junio, septiembre, noviembre tienen 30 dias
*/

switch (month) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes tiene 31 días")
        break

    case "marzo":
    case "abril":
    case "febrero":
    case "mayo":
        console.log("El mes tiene 30 días")
        break

    case "febrero":
        console.log("El mes tiene 28 o 29 dias dependiendo si es biciesto")
        break

    default:
        saludo = "Mes incorrescto"
        break;
}