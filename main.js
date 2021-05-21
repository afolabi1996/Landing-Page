 //DOM ELEMENTS
const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')


//ShowTime
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}
function showDate(){
    let today = new Date(),
    day =  today.getDay(),
    month = today.getUTCMonth(),
    year = today.getUTCFullYear();

    // Set Date  
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet () {
    let today = new Date ();
    hour = today.getHours();

   if (hour < 12 ) {
        // Morning
        document.body.style.backgroundImage = "url('./img1.jpg')";

        greeting.textContent = 'Good Morning';
    } else if(hour < 17 ) {
        // Afternoon
        document.body.style.backgroundImage = "url('./Osan.jpg')";
        document.body.style.color = 'white'
        greeting.textContent = 'Good Afternoon';
    

    } else {
        // Evening
        document.body.style.backgroundImage = "url('./afternoon.jpg')";
        greeting.textContent = 'Good Evening';
        
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName(e) {
    if(e.type === 'Keypress') {
// Make Sure enter is pressed
if(e.which == 13 || e.keyCode == 13){
    localStorage.setItem('name', e.target.innerText);
    name.blur();
}
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}
// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';

    } else {
        focus.textContent = localStorage.getItem('focus');
    }
    document.body.style.color = 'white'
}
name.addEventListener('Keypress', setName);
name.addEventListener('blur',setName)




//run
showTime();
setBgGreet();
getName();
getFocus();