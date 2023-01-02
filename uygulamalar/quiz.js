function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.doğruCevapSayisi = 0;
  }

  Quiz.prototype.soruGetir = function() {
  return  this.sorular[this.soruIndex];
  }
