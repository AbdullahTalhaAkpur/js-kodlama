let ogrenciler = ["çınar","yiğit","ecem"];
sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("-");

// eleman silme
// sonuc = ogrenciler.pop(); / // son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift(); //ilk eleman silinir.

// eleman ekleme
// sonuc = ogrenciler.push("Sena");
// sonuc = ogrenciler.unshift("Sena");

let markalar1 = ["mazda","toyota"];
let markalar2 = ["mercedes","audi"];
let markalar3 = ["mustang","volkswagen"];

// sonuc = markalar1.concat(markalar2,markalar3);
// markalar1.splice(0, 1, "bmw","opel"); // splice eleman siler ve ekler. 
sonuc = markalar1.splice(0,1);

console.log(sonuc);
console.log(markalar1);