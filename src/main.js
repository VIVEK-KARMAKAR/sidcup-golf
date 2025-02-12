import 'remixicon/fonts/remixicon.css'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


let crsr = document.getElementById("cursor")
let crsrBlr = document.getElementById("cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.top = dets.y-12 +'px'
    crsr.style.left = dets.x-12 +'px'

    crsrBlr.style.top = dets.y-192 +'px'
    crsrBlr.style.left = dets.x-192 +'px'
})

let navLinks = document.querySelectorAll("nav h5")

navLinks.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "solid 1px #fff"
        crsr.style.backgroundColor = "transparent"
    })
    
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#B3E824"
    })
})


gsap.to("header",{
    backgroundColor: "black",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "header",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -90%",
        scrub: 2
    }
})

gsap.from("#about-us, #about-images",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 58%",
        scrub:3
    }
})


gsap.from("#cards",{
    y:90,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: "#cards",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 55%",
        scrub:3
    }
})
gsap.from("#last-cards h2",{
    y:50,
    opacity: 0,
    duration:1,
    scrollTrigger: {
        trigger: "#last-cards",
        scroller: "body",
        start: "top 65%",
        end: "top 70%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})


    function slider(params) {
        const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const slideCount = dots.length;

    const updateSliderPosition = (index) => {
      const slideWidth = slider.querySelector('.flex-none').offsetWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    const updateActiveDot = (index) => {
      dots.forEach(dot => dot.classList.remove('bg-lime-400'));
      dots[index].classList.add("bg-lime-400");
    };

    const moveToSlide = (index) => {
      currentIndex = index;
      updateSliderPosition(currentIndex);
      updateActiveDot(currentIndex);
    };

    // Automatic Sliding
    const autoSlide = () => {
      currentIndex = (currentIndex + 1) % slideCount;
      moveToSlide(currentIndex);
    };

    let slideInterval = setInterval(autoSlide, 6000); // Slide every 6 seconds

    // Dot Navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop auto-sliding on manual interaction
        moveToSlide(index);
        slideInterval = setInterval(autoSlide, 6000); // Restart auto-sliding
      });
    });

    // Initialize
    updateActiveDot(currentIndex);
    }

    slider()