let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/heart.png') {
        myImage.setAttribute('src', 'images/minwei-lengzai-2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/heart.png');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUsername() {
    let myName = prompt('请填入你名字，谢谢。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '明维帅，' + myName + '也赞同。'
}

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '明维帅，' + storedName + '也赞同。'
}

myButton.onclick = function() {
    setUsername();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `明维帅，${myName}也赞同。`;
    }
}