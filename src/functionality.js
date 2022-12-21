// manage welcome text in the top navbar
const logo_elem = document.getElementById("logo");
const welcome_elem = document.getElementById("welcome_text");

const welcome_text = "Welcome\xa0to\xa0my\xa0Website!";
var text = ".";
welcome_elem.innerText = text;
var welcome_interval;
var isTyping = false;
welcome_interval = setInterval(addLetter, 50);

logo_elem.addEventListener("mouseenter", (event) => {
    welcome_elem.innerText = ".";
    if (isTyping) {
        clearInterval(welcome_interval);
    } 
    welcome_interval = setInterval(addLetter, 50);
}, false);

function addLetter() {
    text = welcome_elem.innerText;
    if (text[0] == ".") {
        text = "";
    }
    length = text.length;
    if (length < welcome_text.length) {
        text += welcome_text[length];
        welcome_elem.innerText = text;
        isTyping = true;
    } else {
        clearInterval(welcome_interval);
        isTyping = false;
    }
}

// manage sidebar button
var sidebarOpen = true;
const sidebar_button = document.getElementById("sidebar_button");
const sidebar = document.getElementById("fullsidebar");

if (getCookie("sidebarOpen") == "false") {
    sidebarOpen = false;
    sidebar_button.src = (!sidebarOpen) ? "img/menu.png" : "img/exit.png";
} else {
    sidebar.style.animation = "open_sidebar 0.2s ease-out 0s 1 normal forwards";
}
sidebar_button.addEventListener("mousedown", (event) => {
    sidebar_button.src = (sidebarOpen) ? "img/menu.png" : "img/exit.png";
    if (sidebarOpen) {
        sidebar.style.animation = "close_sidebar 0.2s ease-out 0s 1 normal";
    } else {
        sidebar.style.animation = "open_sidebar 0.2s ease-out 0s 1 normal forwards";
    }
    sidebarOpen = !sidebarOpen;
    setCookie("sidebarOpen", sidebarOpen, 31);
}, false);
