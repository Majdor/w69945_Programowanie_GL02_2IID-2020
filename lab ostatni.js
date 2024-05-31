const emailField = document.getElementById('emaill');
emailField.addEventListener('input', validateEmail);
const passwordField = document.getElementById('passwordd');
passwordField.addEventListener('input', validatePassword);
const nameField = document.getElementById('namee');
nameField.addEventListener('input', validateName);
const surnameField = document.getElementById('surnamee');
surnameField.addEventListener('input', validateSurname);
const passwordField2 = document.getElementById('passwordd2');
passwordField2.addEventListener('input', validatePasswordMatch);
const form = document.querySelector('form');

function validateEmail() {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(emailField.value)) {
 emailField.setCustomValidity("Proszę podać poprawny adres e-mail.");
 } else {
 emailField.setCustomValidity("");
 }
}

function validatePassword() {
 const passwordRegex = /^.{8,}$/;
 if (!passwordRegex.test(passwordField.value)) {
 passwordField.setCustomValidity("Proszę podać poprawne hasło zawierające minimum 8 znaków.");
 } else {
 passwordField.setCustomValidity("");
 }
}

function validateName() {
 const nameRegex = /^[A-Z][a-zA-Z\- ]{1,}$/;
 if (!nameRegex.test(nameField.value)) {
 nameField.setCustomValidity("Proszę podać poprawne imię");
 } else {
 nameField.setCustomValidity("");
 }
}

function validateSurname() {
 const surnameRegex = /^[A-Z][a-zA-Z\- ]{1,}$/;
 if (!surnameRegex.test(surnameField.value)) {
 surnameField.setCustomValidity("Proszę podać poprawne nazwisko");
 } else {
 surnameField.setCustomValidity("");
 }
}

function validatePasswordMatch() {
 if (passwordField.value !== passwordField2.value) {
 passwordField2.setCustomValidity("Hasła muszą się zgadzać.");
 } else {
 passwordField2.setCustomValidity("");
 }
}

form.addEventListener('submit', (event) => {
 validateEmail();
 validatePassword();
 validateName();
 validateSurname();
 validatePasswordMatch();

 if (!form.checkValidity()) {
 event.preventDefault();
 }
});


function Car(mark, model, productionYear, color) {
    this.mark = mark;
    this.model = model;
    this.productionYear = productionYear;
    this.color = color;
    this.speed = 0;

    this.increaseSpeed = (value) => {
        this.speed += value;
    }

    this.decreaseSpeed = (value) => {
        this.speed -= value;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    this.getInfo = () => {
        return `${this.mark} ${this.model} (${this.productionYear}), Kolor: ${this.color}, Prędkość: ${this.speed}`;
    }
}

const car1 = new Car('Volkswagen', 'Golf', 2020, 'czarny');
const car2 = new Car('Audi', 'A3', 2021, 'biały');

car1.increaseSpeed(50);
car2.increaseSpeed(30);

car1.decreaseSpeed(20);
car2.decreaseSpeed(10);

console.log(car1.getInfo()); 
console.log(car2.getInfo()); 

