function silnia (n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
    }
const liczba = 5;
const wynik = silnia(liczba);
console.log("Silnia liczby", liczba, "to", wynik);

const elementToToggle = document.getElementById('textToHide');

const toggleVisibilityButton = document.getElementById('toggleVisibilityButton');

toggleVisibilityButton.addEventListener('click', function() {
  const currentVisibility = window.getComputedStyle(elementToToggle).getPropertyValue('visibility');

  const newVisibility = currentVisibility === 'visible' ? 'hidden' : 'visible';

  elementToToggle.style.visibility = newVisibility;
});

const addButton = document.getElementById('addButton');
const textInput = document.getElementById('textInput');
const textList = document.getElementById('textList');

addButton.addEventListener('click', function() {
  const inputValue = textInput.value.trim();
  
  if (inputValue !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    textList.appendChild(listItem);
    textInput.value = ''; 
  }
});

function f(){
const imieInput = document.getElementById('imieInput');
const nazwiskoInput = document.getElementById('nazwiskoInput');
const tabelaBody = document.getElementById('tabelaBody');


  const imieValue = imieInput.value.trim();
  const nazwiskoValue = nazwiskoInput.value.trim();
  
  if (imieValue !== '' && nazwiskoValue !== '') {
    const newRow = tabelaBody.insertRow(); 
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    cell1.textContent = imieValue;
    cell2.textContent = nazwiskoValue;

    imieInput.value = '';
    nazwiskoInput.value = '';
  }

}














