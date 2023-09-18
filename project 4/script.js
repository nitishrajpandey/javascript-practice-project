// create random Number between 1 to 100
const Numbers = Math.floor(Math.random() * 100)
console.log(Numbers);

const previousGuesses = document.querySelector('[data-previousGuesses]');
let previous = [];




let submitButton = document.querySelector('[data-submitButton]')
submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    let inputValue = Number((document.querySelector('[data-inputValue]').value))
    let inputValue1 = document.querySelector('[data-inputValue]')
    let result = document.querySelector('[data-result]')

    console.log(typeof inputValue);
    if (inputValue === Numbers) {

        inputValue1.value=" "
        result.textContent="scussfull"

    }
    else {
        previous.push(inputValue)
        previousGuesses.textContent=previous;
    }
})