    
let slides = document.querySelectorAll(".heroimg img");
let index = 0;

function showSlide() {
    slides.forEach((img) => img.classList.remove("active"));

    index++;
    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(showSlide, 5000); // change every 3 sec
document.getElementById(`admission-enroll`).addEventListener("click",function(){
 const phone=`923090410247`;
    window.open(`https://wa.me/${phone}`,`_blank`);

})