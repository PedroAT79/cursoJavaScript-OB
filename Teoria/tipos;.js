var variable;
let variableLet;
const constante = "Hola";

var a = 1;
console.log(a);

a=4;
console.log(a);

//constante = "Adios"; //Me lanza un error porque al ser constante no puedo reasignar valor a
// una variable del tipo constante.

// var no se suele usar.

let b=3;
console.log(b);

b=5; //reasigno valor a la variable b.
console.log(b); 

//var afecta a todo el codigo mientras que let solo afecta al bloque donde esta siendo declarada.
//si declaro una variable var fuera de un bucle y despues la llamo dentro del mismo, cambio el valor de la inicial.
//con let lo que esta dentro no afectaria a la variable declarada con let fuera del bucle.
//no es buena practica usar el mismo nombre para dos variables, aunqe con let no afectaria

console.log(typeof b)
//con esto veo el tipo de variable.
//cambiar de tipo una variable se puede hacer pero no es una buena practica.

