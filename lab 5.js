function 111() {
    let age = parseInt(document.getElementById("age").value);
    if (age > 18) {
        console.log("Tak");
    } else {
        console.log("Nie");
    }
}

function 222() {
    let temp = parseInt(document.getElementById("temp").value);
    console.log((temp * 2) + 30);
}

const tab = [1, 2, 3, 70698, 5, 6];
var suma = 0;

console.log("suma wartosci.");
for (var i = 0; i < tab.length; i++) {
    suma += tab[i];
}
console.log(suma);

console.log("parzyste.");
for (var i = 0; i < tab.length; i++) {
    if (tab[i] % 2 == 0) {
        console.log(tab[i]);
    }
}

console.log("wartosci razy 3.");
for (var i = 0; i < tab.length; i++) {
    console.log(tab[i] * 3);
}

console.log("index numeru albumu.");
for (var i = 0; i < tab.length; i++) {
    if (tab[i] == 69945) {
        console.log(i);
        break;
    }
}

console.log("srednia");
console.log(suma / tab.length);

console.log("najwieksza liczba");
var max = tab[0];
for (var i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
console.log(max);

var fib = [1, 1];
for (var i = 0; i < 98; i++) {
    fib.push(fib[i] + fib[i + 1]);
}
console.log(fib);

