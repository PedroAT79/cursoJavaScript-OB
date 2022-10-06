//Listas o arrays(vectores):
const lista = [1, "true", true, undefined, null];
const lista2 = new Array(1, "true", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento";
const lista4 = [lista, lista2,lista3, lista4]; //array de arrays

console.log(lista);
console.log(lista2);
console.log(lista3);

//Objetos:
//Los objetos son representaciones de datos de la vida real.
const movil={
    pantalla: 3.4,
    marca: "Xiaomi",
    ancho:5,
    isWhite: false,
    contactos:["Luis", "Antonio", "Raul"],
    tarjeta:{
        marca: "Samsung",
        almacenamiento: 128,
        "altura-tarjeta": 4 //forma de definir un atributo con un simbolo no permitido sin comillas (-) guion medio
    }
} //objeto movil con varios atributos de diferentes tipos.
//Acceso a los atributos(propiedades del objeto):
//definir nuevas propiedades despues de crear el objeto:
movil.nuevapropiedad = "hola";
console.log(movil.tarjeta.marca); // para acceder a la marca de la tarjeta del movil.
console.log(movil.nuevapropiedad);

//Podemos cambiar los valores de sus atributos, de movil, pero no movil directameto tipo movil=***;


//Fechas: libreria para trabajar con fechas: Moment.js
const ahora = new Date(); //para crear una fecha, esta te da la fecha exacta de cdo se ha definido la variable
console.log(ahora); // da la fecha actual.

//Fecha en milisegundos desde el 1/ene/1970:
const fecha_milis = new Date(10); //se puede definir usando los milisegundos.
console.log(fecha_milis); // Daria la fecha de Jueves de 1 de enero de 1970
//Otras formas de expresar las fechas:
const fecha_cadena = new Date("march 25 2020");

const fecha_valores = new Date(2022,2, 15); //año, mes que empieza por 0 = enero, y dia
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; //xq el primer mes se considera el mes 0.
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);






