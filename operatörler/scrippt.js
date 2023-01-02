let dersAdi = " Nano Teknoloji . ";

let sonuc;

sonuc = dersAdi.toLowerCase(); //büyük olan harfleri küçültür
sonuc = dersAdi.toUpperCase(); // küçük olan harfleri büyütür.
sonuc = dersAdi.length;
sonuc = dersAdi.slice(0, 6);
sonuc = dersAdi.slice(-10);
sonuc = dersAdi.slice(-10, -5);

sonuc = dersAdi.substring(0, 6);
sonuc = dersAdi.substring(10);

sonuc = dersAdi.replace("Eğitimi","Kursu");
sonuc = dersAdi.trim();
sonuc = dersAdi.trimEnd();
sonuc = dersAdi.trimStart();

sonuc = dersAdi.indexOf("Nano");
sonuc = dersAdi.split(" ");
sonuc = dersAdi.split(" ") [1];
sonuc = dersAdi.split(" ") [2];


console.log(sonuc);