// 1 crea una clase que reciba 2 propiedades

// 2 Anade un metodo a la clase que utilice las propiedades

// 3 muestra los valores de las propiedades e invoca a la funcion

//  4 anade un metodo estatico a la primera clase
class Gato{
    
    constructor (name, weight) {
        this.name = name
        this.weight = weight
    }

    sound () {
        console.log(`El gato ${this.name} mahulla y pesa ${this.weight}`)
    }

    static crearSaludo(nombrePersona) {
    return `Hola soy ${nombrePersona} y tengo un gato`
  } 

}

let myCat = new Gato("Timi", 20)
myCat.sound()

// 5 haz uso del metodo estatico
console.log(Gato.crearSaludo("Edgar"))

// 6 Crea una clase que haga uso de herencia

class Figura {
    
    constructor (name) {
        this.name = name

    }
    
    describir (){
        console.log(`Soy una figura llamada ${this.name}.`)
    }

}

let fig = new Figura("cuadrado")





class Cuadrado extends Figura {

    constructor (lado) {
        super("Cuadrado")
        this.lado = lado
    }

    area (){
        return this.lado * this.lado
    }

    describir () {
        console.log("Metodo reescrito")
    }
}

let figura1 = new Cuadrado(4)

figura1.describir()
console.log(`Área del cuadrado: ${figura1.area()}`)



// 7 crea una clase que haga uso de getters y setters
// 8 modifica la clase con getters y setters para que se usen propiedades privadas
// 9 utiliza los get y set y muestra sus valores
class GetSetPerson {

    #name
    #age
    #bank

    constructor (name, age) {
        this.#name = name
        this.#age = age
        this.#bank = this.#bank
    }

    get name () {
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}

let person6 = new GetSetPerson ("Edgar", 32, "EDGR2357")

console.log(person6.name)
person6.bank = "new EDGR2357"
console.log(person6)






// 10 sobreescribe un metodo de una clase que utilice herencia

console.log(figura1.describir())