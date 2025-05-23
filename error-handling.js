// Exepciones


// produce una exception
let myObject

// trtamiento de errores

// try catch

try {
    // codigo que intenta ejecutar
    console.log(myObject.email) 
    console.log("finaliza la ejecucion sin errores") 
} catch {
    // bloque de error
    console.log("Se ha producido un error")
}

// captura de errores

try {
    // codigo que intenta ejecutar
    console.log(myObject.email)  
} catch (error) {
    // bloque de error
    console.log("Se ha producido un error", error.message)
}


// finally

try {
    // codigo que intenta ejecutar
    console.log(myObject.email)  
} catch (error) {
    // bloque de error
    console.log("Se ha producido un error", error.message)
} finally {
    console.log("Este codigo se ejecuta siempre")
}

// throw
// throw new Error("Se ha producido un error")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number" ) {
        throw new Error("Esta operacion solo suma numeros")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operacion solo suma numeros enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroInetgerError("Se esta intentando sumar cero")
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    console.log(sumIntegers(5, "10"))
    console.log(sumIntegers("5", "10"))

} catch (error) {
    console.log("Se ha producido un error:", error.message)
}


// capturar varios tipos de errores


try {
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (sumIntegers instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
    
}

// crear exepciones personalizadas

class SumZeroInetgerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}






