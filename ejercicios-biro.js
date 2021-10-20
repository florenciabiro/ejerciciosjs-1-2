
document.write("<br>")
/* algunos ejercicios los practique en opcion consola y como funcion para practicar eventos etc.  */

/* Ejercicio 1********************************************************
Mostrar por consola, tu nombre, apellido, comisión y hobbies */

/* var nombre = "Florencia" 
var apellido = "Biro"
var comisión = 1115 
var hobbies = "Forestacion"

console.log( "Mis datos son : " + nombre + " " + apellido + " , Comision: " + comisión + ", Hobbie: " + hobbies) */




/* Ejercicio 2*************************************************************
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir
en la consola debes utilizar el método console.log(). */
/*  var fraseUsuario = prompt("Ingrese una frase");
console.log("La frase ingresada por el usuario es : " + fraseUsuario);  */

/* Ejercicio 3**********************************************************
Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un
signo de exclamación. */

/* var nombre3 = prompt("ingrese su nombre ")
document.write("Hola"+ " " + nombre3 + " " + "!")
document.write("<br>") */


/* Ejercicio 4*****************************************************
Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por consola */
/* opcion1 */
/* var nombre2 = prompt("ingrese su nombre ")
var apellido2 = prompt("ingrese su apellido ")
console.log("Su nombre es :" +nombre2 + " "+ apellido2) */


/* opcion 2  */
function verInput(){
    var valorInput = document.getElementById('valor')
    var valorInput2 = document.getElementById('valor2')

var valor = valorInput.value 
var valor2 = valorInput2.value 
document.write("Su nombre es: " + valor + " y su apellido es :" + valor2)
}

var boton = document.getElementById('ver')
boton.addEventListener('click', verInput )
/*

Ejercicio 5************************************************************
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
con la frase "Tienes X años".  */ 

/* var fechaActual = 2021
var fechaUsuario = Number(prompt("ingrese su año de nacimiento "))
var edad = fechaActual - fechaUsuario
console.log("Su edad es de " + edad + " años !")
 */

/*

Ejercicio 6*********************************************************
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu
BMI es X" */ 



/* opcion1 con mensajes  */
/* function calculoImc ( ){
    var peso = parseFloat(prompt("ingrese su peso en kg"))

    var talla = parseFloat(prompt("ingrese su talla en metros"))
    var imc = (peso / (talla^2))  
    return imc
}
document.write("Tu BMI es de " + calculoImc())
 */

/* opcion 2 con inputs */
function verImc(){
    var valorInput = document.getElementById('peso')
    var valorInput2 = document.getElementById('talla')

var valor = parseFloat(valorInput.value) ;
var valor2 = parseFloat(valorInput2.value );
var imc = valor/(valor2^2);
document.write("Su imc es :" + imc);
}

var boton2 = document.getElementById('imc')
boton2.addEventListener('click', verImc);
/* ************************************************** */

/* Ejercicio 7***********************************************
Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en
tu casa. Mostrar el valor de la variable por la consola. */

var cantidadDeVentanas = 4
console.log("Soy el ejercicio 7 y mis ventanas son :" + cantidadDeVentanas)

/* Ejercicio 8************************************************
Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de
la variable por la consola. */

var soyHumano = true
console.log(soyHumano)

if (soyHumano == true){
    console.log("Soy un humano de verdad:" + soyHumano)
}else{
    console.log("No soy humano")
}

/* Ejercicio 9  **********************************************************
Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste
usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola. */

var miGustoDePizza = "Margarita"
console.log(miGustoDePizza)

/* Ejercicio 10 *****************************************************
Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable.*/
 var miGustoDePizza 
    function miGustoDePizza1(){
        miGustoDePizza = false
        console.log("Tu variable vale: " + miGustoDePizza)
    }
    
    function miGustoDePizza2(){
        miGustoDePizza = 0
        console.log("Tu variable vale: " + miGustoDePizza)
    }
    function miGustoDePizza3(){
        miGustoDePizza = 'Hola'
        console.log("Tu variable vale: " + miGustoDePizza)

    }

    function miGustoDePizza4(){
        miGustoDePizza = 'Minions'
        console.log("Tu variable vale: " + miGustoDePizza)
    }
