var isim = "Ahmet"; // global scopes hepsini kapsar.

function yazdir() {
    var isim = "Ayşe";
    var yas  = 21;
    console.log("function scopes: ", isim, yas);
}


yazdir();
console.log(isim);
// console.log(yas);