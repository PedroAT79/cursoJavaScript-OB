//Etiquetas (lables): Para controlar bucles.
//Las etiquetas nos permites nombrar los bucles for o while.
//Ejemplo, tenemos dos bucles, uno dentro de otro y queremos controlarlos:

let unidades = 0;
let decenas = 0;

bucleDecenas:while(true){

    bucleUnidades:while(true){
        console.log("El numero actual es: " + decenas + unidades);
        unidades++;
        if(unidades === 10){
            unidades = 0;
            break bucleUnidades;
        }
    
    if(decenas ===2){
        console.log("El numero actual es: " + decenas + unidades);
        break bucleDecenas;
    }
}
decenas++;
    
}
console.log("Ya hemos terminado");