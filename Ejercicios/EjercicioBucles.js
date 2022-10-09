
//- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let factorial=1;

for(let i=10; i>0;i--){
    factorial *=i;

}
console.log(factorial)

//- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let k=1;
let factorial1 = 1;
while(k<=10){
   factorial1 *=k;
   k++;
}

console.log(factorial1)

//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let j=1;
let factorial2 = 1;
while(j>0){
       factorial2 *=j;
        j++;
        if(j>10){
            break
        }
        }
    

console.log(factorial2);