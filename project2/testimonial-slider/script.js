const testimonial = [
    {
        name: "Cherise G.",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5ZxYtpuBAYV-F8fGlsrDQtjw0nVw3Ocex_zgQItsRQd4cfoZhfWG8Im1bw87r_NBH2k&usqp=CAU",
        text: "I am extremely satisfied with the exceptional quality and performance of Apple laptops. The sleek design and impressive features make it a top choice for professionals like me. I highly recommend Apple to anyone in need of reliable technology."
    },

    {
        name: "Emily Jones",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5ZxYtpuBAYV-F8fGlsrDQtjw0nVw3Ocex_zgQItsRQd4cfoZhfWG8Im1bw87r_NBH2k&usqp=CAU",
        text: "I have been amazed by the sleek design and powerful performance of my new Apple laptop. It has truly revolutionized the way I work and stay connected. I highly recommend Apple to anyone in need of a reliable and cutting-edge technology.",
    },
    {
        name: "Sophia Anderson",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5ZxYtpuBAYV-F8fGlsrDQtjw0nVw3Ocex_zgQItsRQd4cfoZhfWG8Im1bw87r_NBH2k&usqp=CAU",
        text: "I am truly impressed with the sleek design and powerful performance of Apple laptops. They exceed all expectations and have truly revolutionized the way I work. I highly recommend Apple to anyone seeking top-notch quality."
    },
    {
        name: "Samantha Reynolds",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5ZxYtpuBAYV-F8fGlsrDQtjw0nVw3Ocex_zgQItsRQd4cfoZhfWG8Im1bw87r_NBH2k&usqp=CAU",
        text: "I am extremely impressed with Apple's sleek and powerful laptops. The design is top-notch and the performance is unmatched. Choosing an Apple laptop was the best decision I could have made for my work. Thank you!"
    },
];

const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");

let index=0;
updateTestimonial();

function updateTestimonial() {
    const {name,photoUrl,text}=testimonial[index];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    usernameEl.innerText=name;
    index++;
    if(index==testimonial.length){
        index=0;
    }

    setTimeout(() => {
        updateTestimonial()
    }, 4000);
}