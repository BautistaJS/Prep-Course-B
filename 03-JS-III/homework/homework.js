// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  let contador = 0;
  for (let i = 1; i<11; i++){
    contador += i;
  }
  return contador;
}

function encuentraPares(array){
// Devuelve un arreglo con los pares encontrados
// en el arreglo de enteros pasado como parámetro
// Tu código:
var arrayPares = [];
for (var i = 0; i < array.length; i++){
  var par = array[i] % 2;
  if(par === 0){
    arrayPares.push(array[i]);
  }
}
return arrayPares;
}

function elevaAlCuadrado(array){
// Devuelve un arreglo con cada número del array
// elevado al cuadrado
// Tu código:
var Arrayal2 = [];
for (var i = 0; i < array.length; i++){
  var cuadrado = Math.pow(array[i], 2);
  Arrayal2.push(cuadrado);
}
return Arrayal2;
}

function sumaArray(array){
// Devuelve el resultado de sumar todos los elementos
// de un arreglo de enteros dado
// Tu código:
let contador = 0;
for (let i = 0; i<array.length ; i++){ 
  contador = contador + array[i];
}
return contador;
}

function numeroDigitos(num){
// Devuelve el número de dígitos de un número dado
// Tu código:
let contador = 0;
while (num >= 1){
  contador += 1;
  num = num/10;
}
return contador;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos
};