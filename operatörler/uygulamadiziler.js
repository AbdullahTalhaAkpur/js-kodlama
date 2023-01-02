// 1- "MUZ","ÇİLEK","Kavun","ŞEFTALİ" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Muz","Çilek","Kavun","ŞEFTALİ"];


// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length);


// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]); //MUZ
console.log(meyveler[meyveler.length - 1]); // Şeftali


// 4- Muz dizinin bir elemanıdır?
console.log(meyveler.includes("Muz"));
 console.log(meyveler.indexOf("Muz"));


// 5- Kiraz meyvesi listenin sonuna ekleyin
meyveler[meyveler.length] = "Kiraz";
console.log(meyveler);

// 6- Dizinin son 2 elemanını siliniz
meyveler.pop(); // pop dizi elemanını siler
meyveler.pop();
// meyveler.splice(meyveler.length - 2, 2); bu şekilde dizi elemanı silersin.
console.log(meyveler);


// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
   Öğrenci 1: ALİ OSMAN 2010 (70,60,80)
   Öğrenci 2: AHMET EFE 2012 (80,80,90)
   Öğrenci 3: AYŞE ÇELİK 2009 (60,60,70)
   */

let ogr1 = [
    "ALİ" ,
    "OSMAN",
      2010,
    [70,60,80]
];

let ogr2 = [
    "AHMET",
    "EFE",
    2012,
    [80,80,90]
];

let ogr3 = [
    "AYŞE",
    "ÇELİK",
    2009,
    [60,60,70]
];

let ogrenciler = [ogr1,ogr2,ogr3];

// console.log(aliosman_yas, ahmetefe_yas, ayşecelik_yas)
let aliosman_yas = new Date().getFullYear() - ogrenciler[0] [2];
let ahmetefe_yas = new Date().getFullYear() - ogrenciler[1] [2];
let ayşecelik_yas = new Date().getFullYear() - ogrenciler[2] [2];

let aliosman_not = (ogrenciler[0],[3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ahmetefe_not = (ogrenciler[1],[3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ayşecelik_not =  (ogrenciler[2],[3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;


console.log(aliosman_not, ahmetefe_not, ayşecelik_not);