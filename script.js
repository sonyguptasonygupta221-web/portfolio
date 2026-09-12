const text = "Computer Science Student";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}

window.onload = function () {
    typingEffect();
};


// Welcome button
function welcome() {
    alert("Hello! Welcome to my Portfolio 😊");
}


// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}


// Scroll to top button
window.onscroll = function () {
    let button = document.getElementById("topButton");

    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}