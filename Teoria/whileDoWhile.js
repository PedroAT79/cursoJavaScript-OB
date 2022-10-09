//Bucles While: Mientras que no se de una condicion no entra dentro del bucle.
let i =0;
let max = 10
while(i<max){
    console.log(i);
    i++; //aqui estoy controlando la variable dentro del bucle, si no le pusiera nada el bucle seria infinito.
}

//Do-While: La primera vez siempre se va a ejecutar, aunque no cumpla la condicion.
i=0;

do{
i++;
console.log(i);
}while(i<max);


