// loops o bucles

// for
for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}


const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`hola ${i}`)
    i++
}

// do while 

i = 6
do {
    console.log(`hola ${i}`)
    i++
} while (i < 5) {
    
}

// for of
// recorrer algo que sea iterable

let myArray = [1, 2, 3, 4]


mySet = new Set(["Edgar", "Ramos", "Devgar", 32, true, "edo_skate@hotmail.com"])


myMap = new Map([
    ["name", "Edgar"],
    ["email", "edo_skate@hotmail.com"],
    ["age", 32]
])


myString = "Hola JavaScript"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}


// buenas practicas

// break y continue

for (let i = 0; i < 10; i++){
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}












