// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

const oneEuroIs = {
    JPY: 156.5,
    USD: 1.07,
    GBP: 0.87,
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// DOLAR A YEN
const fromDollarToYen = (valueInDollar) => {
    const euroValue = valueInDollar / oneEuroIs.USD; 
    return euroValue * oneEuroIs.JPY; 
};

// YEN A LIBRA
const fromYenToPound = (valueInYen) => {
    const euroValue = valueInYen / oneEuroIs.JPY; 
    return euroValue * oneEuroIs.GBP; 
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  };
