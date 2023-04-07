const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(e) {
    const enteredText = e.target.value;
    const eneteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - eneteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);