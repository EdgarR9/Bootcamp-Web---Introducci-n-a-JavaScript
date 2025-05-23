// 1 captura una exepcion utilizando try catch

const dividir = (a, b) => {
  try {
    if (b === 0) {
        throw new Error ("No se puede dividir")
        }
        return a / b
  } catch (error) {
    console.log("Error:", error.message)
    return null
  }
}

console.log(dividir(10, 2))
console.log(dividir(10, 0))

// 2 captura una excepcion utilizando try catch y finally 

try {
  // Código que puede causar un error
  let resultado = 10 / 0;
  console.log("Resultado:", resultado);
  
  // Fuerza un error para mostrar el catch
  throw new Error("Algo salió mal");

} catch (error) {
  // Captura y maneja el error
  console.log("Ocurrió un error:", error.message);

} finally {
  // Se ejecuta siempre, ocurra o no un error
  console.log("Esto siempre se ejecuta.");
}


// 3 lanza una exepcion generica

try {
  // Lanza una excepción genérica (tipo string)
  throw "Se produjo un error genérico";
  
} catch (error) {
  // Captura y muestra el error
  console.log("Error capturado:", error);

} finally {
  // Siempre se ejecuta
  console.log("Bloque finally ejecutado.");
}

// 4 crea una exepcion personalizada 
// 5 lanza una exepcion personalizada

class MiExcepcionPersonalizada extends Error {
  constructor(mensaje) {
    super(mensaje); // Llama al constructor de Error
    this.name = "MiExcepcionPersonalizada"; // Nombre personalizado
  }
}


function realizarOperacion(valor) {
  if (valor < 0) {
    throw new MiExcepcionPersonalizada("El valor no puede ser negativo.");
  }
  return Math.sqrt(valor);
}


try {
  const resultado = realizarOperacion(-5);
  console.log("Resultado:", resultado);
} catch (error) {
  if (error instanceof MiExcepcionPersonalizada) {
    console.error("Ocurrió un error personalizado:", error.message);
  } else {
    console.error("Error desconocido:", error);
  }
}




// 6 lanza varias exepciones segun una logica definida

// 🔸 Excepciones personalizadas
class ValorNegativoError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ValorNegativoError";
  }
}

class TipoInvalidoError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "TipoInvalidoError";
  }
}

class ValorDemasiadoGrandeError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ValorDemasiadoGrandeError";
  }
}

// 🔸 Función que lanza diferentes excepciones
function procesarNumero(valor) {
  if (typeof valor !== 'number') {
    throw new TipoInvalidoError("El valor debe ser un número.");
  }

  if (valor < 0) {
    throw new ValorNegativoError("El valor no puede ser negativo.");
  }

  if (valor > 1000) {
    throw new ValorDemasiadoGrandeError("El valor es demasiado grande.");
  }

  return Math.sqrt(valor);
}

// 🔸 Ejemplo de uso
const valoresDePrueba = [25, -10, "texto", 5000];

for (const valor of valoresDePrueba) {
  try {
    const resultado = procesarNumero(valor);
    console.log(`Raíz cuadrada de ${valor}: ${resultado}`);
  } catch (error) {
    if (error instanceof ValorNegativoError) {
      console.error("Error: Valor negativo →", error.message);
    } else if (error instanceof TipoInvalidoError) {
      console.error("Error: Tipo inválido →", error.message);
    } else if (error instanceof ValorDemasiadoGrandeError) {
      console.error("Error: Valor demasiado grande →", error.message);
    } else {
      console.error("Error desconocido:", error.message);
    }
  }
}


// 7 captura varias expeciones en un mismo try catch

// 🔸 Función con múltiples validaciones y throw de errores personalizados
function procesarValor(valor) {
  if (typeof valor !== 'number') {
    throw new TipoInvalidoError("El valor debe ser un número.");
  }

  if (valor < 0) {
    throw new ValorNegativoError("El valor no puede ser negativo.");
  }

  if (valor > 1000) {
    throw new ValorDemasiadoGrandeError("El valor excede el límite permitido.");
  }

  return Math.sqrt(valor);
}

