// 1 crea una funcion que reciba dos numeros y devuelva su suma 

const sum = (a, b) => {
    console.log(a + b)
}
sum(5, 4)

// 2 crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
const numeros = [5, 2, 8, 1, 10];

const arrayRec = () => {
    const numeroMayor = Math.max(...numeros)
    console.log(numeroMayor)
}
arrayRec(numeros)



// 3 crea una funcion que reciba un string y devuelva el numero de vocales que contiene
let myString = "Hola, estoy en una fiesta"

const stringReader = () => {
    console.log(myString.length)
}
stringReader(myString)

// 4 crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas

const stringToUpperCase = (stringToRead) => {
    console.log(stringToRead.toUpperCase())
}

stringToUpperCase(myString)

// 5 crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contraio
 function esPrimo(numero) {
  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si es divisible, no es primo
    }
  }

  return true; // Si no se encontró ningún divisor, es primo
}

console.log(esPrimo(5))

// 6 crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga elementos comunes entre ambos
let array1 = [1, 3, 6, 7, 9, 4, 6]
let array2 = [4, 7, 8, 9, 0, 2, 3, 5]


const comparaArrays = (arr1, arr2) => {
    let result = []
    let index = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result[index] = arr1[i]
                index++
            }
        }
    }
    return result
}
console.log(comparaArrays(array1, array2))

// 7 funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

const sumaDePares = (arr) => {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
        suma += arr[i] 
    }
    }
    return suma
}

console.log(sumaDePares(array1))

// 8 crea una funcion que reciba un arrray de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

const numerosElevados = (arr) => {
    let potencia = []
    for (let i = 0; i < arr.length; i++){
        potencia.push(arr[i] ** 2) 
    }
    return potencia
}

console.log(numerosElevados(array1))

// 9 crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const ordenaPalabras = (str) => {
    for (let i = 0; i < str.length; i++){
        return str.split(' ').reverse().join(' ')
    }
}


console.log(ordenaPalabras(myString))

// 10 crea una funcion que calcule el factorial de un numero dado

const factorial = (num) => {
    if (num < 0) return "No existe factorial de números negativos";
    let resultado = 1;

    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(factorial(5));
