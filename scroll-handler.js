// load trigger
const load_trigger = document.getElementById("load-trigger")

// timelines
let about_tl = anime.timeline({
    direction:'alternate',
    autoplay: false
}); about_tl.add({ // logo movement
    targets: "#main-logo",
    translateX: "-13vw",
    easing: "easeInOutSine",
    duration: 1000
}); about_tl.add({ // text appearance
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
},"-=600"); about_tl.add({ // about text slowly scroll upwards
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

// This should calculate everything automatically
const panel_extend_length = 1000 // unit = vh
const scroll_scaler = 8

about_tl.add({ // show title and panel (rule is 1vh for every 20 time unit)
    targets: "#project",
    translateY: ["100vh", `-${panel_extend_length}vh`],
    easing: "linear",
    duration: `${scroll_scaler*(panel_extend_length+100)}`,
}, "-=700"); about_tl.add({ 
    targets: "#main-logo",
    translateY: "-100vh",
    easing: "linear",
    duration: `${scroll_scaler*100}`,
}, `-=${scroll_scaler*(panel_extend_length+100) - 91*scroll_scaler}`)
// offset is always <panel duration - 1340>, where 1340 is the offset

// pages
let pages = {
    'about' : { // about page
        trigger : document.getElementById("about-trigger"),
        after : (reached,value)=>{
            about_tl.seek(value);
        },
        before: () => { // pretty much reset the logo
            anime({ // logo movement
                targets: "#main-logo",
                translateX: "0",
                easing: "easeInOutSine",
                duration: 10
            })
        }
    },
}

// check triggers on scroll
setInterval((e) => {
    // go through pages
    Object.keys(pages).forEach(key => {
        let page = pages[key]

        // get the page's bounding rect
        let page_rect = page.trigger.getBoundingClientRect()
        if(page_rect.y < load_trigger.getBoundingClientRect().y){
            page.after(page.reached, Math.abs(page_rect.y - load_trigger.getBoundingClientRect().y))
        } else {
            page.before()
        }
    });
})

// add navigation button events
document.getElementById("home").addEventListener("click", () => {
    smoothScroll({
        yPos:0,
        duration:2000,
        easing:smoothScroll.easing.easeOutSine
    })
})

document.getElementById("about").addEventListener("click", () => {
    smoothScroll({
        yPos:1500,
        duration:2000,
        easing:smoothScroll.easing.easeOutSine
    })
})

document.getElementById("projects").addEventListener("click", () => {
    smoothScroll({
        yPos:2750,
        duration:2000,
        easing:smoothScroll.easing.easeOutSine
    })
})

// check for manual scrolling and stop if detected
document.body.onwheel = () => {
    smoothScroll.stopAll()
}