// clases: crea plantillas de objeto 

class Person {
    constructor(name, age, mail) {
        this.name = name
        this.age = age
        this.mail = mail
    }
}

let person = new Person("Edgar", 32, "edo_skate@hotmail.com")
console.log(person) 

// en JS todo lo que no es un tipo de dato primitivo es un objeto

// valores por defecto

class DefaultPerson {
    constructor (name = "Sin nombre", age = 0 , mail = "Sin mail"){
        this.name = name
        this.age = age
        this.mail = mail
    }
}

let person3 = new DefaultPerson("Jon", 44, "aguilaj10@hotmail.com")
console.log(typeof person3) 
 
console.log(person3) 

// acceso a propiedades 

console.log(person3.mail)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, mail) {
        this.name = name
        this.age = age
        this.mail = mail
    }

    walk() {
        console.log("La persona camina")
    }
}

let person4 = new PersonWithMethod("Kari", 24, "krihm@gmmail.com")
person4.walk()


// Propiedades privadas
/*
Con la almoadilla o hash "#" se puede definir una propiedad privada
*/

class PrivatePerson {

    #bank

    constructor (name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson ("Kari", 24, "krihm@gmmail.com", "ERG20255663")
console.log(person5.bank)




// gettters y setters

class GetPerson {

    #name
    #age
    #alias

    constructor (name, age, alias) {
        this.#name = name
        this.#age = age
        this.#alias = alias
       
    }

    get name () {
        return this.#name
    }
   
}

let person6 = new GetPerson ("Kari", 24, "krihm@gmmail.com")
console.log(person6.name)

// Herencia


class Animal {
    constructor(name) {
        this.name = name
    }

    sound(){
        console.log("Emite un sonido")

    }
}

class Dog extends Animal {

    sound() {
        console.log("El perro ladra")
    } 


    run() {
        console.log("El perro corre")

    }
}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    sound(){
        console.log("El pez no emite sonido")
    }

    swim() {
        console.log("El pez nada")
    }
}




let myDog = new Dog("Roco")
myDog.run() 
myDog.sound()

let myFish= new Fish("Gold", 10)
myFish.swim() 
myFish.sound()



// metodos estaticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
    
}


console.log(MathOperations.sum(5, 10))


