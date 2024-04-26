

const emailField = document.getElementById('emaill');
emailField.addEventListener('input', () => {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(emailField.value)) {
 emailField.setCustomValidity("Proszę podać poprawny adres e-mail.");
 }
 else{emailField.setCustomValidity("");  
}
})


const passwordField = document.getElementById('passwordd');
passwordField.addEventListener('input', () => {
    console.log("asd");
 const passwordRegex = /^.{8,}$/;;
 if (!passwordRegex.test(passwordField.value)) {
    
 passwordField.setCustomValidity("Proszę podać poprawne hasło zawierające minimum 8 znaków.");
 }
 else{passwordField.setCustomValidity("");  
}
})

const nameField = document.getElementById('namee');
nameField.addEventListener('input', () => {
    console.log("asd");
 const nameRegex = /^[A-Z][a-zA-Z\- ]{1,}$/;
 if (!nameRegex.test(nameField.value)) {
    
nameField.setCustomValidity("Proszę podać poprawne imię");
 }
 else{nameField.setCustomValidity("");  
}
})

const surnameField = document.getElementById('surnamee');
surnameField.addEventListener('input', () => {
    console.log("asd");
 const surnameRegex = /^[A-Z][a-zA-Z\- ]{1,}$/;
 if (!surnameRegex.test(surnameField.value)) {
    
surnameField.setCustomValidity("Proszę podać poprawne nazwisko");
 }
 else{surnameField.setCustomValidity("");  
}
})