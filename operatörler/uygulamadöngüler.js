let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

// for (let sayi of sayilar) {
//     console.log(sayi * sayi);
// }

// 2- saayilar listesinden hangi sayılar 5 'in katıdır?
// for (let i=0; i<sayilar.length; i++) {
//     if(sayilar[i] % 5 == 0){
//         console.log(sayilar[i]);
//     }
// }

// 3- sayilar listesindeki çift sayı ların toplamını bulunuz.
// let toplam = 0;
// for(let i in sayilar){
//     if (sayilar[i] % 2 == 0){
//         toplam += sayilar[i];
//     }
// }
// console.log(toplam);

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"];

// for(let urun of urunler){
//     console.log(urun.toUpperCase());
// }

// 5- urunler listesinde içinde samsung geçen kaç ürün vardır?
// let urunler = ["iphone 12","samsung s22","iphone13","samsung s23","samsung s20"];
// let adet = 0;

// for(let urun of urunler) {
//     if(urun.includes("samsung")) {
//         adet++;
//     }
// }

// console.log(adet);

// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
let ogrenciler = [
    {"ad":"halil", "soyad":"akpınar", "notlar": [60,70,60]},
    {"ad":"melis", "soyad":"yılmaz","notlar":[80,70,80]},
    {"ad":"çınar", "soyad":"kılıç", "notlar":[70,70,60]}
];

for(let ogrenci of ogrenciler){
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
   for(let not of ogrenci.notlar){
    not_toplam += not;
    adet++;
   }

   ortalama = not_toplam / adet;

   console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ögrencinin not ortalaması : ${ortalama}.`);

   if(ortalama>=50) {
    console.log("başarılı.");
 } else {
     console.log("başarısız.");
 }
 }
