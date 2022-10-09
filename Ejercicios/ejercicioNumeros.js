// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let miAlturaEnCentimetros = 178;

// - Una variable que contenga tu altura en metros (número de coma flotante)
let miAlturaEnMetros = 1.78;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let miPesoKg = 73.42;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(miAlturaEnMetros.toFixed(1))
console.log(miAlturaEnMetros.toPrecision(2))

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(miPesoKg.toFixed(0))

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max_ValorJS = Number.MAX_VALUE;
console.log(max_ValorJS);

let max_ValorJS1 = max_ValorJS + 1
console.log(max_ValorJS1)

let b= false;
if(max_ValorJS === max_ValorJS1){
    b = true;
}
console.log(b)