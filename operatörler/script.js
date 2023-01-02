// Aritmetik Operatörler
let sonuc;
let a = 10, b = 20, c = 30;

sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % b;
//sonuc = a++;  // a + 1 
//sonuc = ++a; 
//sonuc = --a;
//sonuc = a--;

//Atama Operatörleri :Değişkene değer atama
sonuc = a;
sonuc += a // sonuc = sonuc + a
sonuc -= a // sonuc = sonuc - a
sonuc *= a // sonuc = sonuc * a
sonuc /= a // sonuc = sonuc / a
sonuc %= a // sonuc = sonuc % a 

// Karşılaştırma Operatörü
sonuc = (a == b)
sonuc = (a != b) //eşit değilmi anlamında
sonuc = (3 === "3") // değer type kontrolü yapar
sonuc = (a > b)
sonuc = (a < b)
sonuc = (a <= b)
sonuc = (a >= b)

console.log(sonuc);
