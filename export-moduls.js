// exportacion de modulos

 export const add = (a, b) => {
   return a + b
 }

 console.log(add(5, 10))

 // propiedades

 export const PI = 3.1416
 export let name = "edgar"

 // clases

 export class Circle {

    constructor (radius){
      this.radius = radius
    }

    area(){
      return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
      return 2 * Math.PI * this.radius
    }
 }

  // exportacion por defecto: solo se usa cuando solo hay una propiedad a exportar
 
 export default function substract (a, b) {
   return a - b
  }
   

  /*

 export default class MyClass {

    func() {
      console.log(" ")
    }
 }

 */