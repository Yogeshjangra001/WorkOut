let page1 =document.querySelector(".page-content");
let cursor = document.querySelector(".cursor");

page1.addEventListener("mousemove",(dets)=>{
       gsap.to(".cursor",{
        x:dets.x,
        y:dets.y
       })
})
page1.addEventListener("mouseleave",(dets)=>{
       gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        opacity:0
       })
})
page1.addEventListener("mouseenter",(dets)=>{
       gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        opacity:1
       })
})
//workout

let tl = gsap.timeline()
 
tl.to(".welcome",{
       y:-900,
       duration:1.2,
       delay:1.5
})

tl.from(".nav",{
       y:-100,
       duration:0.9,
       opacity:0
})
tl.from("span",{
       x:-500,
       duration:1,
       opacity:0,
       stagger:1
})
tl.from(".box1",{
       x:-450,
       duration:1,
})
tl.from(".box2",{
       opacity:0,
       duration:1,
})
tl.from(".box3",{
       x:450,
       duration:1,
})
tl.from(".swiper",{
       y:-450,
       duration:1,
       opacity:0
})


// gif

gsap.to(".moti",{
       x:1250,
       repeat:-1,
       duration:11
})

//swiper card
let swiper = new Swiper(".mySwiper", {
       effect: "cards",
       grabCursor: true,
     });


// page-7

let boxing = document.querySelector(".boxing");
let secondImg = document.querySelector(".second-img");
let mainImg = document.querySelector("#main-Img");

mainImg.style.width = boxing.offsetWidth +"px"
let leftspace = boxing.offsetLeft;

boxing.onmousemove=function(e){
     let boxItem =(e.pageX - leftspace) + "px"
     secondImg.style.width = boxItem
}
