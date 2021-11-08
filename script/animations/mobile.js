// timelines
let about_tl_mobile = anime.timeline({
    direction:'alternate',
    autoplay: false
});

about_tl_mobile.add({ // logo movement
    targets: "#main-logo",
    filter: ["blur(0px) brightness(1)", "blur(10px) brightness(0.4)"],
    easing: "easeInOutSine",
    duration: 1000
});

about_tl_mobile.add({ // text appearance
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

about_tl_mobile.add({ // about text slowly scroll upwards
    targets: "#about-text",
    translateY: "45%",
    opacity: 1,
    easing: "linear",
    duration: 1000,
},"-=100")

// show the projects page
about_tl_mobile.add({ // hide about text first
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

about_tl_mobile.add({ // logo movement again
    targets: "#main-logo",
    easing: "easeInOutSine",
    translateX: "0%",
    duration: 1000
}, "-=500");
about_tl_mobile.add({
    targets:"#main-logo",
    filter: ["blur(10px) brightness(0.4)","blur(0px) brightness(1)"],
    duration:1000
},"-=700")