miGustoDePizza1()
miGustoDePizza2()
miGustoDePizza3()
miGustoDePizza4() 

/*Ejercicios 11*********************************************************
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro
supongo equilatero */



    /* var base = Number(prompt("ingrese la base en cm "))
    var altura = Number(prompt("ingrese la altura"))

    function perimetro ( base){
        var perimetro = (base * 3)
        console.log("el perimetro es: " + perimetro)
    
    }
    
    function superficie(base, altura){
        var superficie = base * altura /2
        console.log("el superficie es: " + superficie)

    }
    perimetro(base)
    superficie(base, altura)
 */

/* Ejercicio 12*******************************************************
Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a
kilogramos */

/* var unidad = 0.453592
function conversionLibrasAKilos(){
    var peso = Number(prompt("ingrese su peso en libras"))
    var pesoEnKilos =  peso * unidad
    console.log("El peso en kilos es: " + pesoEnKilos)
}
conversionLibrasAKilos() */

/* Ejercicio 13*****************************************************
Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre
en la consola. */
/* var aumentoPc = 0.15
function aumentoSueldo(){
    var sueldo = ( Number(prompt("ingrese sueldo en pesos")))
    var sueldoFinal= sueldo + (sueldo * aumentoPc)
    console.log ("Tu nuevo sueldo es de : " + sueldoFinal)
}
aumentoSueldo() */ 

/* Ejercicio 14 ***************************************************
Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta
“aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario */

/* var nota = prompt("ingrese nota del alumno");
if (nota > 7){
    alert("Aprobado")
}else{
    alert("desaprobado")
}
 */

/* Ejercicio 15 ***************************************************
Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
el nuevo sueldo 

nota tabla en html*/

/* var sueldo = parseFloat(prompt("Ingrese Sueldo"))
var categoria = Number(prompt("Ingrese Categoria 1 -2 -3"))

switch (categoria) {
    case 1:
        nuevoSueldo= sueldo * 0.10 + sueldo;
        alert("La categoria es: " + categoria + " y el nuevo sueldo es: " + nuevoSueldo)
    break;
    case 2:
        nuevoSueldo= sueldo * 0.20 + sueldo;
        alert("La categoria es: " + categoria + " y el nuevo sueldo es: " + nuevoSueldo)
    break;
    case 3:
        nuevoSueldo= sueldo * 0.30 + sueldo;
        alert("La categoria es: " + categoria + " y el nuevo sueldo es: " + nuevoSueldo)
    break;
    default:
        alert("valores invalidos ")
        break; 
}*/

/* Ejercicio 16 ************************************************
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
la palabra “no aprobado” en caso contrario */

/* var matricula = prompt("Ingrese matricula")
var arrayNotas = [5]
var promedio
var i = 0
var acumulador = 0
while (i<5){
    i++ 
    var asignacion = parseFloat(prompt("Ingrese nota nro : " + i))
    arrayNotas [i] = asignacion
    acumulador = acumulador + asignacion 
    
}
promedio = acumulador /5;
if (promedio >= 7){
    document.write("La matricula es : " + matricula + ",  el promedio es: " + promedio + ", APROBADO ")
    
}else{
    document.write("La matricula es : " + matricula + " el promedio es: " + promedio + " NO APROBADO ")
}
 */

     /* Ejercicio 17 dudas ***********************************************
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números
pueden ser iguales  */

var valormaximo = 0

 function valormax(){
 var var1 = parseInt(prompt("ingrese valor 1"))
     if (var1 > valormaximo){
         valormaximo= var1
     } 

    var var2 = parseInt(prompt("ingrese valor 2"))
    if (var2 > valormaximo){
 
         valormaximo= var2
     
 }
    var var3 = parseInt(prompt("ingrese valor 3"))
    if (var3 > valormaximo){
 
         valormaximo= var3
     
 }
 console.log("el valor maximo es " + valormaximo)
 

 }
 valormax()


/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

/* nivel 2 */
console.log(" *****  Ejercicios 2 ******** ")
/* Ejercicio 1.
Crear un programa que defina tres variables llamadas “variable_a”, “variable_b” y
“variable_resultado”. Cargar las primeras dos con los valores numéricos 33 y 77. Sumar ambas
variables y guardar el resultado en la variable “variable_resultado”. Imprimir el resultado por
consola. */ 

