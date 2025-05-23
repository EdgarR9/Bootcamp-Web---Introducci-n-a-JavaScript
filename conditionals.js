/* Operador Ternario
se usan cuando es algo simple a evaluar
*/
let age = 37

/*
cambia el if por ?
cambia else por :
evaluamos si age es igual a 37 o no
el valor se asigna a la variable constante message
imprime el valor de message
*/ 
const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break;

    default:
        dayName = "Numero de dia incorrecto"
        break;
}

console.log(dayName)