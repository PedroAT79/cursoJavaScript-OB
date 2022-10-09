//Princiapales operaciones aritmeticas

    let a = 3.6;
    let b = 4.1;
    
    // Suma:
    console.log(a+b);

    //Resta:
    console.log(a-b);

    //Multiplicacion:
    console.log(a*b);
    
    //Division:
    console.log(a/b);

//Operacion de los numeros en cadenas de texto
    //En algun momento puede que nos interese cambiar este tipo de variable al tipo String:
        console.log(typeof(a));
        let a_S = a.toString();
        console.log(a_S);
        console.log(typeof(a_S));

//Rendodeo de numero decimales:
    let c= 3.3;
    let d= c*3;

    console.log(d);
    //Limitar el numero de decimales (convierte a String).
    d = d.toFixed(4) // el valor dentro del toFixed me pone los numeros decimales que quiero que me 
    //salga, pero el problema es que me lo esta pasando a String desde un number.
    console.log(d);
    console.log(typeof(d));

    let e = 1839.1294585655;
    console.log(e.toFixed(2)); // aqui he cogido los dos primeros decimales
    

    //toPrecision:Aqui hago una precision cientifica:Redondea y cuenta desde la primera cifra entera (cifras significativas)
    let e_Precision = e.toPrecision(7)
    console.log(e_Precision);

    console.log(typeof(e_Precision));//tambien me devuelve un string
    





