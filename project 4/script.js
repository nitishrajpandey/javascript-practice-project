// create random Number between 1 to 100
const Numbers = Math.floor(Math.random() * 100 +1)



const previousGuesses = document.querySelector('[data-previousGuesses]');
const previousGuessesText = document.querySelector('[data-previousGuessesText]');
let previous = [];

let noOfGuessLeft=10
let noOfGuess=0

let heading=document.querySelector('[data-heading]')
let subHeading=document.querySelector('[data-subHeading]')

const reset=document.querySelector('[data-resetButton]')




let submitButton = document.querySelector('[data-submitButton]')
submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    let inputValue = Number((document.querySelector('[data-inputValue]').value))
    let inputValue1 = document.querySelector('[data-inputValue]')
    
    let guessesRemaining=document.querySelector('[data-guessesRemaining]')
    let guessesRemainingText=document.querySelector('[data-guessesRemainingText]')

    let leftGuess=Number(guessesRemaining.textContent)

    let hint=document.querySelector('[data-hint]')


    



    if (leftGuess==1) {
        alert("game over")
        inputValue1.disabled = true;
        submitButton.disabled=true;
        heading.textContent="Game Over 😞☹️"

        inputValue1.style.display='none';
        submitButton.style.display='none';
        reset.style.display='initial'
        noOfGuess=noOfGuess+1
        hint.style.display='none';
        subHeading.style.display='block'
        subHeading.innerHTML=`your previous guess : ${previous} <br/> you Loss after try ${noOfGuess} attemps`


        previousGuesses.style.display='none'
        previousGuessesText.style.display='none'
        guessesRemaining.style.display='none'
        guessesRemainingText.style.display='none'
    }


    if (inputValue>0 && inputValue<=100) {
        
    

    if (inputValue === Numbers) {

        inputValue1.value=" "
        previous.push(inputValue)
        // previousGuesses.textContent=previous;
        // noOfGuessLeft=noOfGuessLeft-1
        // guessesRemaining.textContent=noOfGuessLeft
        inputValue1.disabled = true;
        submitButton.disabled=true;
        inputValue1.style.display='none';
        submitButton.style.display='none';
        heading.textContent="congratulations 🎉👏"
        reset.style.display='initial'
        noOfGuess=noOfGuess+1
        hint.style.display='none';
        subHeading.style.display='block'
        subHeading.innerHTML=`your previous guess : ${previous} <br/> you win in ${noOfGuess} attemps`

        previousGuesses.style.display='none'
        previousGuessesText.style.display='none'
        guessesRemaining.style.display='none'
        guessesRemainingText.style.display='none'




        
    }
    else {
        inputValue1.value=" "
        previous.push(inputValue)
        previousGuesses.textContent=previous;
        noOfGuessLeft=noOfGuessLeft-1
        noOfGuess=noOfGuess+1
        guessesRemaining.textContent=noOfGuessLeft

        if (inputValue>Numbers) {
            hint.textContent=" Number is to High"
        }
        else if(inputValue<Numbers){
            hint.textContent="number is to Low"
        }
        else if(inputValue===Numbers){
            hint.style.display='none';
        }
        
    }
}

else{
    alert("please enter between 1 to 100")
}

})