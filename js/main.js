//Pido nombre de Usuario
function nombreApellido (){
    nombreUsuario = prompt("Bienvenido! Simula tu Prestamo. ¿Como te llamas?");
    apellidoUsuario = prompt("Ingresa tu apellido");
}
//Valido Nombre que no sea un strem vacio
function validarUsuario(){
   while (nombreUsuario == "" && apellidoUsuario == "" || nombreUsuario != "" && apellidoUsuario == "" || nombreUsuario == "" && apellidoUsuario != ""  ){
   alert ("No ingresaste ningun usuario");
   nombreApellido ();
}
}
//Compruevo que sea mayor de edad
function mayorEdad (){
   edadUsuario = parseInt(prompt("Solo ingresaras si eres mayor de edad! ¿Cuantos años tienes?"));

}
function comfirmacionUsuario (){

   let confirmaUsuario = prompt(`El nombre ingresado es ${nombreUsuario} ${apellidoUsuario} responde Y/N`);

   if (confirmaUsuario == "Y") {
   alert (`Bienvenido ${nombreUsuario} ${apellidoUsuario}`);
   }else{
   alert ("Usuario incorrecto");
}
}
function valorPrestamo (){
    valPrestamo = parseInt(prompt(`Ingresa el Monto del prestamo`));
    valCuotas = parseInt(prompt(`Ingresa La candad de cuotas`));
    sistAmortizacion = parseInt(prompt(`Que tipo de Sistema prefieres \r Prestamo Personal presiona 1 \r Prestamo UVA presiona 2`));
    
}
function valCotizacion () {
   if (sistAmortizacion!="" && sistAmortizacion == 1) {
    alert ( `El valor de la cuota para ${valCuotas} cuotas es de ${(valPrestamo / valCuotas)*(65/100)}`)
    alert ("Gracias por su consulta");
    
}
   if (sistAmortizacion!="" && sistAmortizacion == 2) {
    alert ( `El valor de la cuota para ${valCuotas} cuotas es de ${(valPrestamo / valCuotas)*(250/100)}`)
    alert ("Gracias por su consulta");
}
var i = 1;

for (var i = 0; i < 10; i++) {
 
  if (sistAmortizacion!="" | sistAmortizacion != 1 |sistAmortizacion != 2 ) {
    alert ( "Nueva simulacion, Intentelo Nuevamente")
    valorPrestamo ();
    valCotizacion ();
   i++;
}
    else {
        
    }
}


    
}

nombreApellido();
validarUsuario();
comfirmacionUsuario ();

mayorEdad ();

if (edadUsuario>=18 && edadUsuario<90 ) {
   alert ("Felicitaciones Puedes ingresar.");
   valorPrestamo();
   valCotizacion();
}  
else{
   alert ("Necesitas supervisacion de un Mayor o Ingresar un nombre correcto");

}
