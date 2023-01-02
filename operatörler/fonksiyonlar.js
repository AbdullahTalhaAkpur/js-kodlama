// function selamlama() {
//     console.log("selamunaleyküm");
// }
// selamlama();

function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");
selamlama("iyi günler");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAbdullah = yasHesapla(1998);
let yasYasemin =  yasHesapla(1986);

console.log(yasAbdullah, yasYasemin);

function emekliliğeKaCyilkaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;
    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz");
    }
}

emekliliğeKaCyilkaldi(1998, "Abdullah");



