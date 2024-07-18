const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minutes");
const secEl = document.querySelector(".seconds");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerHTML = h;
    minEl.innerText = m;
    secEl.innerText = s;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();