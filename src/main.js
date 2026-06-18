import gsap from "gsap";
import "./style.css";   // ✅ "../style.css" nahi, "./style.css"


// Timeline create karo
const tl = gsap.timeline({paused: true});

// Animation
tl.to(".box1", {
    x: 1200,
  //  rotation: 360,
    duration: 1,
    ease: "power2.out",
})
.to(".box2", {
    x: 1200,
    duration: 1.3,
    ease: "power2.out",
    delay:0.6,
})
.to(".box3", {
    x: 1200,
    duration: 1.3,
    ease: "power2.out",
})
.to(".box4", {
    x:1200,
    duration: 1,
    ease: "power2.out",
})
.to(".box5", {
    x:1200,
    duration: 1,
    ease: "power2.out",
});

// Buttons
const play= document.querySelector(".play")
const pause = document.querySelector(".pause")
const restart = document.querySelector(".restart")
const reverse = document.querySelector(".reverse")


play.addEventListener("click",()=>{
    tl.play();
})

pause.addEventListener("click",()=>{
    tl.pause();
})
restart.addEventListener('click',()=>{
    tl.restart();
})
reverse.addEventListener("click",()=>{
    tl.reverse();
})