var variable_a = 33
var variable_b = 77
var variable_resultado = variable_a +variable_b
console.log("El resultado de la suma es: " + variable_resultado)

/* Ejercicio 2.
Crear un programa que defina 5 variables llamadas “a”,“b”...“e” y una sexta variable llamada
“promedio”. Cargar las 5 variables con valores y calcular el promedio de los mismos. Imprimir el
resultado por consola. */

/* var a = Number ( prompt("ingrese un valor")) 
var b = Number (prompt("ingrese un valor") ) 
var c = Number ( prompt("ingrese un valor") )
var d = Number ( prompt("ingrese un valor")) 
var e = Number (prompt("ingrese un valor") ) 
var promedio = ( a+b+c+d+e)/5
console.log("El promedio es  : " + promedio) */

/* Ejercicio 3.
Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la comparación. */

/* var nota1= Number (prompt("ingrese un valor") ) 
var nota2 = Number ( prompt("ingrese un valor") ) 
if (nota1>nota2){
    document.write("la nota mayor es : " + nota1)

}else {
    document.write("la nota mayor es : " + nota2)
}
 */

/* Ejercicio 4.
Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir
un programa que, dado el monto de una compra como valor numérico, diga cuanto debe abonar
el cliente aplicando el descuento si es necesario. */
/* var valor = prompt("ingrese el valor de la compra")
var descuentopc = valor * 0.15
function descuento(precio, descuento){
    var precioFinal
    if(valor > 100){
        precioFinal = precio - descuento
        console.log("El precio con descuento  es : " + precioFinal)
    }else{
    console.log("ud no tiene descuento, su compra no es mayor a  100$")
}
   
}
descuento( valor, descuentopc) */


/* Ejercicio 5.
Crear un programa que calcule el pago que hacen un grupo de personas para ver una película
teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona y
para grupos de 8 personas o más el pago es 0.5 pesos por persona.
 */

/* var cantidadEspectadores =prompt("ingrese la cantidad de espectadores")
var costo 

if ( cantidadEspectadores<8){
    costo = 1.5 * cantidadEspectadores
    console.log("Al ser menos de 8 el costo es de :  " + costo)
}else{
    costo = 0.5 * cantidadEspectadores
    console.log(" Al ser mas de 8 u 8 el costo es de :  " + costo)
} */

/* Ejercicio 6. repetido
Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor” o “Nota2 es
mayor” según el resultado de la comparación. */

/* var nota1 = 10
var nota2 = 5

if (nota1 > nota2){
    console.log("Nota1 es mayor " + nota1)
}else{
    console.log("Nota2 es mayor" + nota2)
}
 */
/* Ejercicio 7.
Las puntuaciones de las películas se clasifican en:
0: mala, 1: regular, 2: buena,3: muy buena, 4: excelente
Crear un programa donde se pide al usuario que ingrese un valor entre 0 a 4. Imprimir la
clasificación de la película según el valor numérico. */

/* var opcion = Number(prompt("ingrese un valor entre 0 y 4"))
switch (opcion) {
    case 0 :
        document.write("la pelicula es MALA")
        break
    case 1 :
        document.write("la pelicula es REGULAR")
        break
    case 2 :
        document.write("la pelicula es BUENA")
        break
    case 3 :
        document.write("la pelicula es MUY BUENA ")
        break
    case 4 :
        document.write("la pelicula es EXCELENTE")
        break
    default:
        document.write("OPCION INVALIDA")
    
    
        
}
 */

/* Ejercicio 8.
Crear un programa que imprima una cuenta regresiva de 59 a 0. */
/* var i = 59
while (i >0){
    console.log(i)
    i--
}
 */
/* Ejercicio 9.
Crear un programa que imprima los números pares de 0 a 100. */

/* var i = 0
while (i < 101){
    
    console.log(i)
    i= i +2
} */

/* Ejercicio 11.
Crear un programa en donde el usuario ingresa números y se guardan en un array. 
Al ingresar “-1”
se imprimirán los números ingresado junto con sus posiciones dentro del array. */

