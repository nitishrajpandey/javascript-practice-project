const result =document.querySelector('[data-result-value]')
const calculate=document.querySelector('[data-calculate-value]')
const reset=document.querySelector('[data-reset-value]')
const form=document.querySelector('[data-form]')



form.addEventListener('submit',function(e){
    let height=document.querySelector('[data-height-value]')
    height=height.value;
    let weight=document.querySelector('[data-weight-value]')
    weight=weight.value;
    result.textContent=(weight / ((height * height) / 10000)).toFixed(2);
    e.preventDefault();
    reset.addEventListener('click',function(e){
        form.reset();
    })
    e.preventDefault();
})
