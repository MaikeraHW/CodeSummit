const hamburger = document.getElementById("hamburger");
const headNav = document.getElementById("headNav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headNav.classList.toggle("active");
});

// Fecha o menu ao clicar em um item
document.querySelectorAll(".navListItem a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        headNav.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded",()=>{


    const cards = document.querySelectorAll(".projectCard");

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");


    let currentIndex = 0;

    let interval;


    function showProject(index){


        cards.forEach(card=>{
            card.classList.remove("active");
        });


        cards[index].classList.add("active");


    }



    function nextProject(){

        currentIndex++;

        if(currentIndex >= cards.length){
            currentIndex = 0;
        }


        showProject(currentIndex);

    }



    function prevProject(){

        currentIndex--;


        if(currentIndex < 0){

            currentIndex = cards.length - 1;

        }


        showProject(currentIndex);

    }



    function startAutoSlide(){

        interval = setInterval(()=>{

            nextProject();

        },5000);

    }



    function resetTimer(){

        clearInterval(interval);

        startAutoSlide();

    }



    nextButton.addEventListener("click",()=>{

        nextProject();

        resetTimer();

    });



    prevButton.addEventListener("click",()=>{

        prevProject();

        resetTimer();

    });



    const slider = document.querySelector(".ourProjectsSlider");


    slider.addEventListener("mouseenter",()=>{

        clearInterval(interval);

    });



    slider.addEventListener("mouseleave",()=>{

        startAutoSlide();

    });



    startAutoSlide();


});