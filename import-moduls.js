// importar modulos

import { add, PI, name, Circle } from "./export-moduls.js";

import defaultimport from "./export-moduls.js"

// funciones

add(5, 10)

// propiedades
console.log(PI)
console.log(name)



// importacion clase
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// importacion por defecto

console.log(defaultimport(5, 10))

// let MyClass = new defaultimport()
// myClass.func()


// proyecto modular

// import { MyImport } from "./export-moduls.js"

