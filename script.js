function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

document.addEventListener('keydown', function(event) {
    var key = event.key;
    if(/[0-9\+\-\*\/\.=]|Backspace|Enter/.test(key)){
        event.preventDefault();
        if(key === 'Enter'){
            calculate();
        } else if(key === '='){
            calculate();
        } else if(key === 'Backspace'){
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});