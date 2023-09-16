var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.error("Error occurred:", error);
    alert("Something went wrong. Please try again later.");
}

async function translateText() {
    try {
        var inputText = txtInput.value.trim(); // Trim whitespace
        if (!inputText) {
            alert("Please enter a sentence to translate.");
            return;
        }

        // Show loading indicator here if needed

        var response = await fetch(getTranslationURL(inputText));
        var json = await response.json();
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    } catch (error) {
        errorHandler(error);
    }
}

btnTranslate.addEventListener("click", translateText);
