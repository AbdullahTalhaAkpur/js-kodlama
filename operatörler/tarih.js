let simdi = new Date(); //şimdiki tarih ve saat bilgisi

sonuc = simdi;
sonuc = simdi.getDate();//şimdiki tarih bilgisini çeker
sonuc = simdi.getDay();//gün bilgisi. 0:pazar, 1:pazartesi , 2:salı , 3: çarşamba , 4: perşembe , 5: cuma , 6:cumartesi
sonuc = simdi.getFullYear(); // yıl
sonuc = simdi.getHours(); //saat
sonuc = simdi.getTime(); //saati milisecond cinsinden verir.

// Set Methods
//simdi.setFullYear(2024);
simdi.setMonth(9); // 0: OCAK AYINA KARŞILIK GELİR.
simdi.setDate(15);

sonuc = simdi;

let dogumtarihi = new Date(1993, 5, 13);
sonuc = simdi.getFullYear() - dogumtarihi.getFullYear();
sonuc = simdi - dogumtarihi;

let milisecond = simdi - dogumtarihi;
let saniye = milisecond / 1000; //saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun =  saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);
