const sealButton = document.getElementById("seal");

sealButton.addEventListener("click", () => {

    // Open the envelope

});

const subtitleText = "A Love Letter From";
const nameText = "Khristian & Kei";

const subtitle = document.getElementById("typing-subtitle");
const name = document.getElementById("typing-name");

let subtitleIndex = 0;
let nameIndex = 0;

function typeSubtitle() {
    if (subtitleIndex < subtitleText.length) {
        subtitle.textContent += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeSubtitle, 70);
    } else {
        setTimeout(typeName, 300); // konting pause bago names
    }
}

function typeName() {
    if (nameIndex < nameText.length) {
        name.textContent += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 120);
    }
}

window.addEventListener("load", () => {
    setTimeout(typeSubtitle, 800);
});