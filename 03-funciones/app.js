// function bienvenido() {
//     console.log('Bienvenido a mi primera function')
// }
// bienvenido()

// function bienvenidos() {
//     return 'Bienvenidos guardaro en variable'
// }
// let mensaje = bienvenidos()
// // console.log(mensaje)

// // Partes de una funcion
// //entradas (parametos), codigo, salida

// function cuadradoNumero(num) {
//     var resultado = num * num
//     return resultado
// }
// var num = 5
// var valor = cuadradoNumero(num)
// // console.log(valor)


// // FUncion que convierte de grados Fahrenheint a Celcius

// // 32F = 0C, 68F = 20C.
// // c = (F - 32) * 5/9

// function convertirFAHaCelsius(gradoFah) {
//     var celsius = (gradoFah - 32) * 5 / 9
//     return celsius
// }

// var tempUno = convertirFAHaCelsius(32)
// var tempDos = convertirFAHaCelsius(68)
// // console.log(tempUno)
// // console.log(tempDos)

// //Calcular la edad de una persona sabiendo el año de nacimiento


// function edadCalcular(anoNacimineto) {
//     return 2022 - anoNacimineto
// }
// var edad1 = edadCalcular(1994)
// var edad2 = edadCalcular(1990)
// var edad3 = edadCalcular(2001)
// // console.log(edad1)
// // console.log(edad2)
// // console.log(edad3)

// // Ejercicio de codificación 3

// /*
// * Calcular cuantos años le falta a una persona para que se jubile.
// * Una persona se jubila a los 65 años
// * Enviar como datos a la funcion su año de nacimineto y su nombre
// */

// // Primer manera de resolver
// function jubilacion(edadJubilacion) {
//     var Andres = 1994 + edadJubilacion
//     return Andres
// }
// var anosParaJubilarme = jubilacion(65) - 2022
// console.log(anosParaJubilarme)

// //Segunda manera de resolver
// function calcularTiempoJubilacion(edadNacimiento, nombre) {
//     var edad = 2022 - edadNacimiento
//     var anoJubilacion = 65 - edad
//     console.log(nombre + ' le faltan ' + anoJubilacion + ' para su jubilacion')

// }

// calcularTiempoJubilacion(1994, 'Andrés')


/**********************
 * Funciones como expresion
 */

var prueba = function () {
    console.log('Mensaje de prueba')
}
prueba()



/******************
 * Implementar una funcion que nos permita evaluar el 
 * porcentaje de respuestas positivas y negativas de un examen
 * La funcion debe recibir el nombre, y la cantidad de 
 * respuestas positivas y negativas
 * 
 * La function debe calcular el porcentaje que representa cada 
 * tipo de respuesta, en una base de 100 preguntas
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(< 45%)
 * 
 * Solucion
 */


var calcularScore = function (nombre, pos, neg) {
    var porPos = (pos / 100) * 100
    var porNeg = (neg / 100) * 100

    if (porPos > 90) {
        return nombre + 'tiene el score A'
    } else if (porPos >= 70 ) {
        return nombre + ' tiene el score B'
    } else if (porPos >= 45) {
        return nombre + ' tiene el score C'
    } else {
        return nombre + ' tiene el score D'
    }
}
var resultado = calcularScore('Andres', 72, 28)
console.log(resultado)