//operadores en js

//aritmeticos
console.log("aritmeticos");
let suma = 7 + 2;
console.log(suma);
let resta = 5 - 2;
console.log(resta);
let multiplicacion = 3 * 5;
console.log(multiplicacion);
let division = 4 / 2;
console.log(division);
let modulo = 10 % 4;
console.log(modulo);
let sumaMultiplicacionModulo = 2 + 4 * 3 % 3;
console.log(sumaMultiplicacionModulo);
let restaMultiDivSuma = 5 - 7 * 8 / 2 + 3;
console.log(restaMultiDivSuma);

//comparacion
console.log("\ncomparacion");
let mayorQue = 10 > 5;
console.log(mayorQue);
let mayorIgualQue = 13 >= 14;
console.log(mayorIgualQue);
let menorQue = 10 < 20;
console.log(menorQue);
let menorIgualQue = 25 <= 5;
console.log(menorIgualQue);
let igualQue = "Hola" === "hola";
console.log(igualQue);
let diferenteQue = "Hola" !== "hola";
console.log(diferenteQue);

//logicos
console.log("\nlogicos");
let and = true && true;
console.log(and);
let or = false || true;
console.log(or);
let not = !false;
console.log(not);

//estructuras de datos
const persona = {
    nombre: "carlos",
    edad: 25,
    ocupacion: "Desarrollador"
};
console.log("\nMi nombre es " + persona.nombre + " y tengo " + persona.edad + " años");
persona["apellido"] = "Perez";
console.log(persona);
persona["ci"] = "1234567";
console.log(persona);
persona.nombre = "pedrito";
console.log(persona);
persona.edad = 30;
console.log(persona);
persona.ocupacion = "programador";
console.log(persona);

const colores = ["verde", "rojo", "azul"];
console.log("\n")
console.log(colores);
console.log(colores.length);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
for (let i = 0; i < colores.length; i++) {
    console.log("Elemento: "+ colores[i] + ", indice: "+ i);
}

colores.push("naranja");
colores.push("cafe");
console.log(colores);
colores.reverse();
console.log(colores);
colores.sort();
console.log(colores);
colores.push("NEGRO");
colores.push("BLANCO");
console.log(colores);
colores.sort();
console.log(colores);
colores.push(1);
colores.push(7);
colores.push(3);
console.log(colores);
colores.push(true);
colores.push(false);
console.log(colores);
colores.sort();
console.log(colores);
colores.push([8,2,6]);
console.log(colores);
var elemento = colores.pop();
console.log(elemento);
console.log(colores);