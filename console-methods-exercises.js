// 1 crea una funcion que utilice error correctamente

const errorFunc = () => {
  console.error("Mensaje dentro de una funcion que marca un error")
}

errorFunc()

// 2 crea una funcion que utilice warn correctamente

const warnFunc = () => {
  console.warn("Esta es una funcion que utiliza warn correctamente")
}

warnFunc()

// 3 crea una funcion que utilice ingo correctamente

const infoFunc = () => {
  console.info("Este es un mensaje informativo dentro de una funcion")
}

infoFunc()

// 4 Utiliza table 

let vehiculo = [
    {model: "Sonic", brand: "Chevrolet", color: "blue"},
     {model: "Jetta", brand: "VW", color: "red"}
]

console.table(vehiculo)

// 5 Utiliza group

console.group("Vehiculos")
console.log("Sonic azuly")
console.log("Jetta: rojo")
console.groupEnd()

// 6 utiliza time



console.time("Tiempo de ejecucion 2")

for (let i = 0; i < 1000; i++) {
    
    
}

console.timeEnd("Tiempo de ejecucion 2")

// 7 valida con assert si un numero es positivo
let numero = 5
console.assert(numero < 0, "El numero es positivo")  
console.assert(numero > 0, "El numero es negativo")

// 8 utiliza count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

// 9 utiliza trace

const funcA = () => {
    funcB()
}

const funcB = () => {
  console.trace("Seguimiento de la ejeciucion")
}

funcA()

// 10 utiliza clear

 // console.clear()
