const monthNameEl=document.getElementById("month-name");
const dayNameEl=document.getElementById("day-name");
const dayNumberEl=document.getElementById("day-number");
const yearEl=document.getElementById("year");

const date=new Date();
const month=date.getMonth();
//const dayName=date.getDay();


monthNameEl.innerText=date.toLocaleString("tr",{
    month:"long"
})
dayNameEl.innerText=date.toLocaleString("tr",{
    weekday:"long"
})

dayNumberEl.innerText=date.getDate();
yearEl.innerText=date.getFullYear();