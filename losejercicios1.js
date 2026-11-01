let num= 1;
let sum= 0;

while (num <= 100){
    sum += num;
    num ++;
}
console.log(sum)

let num1= 1;
let sum1= 0;

do {
     sum1 += num1;
    num1 ++;

} while (num1 <= 100); 
   
console.log(sum1);



for (let num3 = 1; num3 <= 30; num3++) {
   console.log( 4** num3)
}



for (let num = 2; num <= 1000; num++) {
    let primo= true;

    for (let divisor= 2; divisor < num; divisor++){
        if (num % divisor == 0) {
            primo = false;
            break;
        }
    }
    if (primo == true){
    console.log(num);
    }
    
}



let filas = 5;
  for (let a1 = 1; a1 <= filas; a1++) {
    let linea= "";
    for (let a2 = filas; a2 > a1; a2--) {
        linea += " ";  
    }
    for (let a3 = 1; a3 <= (2 * a1 - 1); a3++) {
        linea += "*";
    }
     console.log(linea);
}
 
    for (let a1 = filas - 1; a1 >= 1; a1--) {
    let linea= "";

    for (let a2 = filas; a2 > a1; a2--) {
        linea += " ";  
    }
    for (let a3 = 1; a3 <= (2 * a1 -1); a3++) {
        linea += "*";
    }
     console.log(linea);
}



for (let num1 = 1; num1 <= 20; num1++) {
    console.log (num1 + "² = " + (num1 * num));
  
}



let fila = 5;
  for (let e1 = 1; e1 <= fila; e1++) {
    let linea= "";
    for (let e2 = fila; e2 > e1; e2--) {
        linea += " ";  
    }
    for (let e3 = 1; e3 <= (2 * e1 - 1); e3++) {
        linea += "*";
    }
     console.log(linea);
}



let fila1 = 5;

for (let fila = 1; fila <= filas; fila++) {

    let line = "";

for ( let espacio = filas; espacio > fila; espacio--){
    line += " ";
}
 for (let num = 1; num <= fila; num++) {
    line += num;}

 for (let numero = fila - 1; numero >= 1; numero--) {
        line += numero;
    
 }
 console.log(line)
}



let n= 8;

for (let fila = 1; fila <= n; fila++) {

    let linea ="";

for (let espacio= n; espacio > fila; espacio--) {
    linea += " ";
}
for (let num = 1; num <= fila; num++) {
    linea += num;
}
 for (let num = fila - 1; num >= 1; num--) {
        linea += num;
    }
    console.log(linea);
}



let suma = 0;

for (let num = 2; num <= 60; num += 2) {
    suma += num;
} console.log("la suma es: " + suma);



let letras= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let fila = letras.length; fila >= 1; fila--) {
    let linea ="";

for ( let columna = 0; columna < fila; columna++) {
    linea += letras[columna];

}
  console.log(linea);
}



let numero = 5;
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
}

console.log("El factorial de " + numero + " es: " + factorial);




let m = 4;
let n1 = 6;
let caracter = "*";

for (let fila = 1; fila <= m; fila++) {

    let linea = "";

    for (let columna = 1; columna <= n; columna++) {
        linea += caracter;
    }

    console.log(linea);
}



let filas1 = 5;

for (let i = 1; i <= (2 * filas - 1); i++) {

    let linea = "";

    let espacios;
    let asteriscos;

    if (i <= filas) {
        espacios = filas - i;
        asteriscos = 2 * i - 1;
    } else {
        espacios = i - filas;
        asteriscos = 2 * (2 * filas - i) - 1;
    }

    for (let j = 1; j <= espacios; j++) {
        linea += " ";
    }

    for (let j = 1; j <= asteriscos; j++) {
        linea += "*";
    }

    console.log(linea);
}





