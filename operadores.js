// - + * / % **

let n1 = 10
let n2 = 5

//operadores aritmeticos
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2 ** 3)

//operadores de atribuição

let n3 = 25;
// n3 = n3 + 15;
//n3 **= 2;
n3 += 2;
console.log(n3);

//INCREMENTO E DECREMENTO

let i = 0;
//i += i; ou 
//i++
//console.log(i);
console.log(i--);

i++;
i++;
i++;

console.log(i);


//COMPARAÇÃO

/*
igualdade de valor ==
igualdade de valor e tipo ==
<,>, <=, >=,
!= valores diferentes
!== valores e tipos diferentes
*/  


console.log(n1, n2, n3);

let n5 = "10";
console.log(n1 === 10)    //console.log(n1 < 10)  //console.log(n1 > 10)  //console.log(n1 <= 10)  //console.log(n1 =< 10)  


console.log(n1 != "10")  
console.log(n1 !== "10")  

/* OPERADORES LÓGICOS

AND (&&)

OR ( || )

NOT (!)

-- PARA UMA PESSOA VIAJAR PARA O EXTEROR:
 
1 - PRECISA SER MAIOR DE 18 ANOS 

OU

2- ACOMPANHADOS COM OS PAIS

*/

let idade = 16;
//let paisPresentes = idade >= 18 || paisPresentes === true  //é booleano
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = idade >= 18 || paisPresentes && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);


