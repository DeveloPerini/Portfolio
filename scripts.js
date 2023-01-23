//menu toggle
let hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener("click", function() {
  document.body.classList.toggle('menu-open');
});

/* Scroll Class */
window.addEventListener('scroll', function(e) {
  if(window.scrollY > 300){
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});


// gsap

let tl = gsap.timeline();

tl.to(".fade-in", { opacity: 1, y:0, duration: 1, stagger: 0.3, ease: Power2.easeOut }, "1").from(".cover__bg", { scale: 0.6, duration: 4, opacity: 0, ease: Power2.easeOut} , "0")

gsap.to(".text-reveal", { clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)", y:0, duration: 1, stagger: 0.7, ease: Power2.easeOut });


gsap.to(".cover__bg", {
  y: 200,
  scrollTrigger: {
    trigger: ".cover--intro",
    start: "top top",
    end: "bottom top",
    //markers: true,
    scrub: true
  }
});


ScrollTrigger.batch(".fade-up",{
  start: "top 80%",
  onEnter: (elements, triggers) => {
    gsap.to(elements, { opacity: 1, stagger: 0.3, y:0, duration: 1.5,  ease: Power2.easeOut });
    console.log(elements.length, "elements entered");
  }
});

gsap.to(".slide-right", {
  x: -200,
  scrollTrigger: {
    trigger: ".slide-right",
    start: "top 80%",
    end: "bottom top",
    //markers: true,
    scrub: true
  }
});


gsap.to(".slide-left", {
  x: 200,
  scrollTrigger: {
    trigger: ".slide-left",
    start: "top 80%",
    end: "bottom top",
    //markers: true,
    scrub: true
  }
});

gsap.to(".progress-bar",{
  value:100,
  scrollTrigger: {
    scrub: 0.3
  }
})

// slider

var splide = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
  pagination: false,
  breakpoints: {
    800: {
      perPage: 1,
    },
  }
} );

splide.mount();



// cursor custom

let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let a = document.querySelectorAll('a');


document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
  cursor.style.transform = `translate( calc(${x}px - 50%) , calc(${y}px - 50%) )`;
});


a.forEach((item) => {
  item.addEventListener('mouseover', () => {
    outline.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    outline.classList.remove('hover');
  });
})



  // scroll to menu
  let links = document.querySelectorAll('.header__menu li a');

  links.forEach((link, i) => {

    link.addEventListener('click', function(e){
      e.preventDefault();

      let selector = this.getAttribute("href");
      let selectorElement = document.querySelectorAll(selector);


      window.scroll({
        top: selectorElement[0].offsetTop,
        behavior: "smooth"
      });

      document.body.classList.remove('menu-open');

    });

  });
