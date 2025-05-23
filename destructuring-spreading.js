

 let myArray = [1, 2, 3, 4]


 let person = {
    name: "Edgar",
    age: 32,
    alias: "devgar"
}

let myValue = myArray[1]
console.log(myValue)

 // Destructuracion: es una sintaxys que nos permite extraer valores de arrays o de objetos y asignarlos a variables de manera concisa

// Sintaxys en Arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) 

// Sintaxys arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) 

// ignorar elementos arrays
let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// sintaxys objects: los objetos se destructuran con llaves no corchetes 

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// sintaxys de objetos con valores predeterminados

// let {name2, age2, alias2, email = "edo_skate@hotmail.com"} = person
// console.log(name)
// console.log(age)
// console.log(alias)
// console.log(email)

// sintaxys objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3, } = person
console.log(name3)
console.log(age3)
console.log(alias3)


let person3 = {
    name: "jon",
    age: 44,
    alias: "aguilaj10",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        name: "programador",
        exp: 15,
        work: function () {
        console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}

let {name: name4, job: {name : jobName} } = person3
console.log(name4)
console.log(jobName)


// spreading o propagacion (...)

let myArray2 = [...myArray]

console.log(myArray2)

let myArray3 = [...myArray, 5 , 6]
console.log(myArray3)



// combinacion de arrays

let myArray4 = [...myArray2, myArray3]

console.log(myArray4)

// sintaxys objects 

let person4 = {...person, email: "edo_skaye@hotmail.com"}
console.log(person4)

// copia de objectos

let person5 = {...person}
console.log(person5)












