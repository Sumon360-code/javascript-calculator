let screenInput = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let emptyString = "";
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            emptyString = emptyString + buttonText;
            screenInput.value = emptyString;
        }
        else if(buttonText == 'C'){
            emptyString = "";
            screenInput.value = emptyString;
        }
        else if(buttonText == '='){
            screenInput.value = eval(emptyString);
        }
        else{
            emptyString = emptyString + buttonText;
            screenInput.value = emptyString;
        }
    })
}