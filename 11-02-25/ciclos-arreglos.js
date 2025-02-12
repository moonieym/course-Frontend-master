let calificaciones = [9.0,8.1,7.6,6.0,9.5,8.,8.9,.5];

// calcular promedio del grupo

for(let i = 0;i<calificaciones.length;i++) {
    sumatoria = sumatoria + calificaciones[i];
    // sumatoria += calificaciones[i]
}
console.log("promedio")
console.log(sumatoria / calificaciones.length);

// equivalencia sin for

// let calificaciones = [9.0,8.1,7.6,6.0,9.5,8.,8.9,.5];
// let sumatoria = 0;

if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[0];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[1];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[2];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[3];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[4];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[5];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[6];
    i++
}
if(i<calificaciones.length) {
    sumatoria = sumatoria + calificaciones[7];
    i++
}


