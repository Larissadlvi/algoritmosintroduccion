//Exercise 1:
let tex = prompt("Dime una palabra")
function stringVacia (tex) {
if(typeof tex == undefined || tex == "" ){
alert("No hay texto");
}
else{
alert(tex.charAt(0));
}
}
stringVacia(tex)
//Exercise 2:
let cad1 = prompt("Introduce una cadena de caracteres:");
let cad2 = prompt("Introduce una cadena de caracteres:");
function checkTwoStringsSame(str1, str2) {
if(str1.toLowerCase()===str2.toLowerCase()){
alert("Verdadero, las dos cadenas son iguales");
}else{
alert("Falso, las dos cadenas son diferentes");
}
}
checkTwoStringsSame(cad1,cad2);
