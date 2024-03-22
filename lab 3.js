function zmienTekst() {
    document.getElementById("tekst").innerHTML = alert("Witaj na mojej stronie!");
    }
    
    for (var i = 0; i < 100; i++) {
        console.log(i);
    }

// {
//     var a = prompt("Podaj pierwszą liczbę")
//     var b = prompt("Podaj drugą liczbę")
//     alert(c = parseInt(a) + parseInt(b))
//     document.write("Wynik dodawania wynosi "+c)
// }



{setInterval(time,100);
    function time() {
    var date = new Date()
    var hour= date.getHours();
    var minute=date.getMinutes()
    var seconds= date.getSeconds()
    document.getElementById("asd").innerHTML= `${hour}:${minute}:${seconds}`
}
document.write(time())
}

function game(){
    alert("Podaj liczbę")
    var number = Math. floor(Math.random()* 100)
    var shot = -1;
    var count = 0;
while (number != shot) {
    shot = prompt(" ");
    count++;
    if(number < shot) {
        alert("Za mala");
    }
    else if(number > shot) {
        alert("Za duza");
}
else {
    alert(`Zgadles ${count}`)
}

}
}
