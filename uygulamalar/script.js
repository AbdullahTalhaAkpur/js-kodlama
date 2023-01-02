// OOP: NESNE TABANLI PROGRAMLAMA
// OBJECT
// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolEt("c"));
// console.log(soru2.cevabiKontrolEt("b"));

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
  return cevap === this.dogruCevap
}

let soru1 = new  Soru("Hangisi javascript paket yönetim uygulamasıdır", {
  a: "Node.js", b:"Typescript", c: "Npm"
}, "c");
let soru2 = new  Soru("Hangisi .net paket yönetim uygulamasıdır", {
    a: "Node.js", b:"Nuget", c: "Npm"
  }, "b");
  
  let sorular = [
    new  Soru("1-Hangisi javascript paket yönetim uygulamasıdır", {
      a: "Node.js", b:"Typescript", c: "Npm"
    }, "c"),

    new  Soru("2-Hangisi javascript paket yönetim uygulamasıdır", {
      a: "Node.js", b:"Typescript", c: "Npm"
    }, "c"),
    new  Soru("3-Hangisi javascript paket yönetim uygulamasıdır", {
      a: "Node.js", b:"Typescript", c: "Npm"
    }, "c"),
    new  Soru("4-Hangisi javascript paket yönetim uygulamasıdır", {
      a: "Node.js", b:"Typescript", c: "Npm"
    }, "c"),
  ];

    function Quiz(sorular) {
      this.sorular = sorular;
      this.soruIndex = 0;
    }

    Quiz.prototype.soruGetir = function() {
    return  this.sorular[this.soruIndex];
    }

    const quiz = new Quiz(sorular);

    document.querySelector(".btn_start").addEventListener("click", function() {
      if (quiz.sorular.length != quiz.soruIndex) {
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
      } else {
        console.log("quiz bitti");
      }
    })
