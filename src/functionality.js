const logo_elem = document.getElementById("logo");
const title_elem = document.getElementById("title");

const title_text = "Welcome\xa0to\xa0my\xa0Website!";
var text = "";
title_elem.innerText = text;
var title_interval;
var isTyping = false;
title_interval = setInterval(addLetter, 50);

logo_elem.addEventListener("mouseenter", (event) => {
    title_elem.innerText = "";
    if (isTyping) {
        clearInterval(title_interval);
    } 
    title_interval = setInterval(addLetter, 50);
}, false);

function addLetter() {
    text = title_elem.innerText;
    length = text.length;
    if (length < title_text.length) {
        text += title_text[length];
        title_elem.innerText = text;
        isTyping = true;
    } else {
        clearInterval(title_interval);
        isTyping = false;
    }
}


