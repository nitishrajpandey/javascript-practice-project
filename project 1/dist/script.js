
const allBoxes =document.querySelectorAll('[data-boxes]>div');
// console.log(allBoxes)
const body =document.querySelector('body');
allBoxes.forEach(function(box){
    box.addEventListener('click',function(e){
        // console.log(e.target);
        const targetBox=getComputedStyle(e.target); //all style are store to targetbox const
        const bgBoxColor=targetBox["backgroundColor"]; //find background style 
        // console.log(bgBoxColor)
        body.style.backgroundColor=bgBoxColor //copy background color to body
        const colorValue=document.querySelector('[data-Rbg-value]') //select element
        // console.log(colorValue)
        colorValue.textContent=bgBoxColor //store colore as output

        
    })
})