// 🔸 Bloque que captura todas las excepciones en el mismo try...catch
try {
  const entrada = -50; // Cambia este valor para probar distintos casos
  const resultado = procesarValor(entrada);
  console.log("Resultado:", resultado);
} catch (error) {
  if (error instanceof ValorNegativoError) {
    console.error("❌ Valor negativo:", error.message);
  } else if (error instanceof TipoInvalidoError) {
    console.error("❌ Tipo inválido:", error.message);
  } else if (error instanceof ValorDemasiadoGrandeError) {
    console.error("❌ Valor demasiado grande:", error.message);
  } else {
    console.error("❌ Error desconocido:", error.message);
  }
}




// 8 crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 🔸 Lista de valores a intentar convertir a float
const valores = ["123.45", "abc", true, null, undefined, "98.6", {}, [], "NaN", "45.0px"];

// 🔸 Función para verificar si un valor puede ser convertido a número válido
function convertirAFloat(valor) {
  const resultado = parseFloat(valor);

  // Verificamos si el resultado es un número válido
  if (isNaN(resultado)) {
    throw new Error(`No se puede convertir "${valor}" a float.`);
  }

  return resultado;
}

// 🔸 Bucle que procesa cada valor
for (const valor of valores) {
  try {
    const resultado = convertirAFloat(valor);
    console.log(`✅ "${valor}" convertido a float: ${resultado}`);
  } catch (error) {
    console.error(`❌ Error al convertir "${valor}": ${error.message}`);
  }
}



// 9 crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una exepcion personal

// 🔸 Crear una excepción personalizada
class PropiedadFaltanteError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "PropiedadFaltanteError"; // Nombre de la excepción
  }
}

// 🔸 Función para verificar si un objeto tiene una propiedad específica
function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new PropiedadFaltanteError(`La propiedad "${propiedad}" no existe en el objeto.`);
  }
  return true; // Si la propiedad existe, devuelve true
}

// 🔸 Ejemplo de uso
const persona = {
  nombre: "Juan",
  edad: 30
};

try {
  // Verificamos si el objeto tiene la propiedad "direccion"
  verificarPropiedad(persona, "direccion");
  console.log("La propiedad 'direccion' existe en el objeto.");
} catch (error) {
  if (error instanceof PropiedadFaltanteError) {
    console.error("❌ Error:", error.message);
  } else {
    console.error("Error desconocido:", error.message);
  }
}

try {
  // Verificamos si el objeto tiene la propiedad "nombre"
  verificarPropiedad(persona, "nombre");
  console.log("La propiedad 'nombre' existe en el objeto.");
} catch (error) {
  if (error instanceof PropiedadFaltanteError) {
    console.error("❌ Error:", error.message);
  } else {
    console.error("Error desconocido:", error.message);
  }
}











// 10 crea una funcion que realice reintentos en caso de error hasta un maximo de 10

// 🔸 Función para realizar reintentos
async function realizarReintentos(funcion, maxReintentos = 10) {
  let intento = 0;
  let resultado = null;
  let error = null;

  while (intento < maxReintentos) {
    intento++;
    try {
      // Intentamos ejecutar la función
      resultado = await funcion();
      console.log("Intento", intento, "éxitos:", resultado);
      return resultado;
    } catch (e) {
      // Si hay un error, guardamos el error y seguimos reintentando
      error = e;
      console.log(`Intento ${intento} fallido: ${error.message}`);
    }
  }

  // Si llegamos al máximo de intentos sin éxito, lanzamos el último error
  throw new Error(`Máximo de intentos alcanzado. Último error: ${error.message}`);
}

// 🔸 Función que simula una tarea que puede fallar
function tareaQuePuedeFallor() {
  const chanceDeError = Math.random(); // Generamos un valor aleatorio entre 0 y 1
  if (chanceDeError < 0.7) { // Hay un 70% de probabilidades de que falle
    throw new Error("Error al intentar realizar la tarea.");
  }
  return "Tarea completada con éxito";
}

// 🔸 Ejemplo de uso
(async () => {
  try {
    const resultadoFinal = await realizarReintentos(tareaQuePuedeFallor, 10);
    console.log("Resultado final:", resultadoFinal);
  } catch (error) {
    console.error("Error final:", error.message);
  }
})();

