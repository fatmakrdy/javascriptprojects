const containerEl = document.querySelector(".container");
const carrers = ["Youtube", "Web Developer", "Freelancer", "Instructor"];
let carrersIndex = 0;
let characterIndex = 0;
updateText();
function updateText(params) {
    characterIndex++;
    containerEl.innerHTML = `
        <h1>I am a ${carrers[carrersIndex].slice(0, characterIndex)}</h1> `;
    if (characterIndex==[carrersIndex].length) {
        carrersIndex++;
        characterIndex=0; 
    }
    if(carrersIndex==carrers.length){
        carrersIndex=0;
    }
    setTimeout(updateText, 400);
}
