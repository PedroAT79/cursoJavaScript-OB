//Como trabajar con listas(arrays):
let array = [1,2,3,4,5,6]; // una de las formas de declarar una lista/array
let array1 = new Array('hola', 'adios',3);
//el array puede contener en JS cualquier tipo de valor

console.log(array1);

//Acceder a los valores de un array:
array[3];
//el indice comienza en 0, en este caso el estamos diciendo que me saque el valor 3, que seria el 4º en la lista
console.log(array[3]);

//Metodos para introducir los valores de los arrays:
//.push(), .unshift() => Mutan el valor de nuestro array.

//El Push lo añade al final de la lista y te cambia el valor de array.
array.push("final");
console.log(array);

//Para instroducir valores al ppio:
array.unshift("inicio",55);//aqui he introducido 2 valores al ppio del array
console.log(array);

//Eliminar valores del array:pop() y shift():
//Valores al final= pop():
array.pop(); //Aqui eliminaria el elemento = 'final'
console.log(array);

//Valores al final: shift():
array.shift(); //aqui me eliminaria el elemento 'inicio'
console.log(array);

//Metodo para eliminar, modificar o añadir valores en nuestro array: .splice():
const array3 = [1,2,3,4,5,6];
//Eliminar valores: .splice(indice, valores a eliminar)
    array3.splice(2, 3); //elimina a partir de la posicion 2, elimina 3 valores (eliminaria 3, el 4 y el 5);
    console.log(array3);
//Añadir valores:
    array3.splice(2,0,"hola"); //en la posicion dos mete el 'hola', el cero te indica que no quieres eliminar y despues del cero lo que vas a añadir
    console.log(array3);

//Modificar valores:
    array3.splice(2, 1, "añadido1", "añadido2"); // a partir de la posicion 2 elimino 1 valor y añado otro valor (en este caso el añadido1)
    console.log(array3)

//Como unir dos arrays:Concat():
const lista1 = ["hola" , 2, false, null];
const lista2 = ["adios", 8, true, undefined];
 console.log(lista1.concat(lista2)); //me une las dos listas y no modifica los valores de las listas por separado.

const lista3 = lista1.concat(lista2); //la lista 3 tendria los valores de las 2 listas.

//Como unir dos listas con el factor de propagacion:
const lista4 = [...lista1, ...lista2]; //me une las dos listas igualmente que con el metodo concat().
const lista5 = [lista1,lista2]; //esto es diferente al anterior, porque generaria un array con dos elementos que serian lista1 y lista2
//con el metodo ...lista1, ...lista2 me crea un array con tantos elementos como la suma de elementos de los arrays que se unen en uno.

//Como obtener una lista a partir de otra lista: slice().
const lista6 = ["hola", 1,2,3,true, null, "adios"]; //el metodo slice no modifica el valor del array original
console.log(lista6.slice(1,3)) //el 1 indica la posicion desde el que queremos coger hasta la posicion 3, el segundo indice no lo cogeria.
//si no le pongo el segundo indice me coge hasta el final.
//si le meto en el primer indice valores negatvos iria hacia atras en las posiciones y cogeria de los elementos del final.

















