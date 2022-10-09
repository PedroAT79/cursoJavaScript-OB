//Casos muy especificos donde usar break y continue:
let lista = [1,2,3,4,5,6,7,8];

for(let i=0; i<lista.length; i++){
    if(lista[i] === 3){
        continue; // aqui vuelve arriba y no lo pinta. 
    }

    console.log(lista[i]);
    if(lista[i]>5){
        break; //aqui hemos parado la iteracion del bucle.
    }
}//Estos casos hay que evitar usarlos en lo mayor posible, no serian buenas practicas.

//Ambito de un bucle: Alcance de las variables declaradas dentro de un bucle.
//Si en vez de let uso var para las variables declaradas dentro de los buscles, estaria declarando
//las varaible de forma global. Cdo trabajamos con bucles es mas conveniente usar let que var para los
//los bucles.
//El tipo const tambien es local en el caso de estar declarada dentro de un bucle.

