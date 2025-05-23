// Arrays


console.log(myArray)

let arrayDos = ["Edgar", "Ramos", "Devgar", 32, true]
console.log(arrayDos)

myArray[1] = 4
console.log(myArray)

//Push y pop

// Push agreaga elementos despues de los que ya estaban
myArray.push("Edgar")
myArray.push("Ramos")
myArray.push("Devgar")
myArray.push(32)
console.log(myArray)


myArray.pop() // elimina el ultimo elemento del array
console.log(myArray)


//shift elimina el primer elemento del arreglo
myArray.shift()
console.log(myArray)


// unshift agrega elementos al primer elemento del array
myArray.unshift("Holi")
console.log(myArray)

// lenght

console.log(myArray.length)
 
// clear
myArray = []
console.log(myArray)

/*
slice
guardamos en un nuevo arreglo la parte a recortar 
0, 3 y 4 se eliminan myArray.slice(1, 3)
se imprime el nuevo arreglo recortado 
imprime "Ramos", "Devgar"
*/
myArray.push("Edgar", "Ramos", "Devgar", 32, true)
let myNewArray = myArray.slice(1, 3)
console.log(myArray)
console.log(myNewArray)


/*
splice 
elimina el rango de elemtos seleccionados 1, 2, 3 que corresponden a "Ramos", "Devgar", 32
array.splice(inicio , cantidad)
*/
myArray.splice(1, 3)
console.log(myArray)
