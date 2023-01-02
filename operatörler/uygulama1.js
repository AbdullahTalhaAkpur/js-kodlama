//What number's bigger?

let sayi1 = 23;
let sayi2 = 15;
// function greaterNum(num1, num2) {
// if (num1 > num2) {
//   return num1;
// } else {
//   return num2;
// }
// }
//console.log(greaterNum(5, 10));
if (sayi1 > sayi2) {
      console.log(sayi1);
 } else {
     console.log(sayi2);
 }

function helloworld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola,Mundo';
    } else {
        return 'Hello,World';
    }
}

console.log(helloworld('en'));
console.log(helloworld('fr'));
console.log(helloworld('es'));
