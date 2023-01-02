let url = "htpps://www.abdullahakpur.com " 
let dersAdi = "Modern Fizik dersi";

// 1 url kaç karakterlidir?
let sonuc;
sonuc = url.length;

// 2 dersadi kaç kelimeden oluşmaktadır?
sonuc = dersAdi.split(" ").length;

// 3 url https ile mi başlıyor?
//sonuc = url.startsWith("htpps");

sonuc = url.startsWith("htpps");

if (sonuc) {
    console.log("evet başlıyor");
}

// 4 dersadi içersinde dersi kelimesi var mı ?

if (dersAdi.indexOf("dersi") > -1) {
    console.log("var")
} else {
    console.log("hayır yok");
}

// 5 url ve kursadi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https: //www.abdullahakpur.com/istatiksel mekanik 2 

dersAdi = dersAdi.toLowerCase();
dersAdi = dersAdi.replaceAll("" ,"-");
dersAdi = dersAdi.replace("i","ı");

sonuc = `${url}/${dersAdi}`;

console.log(sonuc);