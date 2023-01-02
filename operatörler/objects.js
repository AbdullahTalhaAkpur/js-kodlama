// dict, json
let kullaniciA  = {
    "ad": "Abdullah",
    "soyad": "Akpur",
    "yas": 24,
    "adres": {
        "sehir": "İzmir",
        "ilce": "karşıyaka"
    },
    "hobiler": ["sinema","spor"]
}
let kullaniciB  = {
    "ad": "Nazif",
    "soyad": "Kutlu",
    "yas": 24,
    "adres": {
        "sehir": "Bursa",
        "ilce": "Orhangazi"
    },
    "hobiler": ["sinema","spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad;

let urunler = [
    {
        "urun_adi":"samsung galaxy a3",
        "urun_fiyat": 3400
    },
    {
        "urun_adi":"samsung galaxy a6",
        "urun_fiyat": 7000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);
