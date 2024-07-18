const inputEl=document.querySelector(".input");
//console.log(inputEl.checked);

const bodyEl=document.querySelector("body");
inputEl.checked=JSON.parse(localStorage.getItem("mode"));


function updateBody() {
    console.log( typeof JSON.stringify(inputEl.checked));
    if (inputEl.checked) {
        bodyEl.style.background="black";
    }
    else{
        bodyEl.style.background="white";
    }
}

inputEl.addEventListener("input",()=>{
    updateBody();
})

function updateLocalStorage() {
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}