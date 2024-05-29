/*Nota: AL cargar el documento n1 vale "0" de inicio es decir ya cuenta con un valor, 
el cual tambien es el mismo valor de n2 de inicio, y lo que queremos es que se obtenga un valor
hasta que el usuario coloque las cantidades y presione el boton para que nos devuelva el resultado
en en el input "res" asi que este codigo se copiara dentro de una funcion, con num1.value 
accedemos al input con id num1 y nos da el valor que colca el usuario
var n1 = document.getElementById('num1').value; 
var n2 = document.getElementById('num2').value;
var res = num1 + num2;*/

//hacer una funcion que se ejecutara hasta que el usuario preSione el boton de resultado
//CXON ESTE CODIGO SE CONCATENA EL RESULTADO DE LA SUMA YA QUE AMBAS VARIABLES SON CADENAS DE TEXTO

/*function suma() {
    var n1 = document.getElementById('num1').value; 
    var n2 = document.getElementById('num2').value;
    var res = n1 + n2;

    document.getElementById('resultado').value = res;
}*/

//se transforma lo que digita el usario de una cadena de texto a un numero flotante con parseFloat este es una funcion
function suma() {
    var n1 = parseFloat(document.getElementById('num1').value); 
    var n2 = parseFloat(document.getElementById('num2').value);
    var res = n1 + n2;

    document.getElementById('resultado').value = res;
}

