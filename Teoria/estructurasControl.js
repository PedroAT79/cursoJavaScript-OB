//Bifurcaciones = si cumple vamos por un camino, si no cogemos por otro camino.
//if-else:

let saldo = 50;
let efectivo = 20;
if(efectivo <=saldo) {
    console.log("Puedes sacar dinero");
}else {
    console.log("Saldo insuficiente");
}

//else if:

let nota = 5;

if(nota === 5){
    console.log("Suficiente");
}else if (nota === 6){
    console.log("Bien")
}else if(nota>7 && nota<9){
    console.log("Notable")

}else if(nota>9){
    console.log("Sobresaliente")
}else if(nota<5){
    console.log("Insuficiente")
}else {
    console.log("Error, introduce una nota entre el 1 y el 10")
}

//switch: En funcion de un valor poner varias condiciones
let nota1 = 5;

switch(nota){
    case 5:
        console.log("Aprobado");
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Insuficiente");
        break;
    case 6:
        console.log("Bien")
        break;
    case 7:
    case 8:
        console.log("Notable")
    case 9:
    case 10:
        console.log("Sobresaliente")
        break;
    default:
        console.log("Error, introduce una nota entre el 1 y el 10")
        break;
}

//Compraciones debil o fuerte: == o ===
// == -->Comparador debil, no tiene en cuenta el tipo de variable, solo compara el valor;
//=== -->Comparador fuerte, ademas del valor tambien tiene en cuenta el tipo de variable que esta comparando.
let a = 5;
let b = "5";
if(a==b){
    console.log("Solo compara el valor");
}

if(a === b){
    console.log("Compara valores y tipos");
}

let c = 4;
let d = 10;

if(c != d){
    console.log("Son diferentes en valor")
}

if(c !== d){
    console.log("Son diferentes en valor y en tipo")
}

//Comparaciones mayor que y menor que:

let max = 10;
let min = 5;

if(max > min){
    console.log("Max es mayor que Min")
}

if(max>=10){
    console.log("Max es mayor o igual que 10")
}