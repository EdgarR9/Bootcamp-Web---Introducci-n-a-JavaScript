// Set
// un listado de datos ordenados en el cual no se tiene acceso directo a los indices y no admite duplicados exactos

// Declaracion
let mySet = new Set()

console.log(mySet)

// inicializar
// es importante inicializar con parentesis () y corchetes []
mySet = new Set(["Edgar", "Ramos", "Devgar", 32, true, "edo_skate@hotmail.com"])

console.log(mySet)


// Metodos comunes

// add y delete
mySet.add("https://edgarr9.github.io/CV-HTML-CSS/cv-html")
console.log(mySet)

mySet.delete("https://edgarr9.github.io/CV-HTML-CSS/cv-html")
console.log(mySet)


// regresa un boolean indicando si es que fue borrado el elemento
console.log(mySet.delete("Devgar"))
console.log(mySet)


console.log(mySet.has("Edgar"))

// size

console.log(mySet.size)

//convertir de set a array
let myArray = Array.from(mySet)
console.log(myArray)
//convertir de array a set 
mySet = new Set(myArray)
console.log(mySet)
