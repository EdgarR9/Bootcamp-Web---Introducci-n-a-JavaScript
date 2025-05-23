// cosole methods

// error

console.error("Este ese un mensaje de error")
// console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida"))


// console warn

console.warn("Este es un mensaje de advertencia")

// info

console.info("Este es un mensaje de informacion adicional")

// table 

let data = [
    ["Edgar", 32],
    ["jon", 44]
]

console.table(data)

data = [
    {name: "Edgar", age: 32},
     {name: "jon", age: 44}
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Edgar")
console.log("Edad: 32")
console.groupEnd()

console.log("scajnghb")

// time: al iniciar y terminar se tiene que poner el mismo mensaje 
console.time("Tiempo de ejecucion 1")
for (let i = 0; i < 1000; i++) {
    
    
}

console.time("Tiempo de ejecucion 2")

for (let i = 0; i < 1000; i++) {
    
    
}

console.timeEnd("Tiempo de ejecucion 1")

for (let i = 0; i < 1000; i++) {
    
    
}

console.timeEnd("Tiempo de ejecucion 2")

// assert: muestra un mensaje de error si lo que evalua es falso

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count 

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

// trace

const funcA = () => {
    funcB()
}

const funcB = () => {
  console.trace("Seguimiento de la ejeciucion")
}

funcA()

// clear: limpia la consola 

console.clear()