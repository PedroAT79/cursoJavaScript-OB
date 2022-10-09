//Bucles: Cdo necesitamos que se repita una parte de nuestro codigo mientras se cumpla o no una condicion.
//For: Son los mas utilizados,
//Declar

for(let i=0; i<10; i++){ 
    console.log(i); //  0 1 2 3 4 5 6 7 8 9 
}

for(let i=0; i<10; i+2){
    console.log(i);  //0 2 4 6 8 
}

let lista= [1,4,6,7,5,34];

for(let i=0; i<lista.length; i++){ //recorremos las lista.
    console.log(lista[i]);
}

//Estructura For.. of:
for(let valor of lista){ //lo que hace que a cada elemento de la lista le da el nombre valor y los saca
    console.log(valor);
}

//Estructura for--each: lo mismo que lo anterior pero con funcion flecha
lista.forEach(valor => {
    console.log(valor)
})

//For--in:
let persona = {
    nombre: Pedro,
    apellido: Aceituno,
    edad: 43,
    isDeveloper: true
}

for(let propiedad in persona){
    console.log(propiedad) // aqui accedemos a las propiedades del objeto, no a los valores
    console.log(persona[propiedad]) //aqui accedemos a los valores de las propiedades del objeto.Los corchetes se usan para acceder
    //a los valores dinamicos del objeto persona.

    
}