let paragraphElement = document.querySelector('p');
let inputElement = document.querySelector('input');
let productName = document.getElementById('productName');

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked';
}
function retrieveUserInput(e){
    //let eneteredText = inputElement.value;
    let eneteredText = e.target.value;
    let length = e.target.value.length;
    let paragraphElement = document.getElementById('textLength');

    console.log(eneteredText);
    paragraphElement.textContent = length;
}

paragraphElement.addEventListener('click', changeParagraphText);
inputElement.addEventListener('input', retrieveUserInput);

productName.addEventListener('input', retrieveUserInput);