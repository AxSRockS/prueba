// var nombre = "Andrés"
// var edad = 60

// if (edad < 12) {
//     console.log(nombre, ' es un niño')
// } else if ((edad > 11) && (edad < 18)) {
//     console.log(nombre, ' es un adolecente')
// } else if ((edad > 17) && (edad < 60)) {
//     console.log(nombre, ' en un adulto')
// } else {
//     console.log(nombre, ' es un asiano')
// }

/****************************** */
/*Operador ternario*/

// var nombre = 'Andrés'
// var edad = 17

// edad >= 18 ? console.log(nombre, ' es mayor de edad') :
//     console.log(nombre, ' es menor de edad')


/***************************************** 
Sentencia Switch 
******************************************/

// var meses = 4;
// switch (meses) {
//     case 1:
//         console.log('Enero');
//         break;
//     case 2:
//         console.log('Febrero');
//         break;
//     case 3:
//         console.log('Marzo');
//         break
//     case 4:
//         console.log('Abril');
//         break
//     default:
//         console.log('Mes no considerado')
// }

/***************************************** 
Sentencias For

******************************************/

// for (var i = 0; i <= 10; i++) {
//     console.log(i)

// }


// /***************************************** 
// Sentencias While

// ******************************************/

// var j = 0
// while (j <= 10) {
//     console.log(j)
//     j++
// }

// /***************************************** 
// Sentencias do..while

// ******************************************/

// var x = 0
// do {
//     x++
//     console.log(x)
// } while (x <= 10)

// var edad = '10' // JS lo declara como valor falso

// if (edad){
//     console.log('Variable esta definida')
// }else{
//     console.log('Variable no definida')
// }

// // Operadores de igualdad

// if(edad === 10){
//     console.log('Variable con coersión')
// }else {
//     console.log('Variable sin coersión')
// }

// Ejercicio
/*
* Tienes dos alumnos, Pablo y Maria
*Pablo tiene las siguientes notas en el curso de JS: 14, 8 16.
*Maria tiene las siguientes notas en el mismo curso: 12, 18, 10.
*
* Calcular el promedio de cada alumno, ademas inidicar quien tiene el promedio
*superior, e indicar si el alumno esta aprobado, para el su promedio
*deber ser superior a 13 
*/

var Pablo = [14, 8, 16]
let sumaPablo = 0;
var Maria = [12, 18, 10]
let sumaMaria = 0;


for (let i = 0; i < Pablo.length; i++) {
    sumaPablo += Pablo[i];
}
console.log(sumaPablo)

for (let i = 0; i < Maria.length; i++) {
    sumaMaria += Maria[i];
}
console.log(sumaMaria)

let promedioPablo = sumaPablo / 3
console.log('El promedio de Pablo es: ', promedioPablo)

let promedioMaria = sumaMaria / 3
console.log('El promedio de Maria es: ', promedioMaria)

if (promedioPablo > 13) {
    console.log('Pablo esta aprobado')
} else {
    console.log('Pablo a desaprobado')
}

if (promedioMaria > 13) {
    console.log('Maria esta aprobada')
} else {
    console.log('Maria a desaprobado')
}

if (promedioPablo > promedioMaria) {
    console.log('Pablo tiene el mejor promedio')
} else if(promedioMaria > promedioPablo){
    console.log('Maria tiene el mejor promedio')
} else {
    console.log('Pablo y Maria tienen el mismo promedio')
}