//Operador .valuoOf() -- para obtener valores numeros a partir de literales
    let a = 2;
    let b = new Number(3); //sustituvo del int

    console.log(b); //se comporta como un numero
    console.log(a+b); //suma normalmente.

    console.log(b.valueOf());//aqui en vez de interpretar como un int, me lo suma como si fuera un numero sin castear

//Para un string:
    let str =new String("Hola soy un string");
    console.log(str) //Me interpreta como una cadena.
    console.log(str.valueOf(str)); //Aqui me coge el valor de la variable como si no la hubiera declarado mas arriba tipo String.

//NaN (Not a number)-- Infinity
    //El NaN significa que estamos intentando usar un metodo para variables numericas en un valor que no es numerico
    let n = Number('radios');
    console.log(n) //me devuelve un NaN, diciendome que el valor del int no corresponde a un numero

    let h = 0;
    let g = 5;
    console.log(g/h);//el resultado es Infinity xq estoy diviendo un numero entre 0. Si h seria null tambien daria Infinity.


//Como convertir los String a valores numericos. parseInt y parseFloat
    let numero = 5.89;
    console.log(typeof(numero));
    console.log(typeof(numero.toString()))

//Para pasar string a number:
    let s = 4;
    let stringNumber = "5.9";
    console.log(typeof(stringNumber));
    let w = s + stringNumber;
    console.log(w); //aqui me une dos cadenas
    console.log(typeof(w)); // es un string xq stringNumber es del tipo String
    //------//
    let stringNumber_toNumber = Number(stringNumber); //aqui lo he pasado a tipo Number.
    let q = s + stringNumber_toNumber;
    console.log(q); //ya he sumado dos numeros

    //ParseInt / ParseFloat:
    //Si un string lo parseo con un parseInt, me quita los decimales.
    //Si usara un parseFloat para convertir un String con decimales, estos si que me los respetaria.
    let t = '6.1';
    console.log(parseInt(t)); //me quita los decimales representados en el string.
    console.log(parseFloat(t)); //aqui me respeta los decimales del string.

//Numero Hexadecimales
    //Numeros en base 16: Se usan mucho en asignacion de memoria, xq esta son 1 y 0, se usan los bytes y con esto
    //estamos usando 2 byte por numero. No existen nmero de coma flotante en hexadecimales

    let numHex = '0x3a5b7';
    console.log(parseInt(numHex, 16)); //el segundo digito le estoy diciendo que m lo convierta a hexadecimal(16) a octadecial (8) o
    //decimal(10)

//Valores maximo y minimo en Javascript

    let min_Precision= Number.EPSILON; //epsilon es el minimo espacio que hay entre un numero y el siguiente.
    let min_Valor_js = Number.MIN_VALUE;
    let max_Valor_js = Number.MAX_VALUE;

    console.log(min_Precision); //minimo valor con el que podemos trabajar dentro de JS: 2.220446049250313e-16
    console.log(min_Valor_js); //EL valor mas pequeño 5e-324.
    console.log(max_Valor_js); //El valor mas grande con el que podemos trabajar en JS 1.7976931348623157e+308