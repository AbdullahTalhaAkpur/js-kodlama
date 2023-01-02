let sonuc;

sonuc = 15;
sonuc = "13"; //"13" string olarak algılar.
sonuc = Number("13");
sonuc = parseInt("10.5");
sonuc = parseFloat("10.5");
sonuc = parseInt("a10"); //10a sayıyı alır.
sonuc = isNaN("10a"); // isNaN("10") false verir
let sayi = 15.67894;

sonuc = sayi.toPrecision(5);// 5 basamak
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.8);
sonuc = Math.ceil(2.2); //yukarıya yuvarlar
sonuc = Math.floor(2.8);//alta yuvarlar.
sonuc = Math.sqrt(25); //karekök bulma için
sonuc = Math.pow(2,3); //üslü sayılar işlemi için 
sonuc = Math.abs(-24); //mutlak değerli ifadeler için
sonuc = Math.min(-2,4,3,1,0); // minumum  değerli ifadeyi seçer
sonuc = Math.max(-2,4,3,1,0); // maximum  değerli ifadeyi seçer
sonuc = Math.random(); //rastgelee 0 ve 1 arasında sayı atar.
sonuc = Math.floor(Math.random() * 10) + 1; //


console.log(typeof sonuc);
console.log(sonuc);