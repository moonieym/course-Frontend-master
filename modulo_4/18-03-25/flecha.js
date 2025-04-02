const calculateArea = (width, height) => {
    let base = width;   //Declara base con let
    const multiplier = 2;   //Declara multiplier con const
    return base * height * multiplier;
};

console.log(calculateArea(5, 10));  //Cambia los valores para probar diferentes areas

