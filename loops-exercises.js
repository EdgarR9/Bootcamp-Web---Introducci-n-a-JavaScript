// 1 Crea un bucle que imprima los numeros del 1 al 20

for (let i = 0; i <= 20; i++) {
    console.log(`${i}`)
}

// 2 Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado

let suma = 0 
for (let i = 0; i <= 100; i++) {
    suma += i
}

console.log(suma)

// 3 crea un bucle que imprima todos los numeros pares entre 1 y 50


for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) { // es par 
        console.log(i)
    }
    
}


// 4 dado que un array de nombres, usa un bucle para imprimir cada nombre en la consola 

let nombresFamilia = ["Hilda", "Karina", "Jony", "Edgar", "Elena", "Eliza"]

for (let valor of nombresFamilia) {
    console.log(valor)
}

// 5 Escribe un bucle que cuente el numero de vocales en una cadena de texto
let contador = 0 
let myString = 'Hola, Mundo'

for (let i = 0; i < myString.length; i++) {
    if ('aeiou'.includes(myString[i])) {
        contador++
    }
}

console.log(contador)

// 6 Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto
let array1 = [1, 3, 6, 7, 9, 4, 6]
let mult = 1 

for (let i = 0; i < array1.length; i++) {
    mult *= array1[i] 
}

console.log(mult)

// 7 Escribe un bucle que imprima la tabla de multiplicar del 5 
let cont = 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



// 8 usa un bucle para invertir una cadena de texto 
let str = "Hola Mundo";
let inversa = '';

for (let i = str.length - 1; i >= 0; i--) {
    inversa += str[i];
}

console.log(inversa);

// 9 usa un bucle para generar los 10 primeros numeros de la secuencia de fibbonacci

let n = 10;  // Primeros 10 números
let fib = [0, 1];  // Los dos primeros números de la secuencia

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2] // La fórmula de Fibonacci
}

console.log(fib)

// 10 dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo numeros mayores a 10

let array = [5, 12, 8, 22, 3, 15, 9, 18];
let mayoresA10 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        mayoresA10.push(array[i])
    }
}

console.log(mayoresA10)