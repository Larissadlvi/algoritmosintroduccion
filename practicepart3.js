let arreglo = [0,0,0];
let auxiliar;


for(i=0;i<3;i++){

arreglo[i]= parseInt(prompt("introduce el precio del articulo numero "+i+":"));


}

function comparar(arreglo){

for(j=0;j<3;j++){

for(i=0;i<3-j-1;i++){
if( arreglo[i]> arreglo[i+1]){
auxiliar = arreglo[i];
arreglo[i] = arreglo[i+1];
arreglo [i+1]=auxiliar;
}
}
}
//return arreglo[0],arreglo[1];
alert("los precios de los articulos mas economicos para tu bolsillo son: "
+ (arreglo[0]) + ", " + (arreglo[1]));
}
comparar(arreglo);
//alert("los precios de los articulos mas economicos para tu bolsillo son: " + (arreglo[0]) + ", " + (arreglo[1]));
