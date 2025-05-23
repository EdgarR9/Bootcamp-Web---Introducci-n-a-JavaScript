// 1 usa destructuracion para extraer los dos primeros elementos de un array

let myArray = [1,2,3,4,]
let arrayDes = [7,8,9]


let [arrayDes1, arrayDes2] = arrayDes
console.log(arrayDes1, arrayDes2)

// 2 usa destructuracion en un array y asigna un valor predeterminado a una variable


let [arrayDes3 = 0, arrayDes4 = 0, arrayDes5 = 0, arrayDes6 = 0] = arrayDes


console.log(arrayDes3)
console.log(arrayDes4)
console.log(arrayDes5)
console.log(arrayDes6)

// 3 usa destructuracion para extraer dos propiedades de un objeto

let person = {
    name: "Edgar",
    age: 32,
    alias: "devgar",
    mail: "edo_skate@hotmial.com",

    job: {
        name: "unemployee",
        exp: "4 años"
    }

}

let {name, age} = person
console.log(name)
console.log(age)

// 4 usa destructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes

let {name: name2, age: age2} = person
console.log(name2)
console.log(age2)

// 5 usa destructuracion para extraer dos propiedades de un objeto anidado

let {name: name3, age: age3, job : {name: jobname, exp: experiencia} } = person
console.log(name3)
console.log(age3)
console.log(jobname)
console.log(experiencia)

// 6 usa propagacion para combinar dos arrays en uno nuevo

let arrayCopy2 = [...arrayDes, ...myArray]
console.log(arrayCopy2)



// 7 usa propagacion para crear una copia de un array

let arrayCopy = [...arrayDes]
console.log(arrayCopy)

// 8 usa propagacion para crear una copia de un objeto

let obj1 = {
    name: "objeto1",
    size: "4 elementos",
    creationDate: "5/19/2025",
    type: "testing"
}

let obj2 = {
    name: "objeto2",
    size: "3 elementos",
    type: "deploy"
}

let obj3 = {...obj1, ...obj2}
console.log(obj3)

// 9 usa propagacion para crear una copia de un objeto

let obj4 = {...obj1}
console.log(obj4)

// 10 combina desestructuracion y propagacion