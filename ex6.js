/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

*/
// la plabra && significa Y dentro de condicion de cumplir los dos codiciones ,es decir si 4 es mayor que 3 Y 6 es mayor que 5
if (4 > 3 && 6 > 5) {
  console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
  console.log("Esta condición también se cumple?");
}
