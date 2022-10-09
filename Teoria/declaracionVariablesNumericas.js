//Numeros:
//Declaracion de variables numericas, enteros y con decimales:
let a = 5; //numero entero
console.log(a);

let b = 6.4; //numero con coma flotante
console.log(b);

//Precision:
let c= 0.2;
//Alrealizar una operacion aritmetica dos numeros con decimales dá un error de precision en el resultado.
//Esto es debido a como es almacenado en memoria.
console.log(b+c);

//Como resolver este problema: Usamos el operador round que redondea hacia abajo sin decimales.

let trucoRedondeo = Math.round((b+c) *100)/100; //aqui corro dos posiciones la coma y despues con la division la regreso a su sitio 
//original sin que me ponga todos lo decimales de la suma con error de precision.
console.log(trucoRedondeo);






