let ad = "Abdullah" ;
let soyad = "Akpur" ;
let yas = 24;
let sehir = "Adana";

 let mesaj = "Benim adım " +  ad  +  ' ve soyadım '  + soyad  +  '.'  +  sehir  +  '\' da yaşıyorum.'  + 'Emekliliğe ' + (65 - yas) +  ' yılım kaldı.' ;

//backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. 
  ${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`;
console.log(mesaj);
 //ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + ( 65 - yas) +  " yıl kaldı." : "Zaten emekli oldunuz";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. 
 ${sehir}'de yaşıyorum.${emeklilik}` ;
