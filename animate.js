gsap.from(".nav-bar",{
    opacity:0,
    y:50,
    delay:0,
    duration:1.5
})
gsap.from(".nav-opt",{
    x:500,
    delay:1,
    duration:2
})
gsap.from(".logo",{
    opacity:0,
    y:50,
    delay:1,
    duration:1
})
gsap.from(".about-detail", {
    duration: 3,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body"
     }
});
gsap.from(".feature-img",{
    y:100,
    opacity:0,
    delay:0,

    scrollTrigger: {
        trigger:".feature-img",
        scroll:"body",
        start:"top 60%",
        end:"30%"

    }
})
gsap.from(".enroll",{
       scale:0,
       duration:1,
       opacity:0,
    scrollTrigger:{
        
        trigger:".enroll",
        scroller:"body",
        start:"start 80%"
        

    }
})
gsap.from(".admission",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".admission",
        scroll:"body",
        start:"start 80%"
    }
})