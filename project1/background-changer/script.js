const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    //background neden yazarken çıkmıyor
    document.body.style.backgroundColor = randomBg();
  
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}