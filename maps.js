// mapas
// se compone de llave valor no se pueden poner valores repetidos igual que en set

let myMap = new Map()

// inicializar
myMap = new Map([
    ["name", "Edgar"],
    ["email", "edo_skate@hotmail.com"],
    ["age", 32]
])

console.log(myMap)

// metodos y propiedades

// set para actualizar o agregar
myMap.set("alias", "devgar")
console.log(myMap)

// get solicita name
console.log(myMap.get("name"))

// has para ver si existe, devuelve boolean
console.log(myMap.has("name"))

// keys
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())


// size
console.log(myMap.size)


/* 

// delete
myMap.delete("name")
console.log(myMap)

// clear
myMap.clear()
console.log(myMap)

*/