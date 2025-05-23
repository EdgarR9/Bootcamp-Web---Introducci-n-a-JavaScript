// 1 crea un objeto con 3 propiedades

let person = {
    name: "Edgar",
    age: 32,
    ak: "devgar",
    mensaje: function () {
        console.log("Soy una funcion dentro de un objeto")
    }
    
}


// 2 accede y muestra su valor
console.log(person)

// 3 agrega una nueva propiedad

person.mail = "edo_skate@hotmail.com"
console.log(person)

//4 elimina las 3 primeras propiedades 
/*
delete person.name
delete person.age
delete person.ak
console.log(person)
*/

// 5 agrega una funcion e invocala

person.mensaje()

// 6 Itera las propiedades del objeto

for (let key in person) {
    console.log(key + ": " + person[key])
}

// 7 crea un objeto anidado

let pc = {
    name: "Hp",
    model: 3220,
    gb: 250,
    procesador: {
        name: "intel",
        type: "core i7"
    }
}

// 8 accede y muestra las propiedades anidadas

console.log(pc.procesador)

// 9 compeueba si los objetos creados son iguales

console.log(pc === person)

// 10 comprueba si dos propiedades son iguales

console.log(pc.name === person.name)