// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     // this.fullName = function() {
//     // return this.tttle +this.author + this.year;
//     // }
//     function bookInfo(book) {
//         return book.title + " - " + book.author + " (" + book.year + ")";
//     }
// Konstruktor obiektu reprezentującego książkę
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  function bookInfo(book) {
    return book.title + " - " + book.author + " (" + book.year + ")";
  }
  
  var myBook = new Book("Władca Pierścieni", "J.R.R. Tolkien", 1954);
  console.log(bookInfo(myBook));
  




  function Student(imie, nazwisko, album, ocena1, ocena2, ocena3) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.album = album;
    this.ocena1 = ocena1;
    this.ocena2 = ocena2;
    this.ocena3 = ocena3;
  
    this.obliczSrednia = function() {
      return + (this.ocena1 + this.ocena2 + this.ocena3) / 3;
    };
  }


  
  var student1 = new Student("Kacper", "Majda", "w69945", 4, 5, 3);
  
  var sredniaOcen = student1.obliczSrednia();
  
  console.log("Średnia ocen studenta: " + sredniaOcen);





function Samochod(marka, model, rokprodukcji, kolor, predkosc) {
    this.marka = marka;
    this.model = model;
    this.rokprodukcji = rokprodukcji;
    this.kolor = kolor;
    this.predkosc = predkosc;
  
    this.zwiekszPredkosc = function(wartosc) {
      this.predkosc += wartosc;
    };
  
    this.zmniejszPredkosc = function(wartosc) {
      this.predkosc -= wartosc;
    };
  
    this.informacjeOSamochodzie = function() {
      return this.marka + " " + this.model + " (" + this.rokprodukcji + "), Kolor: " + this.kolor + ", Prędkość: " + this.predkosc;
    };
  
    this.wiekSamochodu = function() {
      var obecnyRok = new Date().getFullYear();
      return obecnyRok - this.rokprodukcji;
    };
  }
  
  var mojSamochod = new Samochod("Toyota", "Corolla", 2020, "czarny", 0);
  mojSamochod.zwiekszPredkosc(50);
  console.log(mojSamochod.informacjeOSamochodzie());
  mojSamochod.zmniejszPredkosc(20);
  console.log(mojSamochod.informacjeOSamochodzie());
  console.log("Wiek samochodu: " + mojSamochod.wiekSamochodu() + " lat");



  function utworzProstokat() {
    var dlugosc = parseInt(document.getElementById("dlugosc").value);
    var szerokosc = parseInt(document.getElementById("szerokosc").value);
  
    var prostokat = {
      dlugosc: dlugosc,
      szerokosc: szerokosc,
  
      pole: function() {
        return this.dlugosc * this.szerokosc;
      },
  
      obwod: function() {
        return 2 * (this.dlugosc + this.szerokosc);
      },
  
      czyKwadrat: function() {
        return this.dlugosc === this.szerokosc;
      },
  
      informacje: function() {
        var kwadratInfo = this.czyKwadrat() ? "Prostokąt jest kwadratem." : "Prostokąt nie jest kwadratem.";
        return "Długość: " + this.dlugosc + ", Szerokość: " + this.szerokosc + "<br>" +
               "Pole: " + this.pole() + "<br>" +
               "Obwód: " + this.obwod() + "<br>" +
               kwadratInfo;
      }
    };
  
    var wynikDiv = document.getElementById("wynik");
    wynikDiv.innerHTML = prostokat.informacje();
  }
  


  
  
  
  