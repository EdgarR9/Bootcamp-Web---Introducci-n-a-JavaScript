// funciones 
// bloque de codigo para realizar una tarea especifica


function myFunc() {
    console.log("Hola Funcion")
} 


for (let i = 0; i < 5; i++) {
    myFunc()
}


function myFuncWithParams (name) {
    console.log(`hola ${name}`)
    
}

myFuncWithParams("Edgar")

// funciones anonimas
// no tienen nombre definido

const myFunc2 = function(name) {
    console.log(`hola ${name}`)
}

myFunc2("Elena")

// Arrow functions
// se asignana a una variable o a una constante

const myFunc3 = (name) => {
    console.log(`hola ${name}`)
}

myFunc3("Eliza")

const myFunc4 = (name) => console.log(`hola ${name}`)
    
myFunc4("Jony")

const sum = (a, b) => console.log(a + b)
sum(5, 4)

const defaultSum = (a = 0, b = 0) => console.log(a + b)
defaultSum(5)

const mult = (a = 0, b = 0) => {return a * b}
let result = mult(5, 10)
console.log(result)


// funciones anidadas

function extern() {
    function intern(){
        console.log("funcion interna")
    }
    intern()
}

extern()


// funciones de orden superior

function applyFuntion(func, param) {
    func(param)
}

applyFuntion(myFunc4, "Funcion de orden superior")

// forEach
// funcion que nos sirve para ejecutar bucles asociados a elmentos iterables

let myArray = [1, 2, 3, 4]

mySet = new Set(["Edgar", "Ramos", "Devgar", 32, true, "edo_skate@hotmail.com"])


myMap = new Map([
    ["name", "Edgar"],
    ["email", "edo_skate@hotmail.com"],
    ["age", 32]
])

// forma simple para iterar arrays, set, y map
myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))
