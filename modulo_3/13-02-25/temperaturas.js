function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//calcular
console.log("24 grados Celsius en Fahrenheit es: " + celsiusAFahrenheit(24));
console.log("100 grados Fahrenheit en Celsius es: " + fahrenheitACelsius(100));
