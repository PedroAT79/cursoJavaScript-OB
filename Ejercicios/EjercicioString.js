//Una cadena de texto con tu Nombre
const miNombre = "Pedro";

//Otra cadena de texto con tu Apellido
const miApellido = "Aceituno";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

const estudiante = `${miNombre} ${miApellido}`;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteAMayus = estudiante.toUpperCase();
console.log(estudianteAMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const contarLetas = estudiante.length;
console.log(contarLetas);

//Una variable que contenga la primera letra del Nombre
const primeraLetraNombre = miNombre.charAt();
console.log(primeraLetraNombre);

//Otra variable que contenga la última letra del Apellido
const ultimaLetraApellido =miApellido.charAt(miApellido.length-1);
console.log(ultimaLetraApellido);

//Una cadena de texto que elimine los espacios de la variable "estudiante":
const estudianteSinEspacios = estudiante.replace(" ","");
console.log(estudianteSinEspacios);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const contieneNombre = estudiante.match(miNombre);
console.log(contieneNombre);