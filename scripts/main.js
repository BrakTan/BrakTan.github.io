let myImage = document.querySelector('img');

myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/index.png'){
        myImage.setAttribute('src', 'images/titoune.jpg');
    }else{
        myImage.setAttribute('src', 'images/index.png');
    }
})

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*function setUsername(){
    let myName = prompt('Veuillez saisir votre nom :');
    localStorage.setItem('nom', myName);
    myHeading.textContent = myName + " Love Titoune";
}

if (!localStorage.getItem('nom')){
    setUsername();
}else{
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = storedName + " Love Titoune";
}

myButton.addEventListener('click', function(){
    setUsername();
});*/