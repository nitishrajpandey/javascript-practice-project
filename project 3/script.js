function colorGenerator() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}

// ##################################################


function colorGenerator2() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}


// ###############################################


function colorGenerator3() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}


// ##########################################


function colorGenerator4() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}


// #########################


function colorGenerator5() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}


// ###############################


function colorGenerator6() {
    const letter='1234567890ABCDEF';
    let color='#';


    for (let index = 0; index <6; index++) {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}



// #######################



function changeBackgroundColor() {
    const body=document.querySelector('[data-body]')
    const randomColor=colorGenerator();
    body.style.backgroundColor = randomColor
}
setInterval(changeBackgroundColor, 1000);

// ######################################################


function changeBackgroundColor2() {
    const displayTime=document.querySelector('[data-displayTime]')
    const randomColor=colorGenerator2();
    // displayTime.style.backgroundColor = randomColor
    // displayTime.style.color = randomColor
    displayTime.style.borderColor = randomColor

}
setInterval(changeBackgroundColor2, 1000);

// #####################################################

function changeBackgroundColor3() {
    const displayTime=document.querySelector('[data-displayTime]')
    const randomColor=colorGenerator3();
    // displayTime.style.backgroundColor = randomColor
    displayTime.style.color = randomColor
    // displayTime.style.borderColor = randomColor
}
setInterval(changeBackgroundColor3, 1000);



// ######################################

function changeBackgroundColor4() {
    const displayTime=document.querySelector('[data-displayTime]')
    const randomColor=colorGenerator4();
    const hoursElement = document.getElementById('hours');
    hoursElement.style.color=randomColor
}
setInterval(changeBackgroundColor4, 1000);


// ##########################


function changeBackgroundColor5() {
    const displayTime=document.querySelector('[data-displayTime]')
    const randomColor=colorGenerator5();
    const secondsElement = document.getElementById('seconds');
   
    secondsElement.style.color=randomColor
}
setInterval(changeBackgroundColor5, 1000);

// ############################


function changeBackgroundColor6() {
    const displayTime=document.querySelector('[data-displayTime]')
    const randomColor=colorGenerator6();
    const hoursElement = document.getElementById('hours');
    hoursElement.style.color=randomColor
}
setInterval(changeBackgroundColor6, 1000);







// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


function updateTime() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}


updateTime();

setInterval(updateTime, 1000);