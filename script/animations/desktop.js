// timelines
let about_tl = anime.timeline({
    direction:'alternate',
    autoplay: false
});

about_tl.add({ // logo movement
    targets: "#main-logo",
    filter: ["blur(0px) brightness(1)", "blur(10px) brightness(0.4)"],
    easing: "easeInOutSine",
    duration: 1000
});

about_tl.add({ // text appearance
    targets: "#about-text",
    translateY: ["60%", "55%"],
    opacity: 1,
    easing: "easeInSine",
    duration: 500,
    update: (anim) => { // enable the buttons
        if(anim.progress > 50){
            document.getElementById("about-text").classList.remove("disable")
        } else { // disable them when scrolling back
            document.getElementById("about-text").classList.add("disable")
        }
    },
},"-=600");

about_tl.add({ // about text slowly scroll upwards
    targets: "#about-text",
    translateY: "45%",
    opacity: 1,
    easing: "linear",
    duration: 1000,
},"-=100")

// show the projects page
about_tl.add({ // hide about text first
    targets: "#about-text",
    translateY: "40%",
    opacity: 0,
    easing: "easeOutSine",
    duration: 500,
    update: (anim) => { // disable the buttons
        if(anim.progress > 50){
            document.getElementById("about-text").classList.add("disable")
        } else { // enable them when scrolling
            document.getElementById("about-text").classList.remove("disable")
        }
    },
})

about_tl.add({ // logo movement again
    targets: "#main-logo",
    easing: "easeInOutSine",
    translateX: "-50%",
    duration: 1000
}, "-=500");
about_tl.add({
    targets:"#main-logo",
    filter: ["blur(10px) brightness(0.4)","blur(0px) brightness(1)"],
    duration:1000
},"-=700")

// This should calculate everything automatically
var scroll_scaler = 10 // for animation scrolls
var panel_extend_length = 1000 // unit = vh

about_tl.add({ // show title and panel (rule is 1vh for every 20 time unit)
    targets: "#project",
    translateY: ["100vh", `-${panel_extend_length}vh`],
    easing: "linear",
    duration: `${scroll_scaler*(panel_extend_length+100)}`,
}, "-=700");

about_tl.add({ 
    targets: "#main-logo",
    translateY: "-100vh",
    easing: "linear",
    duration: `${scroll_scaler*100}`,
}, `-=${scroll_scaler*(panel_extend_length+100) - 91.5*scroll_scaler}`)
// offset is always <panel duration - 1340>, where 1340 is the offset