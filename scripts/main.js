// JavaScript source code

//const myHeading = document.querySelector('h1')
//myHeading.textContent = 'Hello world!'
//document.querySelector('h1').textContent = 'Hello world!'

//document.querySelector('ul').onclick = function () {
//    alert('Ouch! Stop poking me!');
//}

let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/my-image1.jpg') {
        myImage.setAttribute('src', './images/my-image2.jpg');
    } else {
        myImage.setAttribute('src', './images/my-image1.jpg');
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}


function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

