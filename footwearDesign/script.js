const slides =document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');
const carousel = document.getElementById('carousel');
const title = document.querySelector('h1');

const SLIDES_COUNT = slides.length;

let current_slide = 0;

left.addEventListener('click',()=>{
    current_slide--;
    if(current_slide<0){
        current_slide=SLIDES_COUNT-1;
    }
    
    updateCarousel();
});

right.addEventListener('click',()=>{
    current_slide++;
    if(current_slide>SLIDES_COUNT-1){
        current_slide=0;
    }
    if(current_slide===1 || current_slide===2){
        var elements = document.getElementsByClassName('black');
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "#1f1f1f";
        }
    }else if(current_slide===0 || current_slide===3){
        var elements = document.getElementsByClassName('black');
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "#fff";
        }
    }

    updateCarousel();
});

function updateCarousel(){
    carousel.style.transform = `translateX(${
    -current_slide*slides[0].offsetWidth}px)`;


    document.body.style.background = `#${slides[current_slide].getAttribute('data-bg')}`;
};