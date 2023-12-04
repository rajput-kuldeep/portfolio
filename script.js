
function load(){
    let a = 0;
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector(".loader h1").innerHTML = a+ "%";
        }else{
            a = 100
            document.querySelector(".loader h1").innerHTML = a+ "%";
        }
    },150)
}


let tl = gsap.timeline();

tl.to(".loader h1",{
    delay:0.5,
    duration: 1,
    onStart:load(),
})
tl.to(".loader",{
    top: "-100vh",
    delay:0.5,
    duration: 1,
})



let time = gsap.timeline()
tl.from("#navbar img, #navbar ul li a, .center-part",{
    y:-50,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.2
})

// time.from(".center-part", {
//     scale:0,
//     opacity:0,
//     // duration:1
// })

tl.from(".center-part #name span",{
    scale:0,
    opacity:0,
    duration:0.4,
    stagger:0.1,
    repeat:-1
})

// tl.from(".row .column-1", {
//     scale:0,
//     duration:1,
//     opacity:0,
//     delay:0.5,
//     stagger:1,
//     scrollTrigger:{
//         trigger:".row .column-1",
//         scroller:"body",
//         scrub:3,
//         start: "top 5%",
//         end: "top 70%"
        
//     }
// })
// tl.from(".row .column-2", {
//     scale:0,
//     duration:1,
//     opacity:0,
//     delay:0.5,
//     stagger:1,
//     scrollTrigger:{
//         trigger:".row .column-2",
//         scroller:"body",
//         scrub:3,
//         start: "top 5%",
//         end: "top 70%"
        
        
//     }
// })







const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents")



function opentab(tabname){
    for(let tablink of tabLinks){
        tablink.classList.remove("active-link")
    }

    for(let tabcontent of tabContents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}