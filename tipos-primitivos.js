//strings, number(int, floats), boolean
//undefined, null, symbol (ES2015 = Es6)

let minhaVar = "minha string";
let minhavar2  = "minha \'string\' com aspas duplas";
var minhavar3 = 'minha template literal';
//console.log(minhavar3);

let idade = 40;
//let msg = "eu possuo " + idade + " anos";
let msg = `eu possuo ${idade}  anos`;

console.log(msg);
console.log(" Hello "+ " world ")
//console.log(typeof msg, typeof idade, typeof minhaVar, " -- ", 20);  //tipo da sua variavel, typeof mostra
//console.log(typeof msg, typeof idade, typeof minhaVar, "---", 20);

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n2 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = false;
console.log(`isValid ${isValid}`);

let varTeste;
console.log(varTeste);
console.log(typeof  varTeste);
varTeste = 10;
console.log(typeof  varTeste, varTeste);