/* 
var i = 0
var ArrayNumeros =[]
 var cargar = prompt("Ingrese numero a cargar y -1 si quiere ver los datos ")
while ( cargar  != -1){
    
       ArrayNumeros [i]= cargar
   
        i++
        var cargar = prompt("ingrese numero a cargar y -1 si quiere ver los datos ")
     
    
    }
    console.log(ArrayNumeros ) 

    for (i=0;i<ArrayNumeros.length;i++){ 
        document.write("Posición " + i + " del array: " + ArrayNumeros[i]) 
        document.write("<br>") 
 } */
/* Ejercicio 12. 
Crear un programa en donde el usuario ingresa números hasta que ingresa “-1”, en dicho caso el
programa termina e imprime el promedio de los números ingresados. */


/* var ArrayNumeros =[]
var i =0
var suma = 0
var promedio = 0
var cargar =0
         
 var cargar = parseInt(prompt("ingrese numero a cargar y -1 si quiere ver el promedio "))

while ( cargar != -1){   
    
    console.log ("ud ingreso " + cargar)
   
       suma = suma + cargar
        ArrayNumeros [i]= cargar
        i++
        cargar = parseInt(prompt("ingrese numero a cargar y -1 si quiere ver el promedio "))        
    }

    promedio = suma / ArrayNumeros.length
    document.write("El promedio es de : " + promedio)
     */



   /*  Ejercicio 13. 
Crear un programa en donde el usuario ingrese el nombre y el precio de 5 productos, al finalizar,
se listarán en pantalla el nombre y el precio de los productos */

/* var precio 
var nombre
arrayPrecios = [5]
arrayProductos =[5]

i = 0 
while (i<5){
   
    nombre = Number(prompt("ingrese nombre del producto " + i ))
    precio = Number(prompt("ingrese precio del producto " + i ))
   

    arrayPrecios [i] = precio 
    arrayProductos [i] = nombre
    i++
}

for (i=0;i<arrayPrecios.length;i++){ 
    document.write("El producto es : " +  arrayProductos[i] + ",  y su precio es $ :" + arrayPrecios[i]) 
    document.write("<br>") 
} */




/* Ejercicio 14. 
Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las
personas. */

/*  var arrayAlturas = []
var i = 0 ;
var asignar = 0
var suma = 0 
var promedio = 0 
var asignar = parseFloat(prompt("ingrese altura en cm  o 0 para finalizar  "))
while ( asignar != 0 ){
    suma = suma + asignar
    arrayAlturas [i] = asignar
    i++
    asignar = parseFloat(prompt("ingrese altura en cm  o 0 para finalizar  "))


}

promedio = suma / arrayAlturas.length
console.log("El promedio de alturas es de : " + promedio + " cm.")
 */

/* Ejercicio 15.
Crear un Programa que pida al usuario un número entre 0 y 25, deberá mostrar por pantalla su
significado en el bingo. Ej: 14 = "Borracho" */

/* NOTA LO HICE DE 0A4 PORQUE SE REPETIRIA 20 VECES MAS LA ESTRUCTURA  */


/* var numIngresado = Number(prompt("ingrese un numero  entre 0 y 4 "))

function bingo(num ){
    switch (num) {
        case 0 :
            console.log ("Su numero significa : los Huevos ")
            break
        case 1 :
            console.log ("Su numero significa : el agua")
            break
        case 2 :
            console.log ("Su numero significa : el niño ")
            break
        case 3 :
            console.log ("Su numero significa : san cono")
            break
        case 4 :
        console.log ("Su numero significa : la cama ")
            break
        default :
            console.log("numero no valido ")

    }
}
bingo(numIngresado)
 */

/* Ejercicio 16.
Crear 2 Vectores, uno corresponderá a los nombres y otro a los apellidos de 10 compañeros del
curso de Fullstack de codo a codo */

/* var arrayNombres= [10]
var arrayApellidos= [10]
var i = 0


    while ( i < 10){
        var nom = prompt("ingrese nombre")
        var ape = prompt ("ingrese apellido")
        arrayNombres [i] = nom
        arrayApellidos [i] = ape
        i++
    }
var i = 0
    for ( i= 0 ; i < 10 ; i++){
        document.write("El  alumno en posicion " + i + " se llama  Nombre :  " + arrayNombres[i] +  " , Apellido :  " + arrayApellidos [ i])
        document.write ("<br>")
    }
    console.log(arrayNombres)
 */

