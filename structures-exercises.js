// 1 Crea un array que almacene 5 animales

let animals = ["Leon", "Tigre", "Camello", "Delfin", "Oso"]
console.log(animals)

// 2 Añade dos más. Uno al principio y otro al final
animals.unshift("Girafa")
animals.push("Gacela")
console.log(animals)

// 3 Elimina el que se encuentra en tercera posición
animals.splice(3 , 1)
console.log(animals)

// 4 Crea un set que almacene 5 libros
let books = new Set()
books = new Set(["El principito", "MobyDick", "Van Gogh", "El señor de los anillos", "It"])
console.log(books)

// 5 Añande 2 más. Uno de ellos repetido
books.add("Don Quijote")
books.add("Código Da Vinci")
console.log(books)

// 6 elimina uno concreto de tu elección 
books.delete("It")
console.log(books)

// 7 Crea un mapa que asocie el número del mes a su nombre

let months = new Map()

months = new Map([
    ["Enero", 1],
    ["Febrero", 2],
    ["Marzo", 3],
    ["Abril", 4],
    ["Mayo", 5],
    ["Junio", 6],
    ["Julio", 7],
    ["Agosto", 8],
    ["Septiembre", 9],
    ["Octubre", 10],
    ["Noviembre", 11],
    ["Diciembre", 12]
])

console.log(months)

// 8 Comprueba si el mes número 5 existe en el map e imprime su valor
for (let [mes, numero] of months) {
  if (numero === 5) {
    console.log(`El mes número 5 es: ${mes}`);
    break;
  }
}

// 9 Añande al mapa una clave con un array como que almacene los meses de verano
months.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(months.get("Verano"))


// 10 Crea un array transformalo a un Set y almacénalo en un Map

let zoo = ["murcielago", "capivara", "serpiente", "mandril", "iguana"]
console.log("Arreglo original:", zoo)

//convertir de array a set 
let zooSet = new Set(zoo)
console.log("Convirtiendo a Set:", zooSet)


// Paso 3: Almacenar el Set en un Map
// Usamos una clave como "animales" para guardar el Set completo
let zooMap = new Map();
zooMap.set("animales", zooSet);

// Mostrar el Map
console.log("Map con el Set dentro:", zooMap);