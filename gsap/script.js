// gsap.to('#box',{
//     x:1000,
//     rotation:360,
//     duration:2,
//     backgroundColor:"#0000FF",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true,
// });

// var tl = gsap.timeline();

// gsap.from("h1",{
//     y:200,
//     opacity:0,
//     duration:2,
//     stagger:0.5,
// })

// tl.to("#box1",{
//     x:400,
//     duration:2,
//     delay:0.5,
//     repeat:-1,
//     yoyo:true,
// });

// tl.to("#box2",{
//     x:800,
//     duration:2,
//     // delay:0.5,
//     rotate:270,
// });

// tl.to("#box3",{
//     x:1100,
//     duration:2,
//     // delay:1,
//     rotate:360,
// });

//Scroll trigger animation

gsap.from("#page1 #box",{
    scale:0,
    rotation:360,
    duration:2,
})
gsap.from("#page2 #box",{
    scale:0,
    rotation:360,
    // duration:2,
    // scrollTrigger:'#page2 #box',
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 30%",

        scrub:5,
    },
})

gsap.to("#page3 #box",{
    x:360,
    scale:0.1,
    duration:2,
    borderRadius:"10px",
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 60%",
        end:"end 30%",
        markers:true,
        scrub:5,
        pin:true,
    }
})