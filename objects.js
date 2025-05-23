//objetos

// sintaxis

let person = {
    name: "Edgar",
    age: 32,
    ak: "devgar"
}


//acceso a propiedades
console.log(person.name)

// notacion de corchetes

console.log(person["name"])

//mdificacion

person.name = "Edgar Ramos"
console.log(person.name)
console.log(typeof person.name)
console.log(typeof person.age)


// eliminar

delete person.age
console.log(person)

// nueva propiedad

person.email = "edo_skate@hotmail.com"
console.log(person)

person["age"] = 32
console.log(person)

// metodos (funciones)

let person2 = {
    name: "Elena",
    age: 5,
    walk: function () {
        console.log("La persona camina")
    }
}


person2.walk()

// anidar objetos

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

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// igualdad de objects

let person4 = {
    name: "Edgar Ramos",
    age: 32,
    ak: "devgar"
}

console.log(person.name == person4.name)

//iteracion

for (let key in person4) {
    console.log(key + ": " + person4[key])
    
}


// funnciones como objetos (constructor)

function Person(name, age) { // deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person ("Edgar", 32)
console.log(person5)

console.log(typeof person4)
console.log(typeof person5)










