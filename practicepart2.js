let arreglo = [0,0,0,0,0];
let auxiliar;
for(i=0;i<5;i++){
arreglo[i]= parseInt(prompt("ingresa un numero al azar"));
}
function comparar(arreglo){
for(j=0;j<5;j++){
for(i=0;i<5-j-1;i++){
if( arreglo[i]> arreglo[i+1]){
auxiliar = arreglo[i];
arreglo[i] = arreglo[i+1];
arreglo [i+1]=auxiliar;
}
}
}
return auxiliar=arreglo[4];
}
alert("el mayor de los numeros es: " + comparar(arreglo));
